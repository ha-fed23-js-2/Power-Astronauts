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

    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function checkPassword() {
        if (password.length === 0) {
            setErrorMessage('Lösenordsfältet kan inte vara tomt.');
        } else if (password !== 'mums') {
            setErrorMessage('Fel lösenord.');
        } else {
            setErrorMessage('');
        }
    }
    // const passwordIsValid = password === ('mums');
    // const passwordErrorMessage = passwordIsValid ? '' : 'Lösenordet är felaktigt';

    const [name, setName] = useState('');
    const [nameTouched, setNameTouched] = useState(false);

    const nameIsValid = name.length > 0;
    const nameErrorMessage = nameIsValid ? '' : 'Vänligen, fyll i ditt namn';
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

    return (
        <div>
            <div className='loggin-container'>
                <div className="header">
                    <div className="text">Menyportal</div>
                    <div className="underline"></div>
                </div>
                <div className="input-frame">
                <div class="input">
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
                    </div>
                        </div>
                    <p className="error">{errorMessage}</p>
                </div>
                <div className="submit-container">
                    <Link to="/EditPage">
                        <button className="submit" onClick={checkPassword} disabled={isSubmitDisabled}>Logga in</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginCard;

