"use client"
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import './style.scss'
import { useTranslation } from "react-i18next";

function Contacts() {
    const { t, i18n: { changeLanguage, language } } = useTranslation();


    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    function submit(e) {
        e.preventDefault(); // prevents the page from reloading when you hit "Send"


        const tempData = {
            ...form,
            time: new Date().toDateString(),
        }

        emailjs.send('service_rm3puvb', 'template_yb1619y', tempData, 'mbcCG18ZiPltCRfB-')
            .then(() => {
                alert('Message sent successfully');
            })
            .catch(() => {
                alert('An error occurred, please try again');
            });

        e.target.reset(); // resets the form after submission
    }


    function handleFormData(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="contacts-page-wrapper">
            <div className="email-form">
                <h1>{t("contactsPage.title")}</h1>

                <form onSubmit={submit}>
                    <input type="text" hidden value='напишите своё имя' name='from_name'
                        onChange={handleFormData}
                    />

                    <label htmlFor="reciever_name">Reciever name</label>
                    <input type="text" id="reciever_name"
                        placeholder="Reciever name" name='name'
                        onChange={handleFormData}
                    />

                    <label htmlFor="exampleInputEmail1">{t("contactsPage.form.email")}</label>
                    <input type="email" id="exampleInputEmail1"
                        placeholder="Reciever email address" name='email'
                        onChange={handleFormData}
                    />
                    <small id="email-help">
                        We'll never share your email with anyone else.
                    </small>

                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea id="exampleFormControlTextarea1" rows="3"
                        placeholder="Enter your message here..."
                        name="message"
                        onChange={handleFormData}
                    ></textarea>
                    <small id="message-help">Text area for your message.</small>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts