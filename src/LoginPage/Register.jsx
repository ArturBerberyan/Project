import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const  Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState('name cannot by empty');
    const [emailError, setEmailError] = useState('email cannot be empty');
    const [passwordError, setPasswordError] = useState('password cannot be empty');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, emailError, passwordError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }


    const nameHandler = (e) => {
        setName(e.target.value)

        if(e.target.value.length < 3 || e.target.value.length > 8) {
            setNameError('name must be longer than 3 and less than 8')
            if(!e.target.value) {
                setNameError('name cannot be empty')
            }
        } else {
            setNameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( re.test(String(e.target.value).toLowerCase())) {
            setEmailError('')
        } else {
            setEmailError('incorrect email')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)

        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('password must be longer than 3 and less than 8')
            if(!e.target.value) {
                setPasswordError('password cannot be empty')
            }
        } else {
            setPasswordError('')
        }
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
    }

    const navigate = useNavigate();

    return (
        <div className="auth-form-container">
            <h2 className="register">Register</h2>
            <form className="register-form" onSubmit={handlerSubmit}>
                <label htmlFor="name">Full name</label>
                {(nameDirty && nameError) && <div className="error">{nameError}</div>}
                <input onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} value={name} name="name" id="name" placeholder="full Name" />
                <label htmlFor="email">email</label>
                {(emailDirty && emailError) && <div className="error">{emailError}</div>}
                <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} value={email} type="email" placeholder="youemail@mail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                {(passwordDirty && passwordError) && <div className="error">{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} value={password} type="password" placeholder="**********" id="password" name="password" />
                <button onClick={() => navigate('/')} disabled={!formValid} type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => navigate('/')}>Already have an account? Login here.</button>
        </div>
    )
}
