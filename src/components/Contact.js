import React from 'react'
import './contact.css'

const Contact = () => {
    return(
        <div className="contact-container">
            <h1 className="contact-header" id="contact">Contact</h1>
            <form
                className="main-form"
                name="contact"
                method="POST"
                data-netlify="true"
            >
                <input type="hidden" name="contact" value="contact" />

                <input type="text" name="name" placeholder="[name]"/>

                <br />
                <input
                type="email"
                placeholder="[email]"
                name="email"
                required
                />


                <textarea
                name="textarea"
                id="textarea"
                className="class-area"
                placeholder="[let's talk]"
                name="message"
                ></textarea>

                <br/>

                <input type="submit" className="submit" placeholder="Submit" />
            </form>
        </div>
    )
}

export default Contact