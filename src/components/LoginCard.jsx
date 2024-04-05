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


    return (<div>
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="input-frame">
                <div className="input">
                    <input type="text" placeholder="Name" required />
                </div>
                <div className="input">
                    <input type="Password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <p>{errorMessage}</p>
            </div>
            <div className="submit-container">
                <button className="submit" onClick={checkPassword}>Log In</button>
            </div>
        </div>
    </div>
    )
}

export default LoginCard