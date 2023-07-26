import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('email cannot be empty');
    const [passwordError, setPasswordError] = useState('password cannot be empty');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const navigate = useNavigate();

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
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

    return (
        <div className="auth-form-container">
            <h2 className="login">Login</h2>
            <form className="login-form" onSubmit={handlerSubmit}>
                <label htmlFor="email">email</label>
                {(emailDirty && emailError) && <div className="error">{emailError}</div>}
                <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} value={email} type="email" placeholder="youemail@mail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                {(passwordDirty && passwordError) && <div className="error">{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} value={password} type="password" placeholder="**********" id="password" name="password" />
                <button onClick={() => navigate('/home')} disabled={!formValid} type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => navigate('/register')}>Dont have an account? Register here.</button>
        </div>
    )
}