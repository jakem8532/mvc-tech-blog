async function editUserHandler(e) {
    e.preventDefault()

    let username = document.querySelector('input[name="username"]').value.trim()
    if(username.length) {
        username = '"username": "' + username + '"'
    }
    let email = document.querySelector('input[name="email"]').value.trim()
    if(email.length) {
        email = '"email": "' + email + '"'
    }
    let password = document.querySelector('input[name="password"]').value.trim()
    if(!password.length) {
        alert('You must enter your current password in order to save changes.  Otherwise, add a new password')
    }else {
        password = '"password": "' + password + '"';
    }

    const id = document.querySelector('input[name="user-id"]').value

    let userUpdate = '{' + [username, email, password].filter(value => value).join(',') + '}'
    userUpdate = JSON.parse(userUpdate)

    const res = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(userUpdate),
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

document.querySelector('.edit-user-form').addEventListener('submit', editUserHandler)