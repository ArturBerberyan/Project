import { Header } from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "../Components/Footer";

export const ContactPage = () => {
  
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [subject, setSubject] = useState('');
    const [fNameDirty, setFnameDirty] = useState(false);
    const [lNameDirty, setLnameDirty] = useState(false);
    const [subjectDirty, setSubjectDirty] = useState(false);
    const [fNameError, setFnameError] = useState('First Name cannot be empty');
    const [lNameError, setLnameError] = useState('Last Name cannot be empty');
    const [subjectError, setSubjectError] = useState('Suject cannot be empty');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
      if (fNameError || lNameError || subjectError) {
         setFormValid(false)
      } else {
         setFormValid(true)
      }
  }, [fNameError, lNameError, subjectError])


    const blurHandler = (e) => {
      switch (e.target.name) {
          case 'fName':
              setFnameDirty(true)
              break 
          case 'lName':
              setLnameDirty(true)
              break
          case 'subject':
              setSubjectDirty(true)
      }
  }

    const fNameHandler = (e) => {
      setFname(e.target.value)

      if(e.target.value.length < 3 || e.target.value.length > 8) {
            setFnameError('First Name must be longer than 3 and less than 8')
          if(!e.target.value) {
            setFnameError('First Name cannot be empty')
          }
      } else {
            setFnameError('')
      }
  }

    const lNameHandler = (e) => {
      setLname(e.target.value)

      if(e.target.value.length < 3 || e.target.value.length > 8) {
            setLnameError('Last Name must be longer than 3 and less than 8')
          if(!e.target.value) {
            setLnameError('Last Name cannot be empty')
          }
      } else {
            setLnameError('')
      }
  }

    const subjectHandler = (e) => {
      setSubject(e.target.value)

      if(e.target.value.length < 3 || e.target.value.length > 30) {
            setSubjectError('Subject must be longer than 3 and less than 8')
          if(!e.target.value) {
            setSubjectError('Subject cannot be empty')
          }
      } else {
            setSubjectError('')
      }
  }

    const handlerSubmit = (e) => {
      e.preventDefault();
    }

    const navigate = useNavigate();

    return (
      <div>
        <Header />
        <div className="contact-page">
          <h1 className='contact'>CONTACT</h1>
          <h2 className="feedback">PLEASE LEAVE YOUR FEEDBACK</h2>
        <  form onSubmit={() => handlerSubmit} className="contact-form">

            <label className="fname" htmlFor="fname">First Name</label>
            {(fNameDirty && fNameError) && <div className="error">{fNameError}</div>}
            <input onChange={e => fNameHandler(e)} onBlur={e => blurHandler(e)} value={fName} type="text" id="fname" name="fName" placeholder="Your name.." />

            <label className="lname" htmlFor="lname">Last Name</label>
            {(lNameDirty && lNameError) && <div className="error">{lNameError}</div>}
            <input onChange={e => lNameHandler(e)} onBlur={e => blurHandler(e)} value={lName} type="text" id="lname" name="lName" placeholder="Your last name.." />

            <label className="subject" htmlFor="subject">Subject</label>
            {(subjectDirty && subjectError) && <div className="error">{subjectError}</div>}
            <textarea onChange={e => subjectHandler(e)} onBlur={e => blurHandler(e)} value={subject} className="subject-text" id="subject" name="subject" placeholder="Write something.."></textarea>

            <button onClick={() => navigate('/home')} disabled={!formValid} className="submit" type="submit">SUBMIT</button>

        </form>
        </div>
        <Footer />
      </div>
    )
}
