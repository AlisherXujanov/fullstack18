"use client"
import emailjs from '@emailjs/browser'

function Contacts() {
    return (
        <div className="contacts-page-wrapper">
            <div className="email-form">
                <h1>Send Email</h1>

                <form ref={form} onSubmit={(e) => submit(e)}>
                    <input type="text" hidden value='напишите своё имя' name='from_name' />

                    <label htmlFor="reciever_name">Reciever name</label>
                    <input type="text" id="reciever_name"
                        placeholder="Reciever name" name='to_name'
                    />

                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" id="exampleInputEmail1"
                        placeholder="Reciever email address" name='user_email'
                    />
                    <small id="email-help">
                        We'll never share your email with anyone else.
                    </small>

                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea id="exampleFormControlTextarea1" rows="3"
                        placeholder="Enter your message here..."
                        name="message"
                    ></textarea>
                    <small id="message-help">Text area for your message.</small>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts