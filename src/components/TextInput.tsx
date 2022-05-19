import React, { useState } from 'react'
import validator from 'validator';

export const TextInput = () => {

    const [emailError, setEmailError] = useState(false)
    const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError(false)
        } else {
            setEmailError(true)
        }
    }

    return (
        <div className='text__form'>
            <div className="input__container">
                <input type="text" className={`text__input ${emailError && 'invalid'}`} placeholder='Your email address…' onChange={validateEmail} />
                {emailError && <span className='erros__span'>Please provide a valid email address</span>}
            </div>
            <button className="tex__button">Notify Me</button>
        </div>
    )
}
