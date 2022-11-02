import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import "../assets/css/contactStyle.css"

function Contact() {
    const [contactName, setContactName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    //change state on input
    const handleInputChange = (e) => {
        const element = e.target.name;
        const value = e.target.value;

        if (element === "contactName") {
            setContactName(value)
        }
        else if (element === "email") {
            setEmail(value)
        }
        else if (element === "message") {
            setMessage(value)
        }
    }
//check for empty fields and invalid email on exiting field if nothing was changed
    const handleBlur = (e) => {
        if (contactName === '') {
            setErrorMessage('Your name must not be blank');
            return;
        }
        else if (message === '') {
            setErrorMessage('Your message must not be blank');
            return;
        }
        else if (!validateEmail(email)) {
            setErrorMessage('Email address is invalid')
            return;
        }
        return
    }
//validate input on submit
//input values go nowhere 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (contactName === '') {
            setErrorMessage('Your name must not be blank');
            return;
        }
        else if (message === '') {
            setErrorMessage('Your message must not be blank');
            return;
        }
        else if (!validateEmail(email)) {
            setErrorMessage('Email address is invalid')
            return;
        }
        else {
            setErrorMessage('Message validated')
            setContactName('')
            setEmail('')
            setMessage('')
            return
        }
    }

    return (
        <>
        <h1 className="text-center">Contact Me</h1>
            <form className="contact-form justify-content-center">
                <div className="mb-3 text-white p-4">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" name="contactName" value={contactName} onBlur={handleBlur} onChange={handleInputChange}></input>
                </div>
                <div className="mb-3 text-white p-4">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" name="email" value={email} onChange={handleInputChange}></input>
                </div>
                <div className="mb-3 text-white p-4">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" placeholder="Enter your message" name="message" value={message} onChange={handleInputChange}></textarea>
                </div>
                <input className="btn sub-button" type="submit" onClick={handleSubmit}></input>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text fw-bold fst-italic fs-2" style={{color:"red"}}>{errorMessage}</p>
                </div>
            )}
        </>
    )
}

export default Contact;