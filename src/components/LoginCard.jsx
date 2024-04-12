// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const LoginCard = () => {

//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     function checkPassword() {
//         if (password.length === 0) {
//             setErrorMessage('Lösenordsfältet kan inte vara tomt.');
//         } else if (password !== 'mums') {
//             setErrorMessage('Fel lösenord.');
//         } else {
//             setErrorMessage('');
//         }
//     }

//     const [name, setName] = useState('');
//     const [nameTouched, setNameTouched] = useState(false);

//     const nameIsValid = name.length > 0;
//     const nameErrorMessage = nameIsValid ? '' : 'Vänligen, fyll i ditt namn'; 
//     const isSubmitDisabled = password.length === 0 || password !== 'mums';

//     let nameErrorClass = 'error ', nameClass = '';
//     if (!nameTouched) {
//         nameErrorClass += 'hidden';
//     } else {
//         nameErrorClass += nameIsValid ? 'hidden' : 'invalid';
//         nameClass += nameIsValid ? 'valid' : 'invalid';
//     }
//     return (
//         <div>
//             <div className='loggin-container'>
//                 <div className="header">
//                     <div className="text">Menyportal</div>
//                     <div className="underline"></div>
//                 </div>
//                 <div className="input-frame">
//                     <div className="input">
//                         <input type="text" placeholder="Name" required />
//                         <p className={nameErrorClass}> {nameErrorMessage} &nbsp; </p>
//                     </div>
//                     <div className="input">
//                         <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
//                     </div>

//                 </div>
//                 <div className="submit-container">
//                      <Link to="/EditPage"> {/*Använd Link för att navigera till EditPage */}
//                      <button className="submit" onClick={checkPassword} disabled={isSubmitDisabled}>Logga in</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginCard;
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginCard = () => {

    const [name, setName] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function checkUsername() {
        if (name.length === 0) {
            setNameTouched(true);
        }
    }

    function checkPassword() {
        if (password.length === 0) {
            setErrorMessage('Lösenordsfältet kan inte vara tomt.');
        } else if (password !== 'mums') {
            setErrorMessage('Fel lösenord.');
        }
        else {
            setErrorMessage('');
        }
    }

    function validateForm() {
        checkUsername()
        checkPassword()
    }

    // const passwordIsValid = password === ('mums');
    // const passwordErrorMessage = passwordIsValid ? '' : 'Lösenordet är felaktigt';


    const nameIsValid = name.length > 0;
    const nameErrorMessage = nameIsValid ? '' : 'Vänligen fyll i ditt namn.';
    const isSubmitDisabled = password.length === 0 || password !== 'mums' || !nameIsValid;

    let nameErrorClass = 'error ', nameClass = '';
    if (!nameTouched) {
        nameErrorClass += 'hidden';
    } else {
        nameErrorClass += nameIsValid ? 'hidden' : 'invalid';
        nameClass += nameIsValid ? 'valid' : 'invalid';
    }
    // let passwordErrorClass = 'error ', passwordClass = '';
    // if (passwordIsValid) {
    //     passwordErrorClass += 'hidden';
    // } else {
    //     passwordErrorClass += passwordIsValid ? 'hidden' : 'invalid';
    //     passwordClass += passwordIsValid ? 'valid' : 'invalid'; 
    // }

    // onKeyUp={(e) => {
    //    if (e.key === "Enter"){
    //     validateForm;
    // }
    // }

    return (
        <div>
            <div className='loggin-container'>
                <div className="header">
                    <div className="text">Menyportal</div>
                    <div className="underline"></div>
                </div>
                <div className="input-frame">
                    <div className="input">
                        <input type="text" placeholder="Namn" required
                            className={nameClass}
                            value={name}
                            onChange={event => setName(event.target.value)}
                            onBlur={() => setNameTouched(true)}
                        />
                        <p className={nameErrorClass}>{nameErrorMessage} &nbsp;</p>
                    </div>
                    <div className="input">
                        <div className="input">
                            <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                            <p className="password-error">{errorMessage}</p>
                        </div>
                    </div>
                </div>
                {isSubmitDisabled ? <div className="submit-container">
                    <button className="submit" onClick={validateForm}>Logga in</button>
                </div>
                    :
                    <div className="submit-container">
                        <Link to="/Menyportal">
                            <button className="submit">Logga in</button>
                        </Link>
                    </div>}
            </div>
        </div>
    );
}

export default LoginCard;

