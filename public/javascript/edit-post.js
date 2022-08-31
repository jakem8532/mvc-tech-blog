const editPostForm = document.querySelector('.edit-post-form')

async function editPostHandler(e) {
    e.preventDefault()

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        ]

    const title = document.querySelector('input[name="post-title"]').value
    const post_text = document.querySelector('textarea[name="post-text"]').value

    const res = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type:': 'application/json'
        }
    })

    if (res.ok) {
        document.location.replace('/dashboard')
    }else {
        alert(res.statusText)
    }
}

editPostForm.addEventListener('submit', editPostHandler)