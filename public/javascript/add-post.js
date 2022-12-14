const newPostForm = document.querySelector('.new-post-form')

async function newPostHandler(e) {
    e.preventDefault()

    const title = document.querySelector('input[name="post-title"]').value
    const post_text = document.querySelector('textarea[name="post-text"]').value

    const res = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (res.ok) {
        document.location.replace('/dashboard')
    }else {
        alert(res.statusText)
    }
}

newPostForm.addEventListener('submit', newPostHandler)