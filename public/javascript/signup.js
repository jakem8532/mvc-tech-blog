const signupForm = document.querySelector('.signup-form')

async function signupFormHandler(e) {
    e.preventDefault()

    const username = document.querySelector('#username-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()

    if (username && email && password) {
        const res = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.ok) {
            alert('Account created!')
            document.location.replace('/dashboard')
        }else {
            alert(res.statusText)
        }
    }
}

signupForm.addEventListener('submit', signupFormHandler)