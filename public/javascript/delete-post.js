const deletePostBtn = document.querySelector('.delete-post-btn')

async function deletePostHandler(e) {
    e.preventDefault()

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]

    const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        document.location.replace('/dashboard')
    }else {
        alert(res.statusText)
    }
}

deletePostBtn.addEventListener('submit', deletePostHandler)