import { useState } from 'react'

const LoginCard = () => {

    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    function checkPassword() {
        if (password.length === 0) {
            setErrorMessage('Lösenordsfältet kan inte vara tomt.')
        }
        else if (password != 'mums') {
            setErrorMessage('Fel lösenord.')
        }
        else {
            setErrorMessage('')
        }
    }


    return( <div>
        <input type="text" onChange={(event) => setPassword(event.target.value)} required></input>
        <button onClick={checkPassword}></button>
        <p>{errorMessage}</p>
    </div>
    )
}

export default LoginCard