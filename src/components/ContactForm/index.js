import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



return (

const [errorMessage, setErrorMessage] = useState('');

const [formState, setFormState] = useState({ name: '', email: '', message: '' });
const { name, email, message } = formState;

function handleChange(e) {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);

        // isValid conditional statement
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
    }
    else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }

    if (!errorMessage) {
         setFormState({ ...formState, [e.target.name]: e.target.value });
    }
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
}

console.log(formState);

<div>
    <form id="contact-form" onSubmit={handleSubmit}>
        <input type="text" defaultValue={name} name="name" onChange={handleChange} />
        <input type="email" defaultValue={email} name="email" onChange={handleChange} />
        <textarea name="message" defaultValue={message} rows="5"  onChange={handleChange} />
        {errorMessage && (
  <div>
    <p className="error-text">{errorMessage}</p>
  </div>
)}
    </form>
</div>

)
