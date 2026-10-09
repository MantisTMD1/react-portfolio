import React, { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "user_TrXPs7sSN6hdlMgRRuFAG";

const ContactMe = () => {
    const [sending, setSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.target;

        if (!SERVICE_ID || !TEMPLATE_ID) {
            alert("Sorry, the contact form isn't configured yet. Please reach out on LinkedIn instead.");
            return;
        }

        setSending(true);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
            .then(() => {
                alert("Thanks for reaching out!");
                form.reset();
            }, (error) => {
                console.error(error);
                alert("Sorry, your message couldn't be sent. Please try again later.");
            })
            .finally(() => setSending(false));
    };

    return (
        <div id="contact" className="contact-form">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Contact Me</h1>
                <p className="text-center">Message me for whatever reason. Lets chat! </p>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-md-6 col-xs-12">
                            <input type="text" className="form-control" placeholder="Name" name="name" required />
                            <div className="line"></div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            <div className="line"></div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required />
                            <div className="line"></div>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <textarea className="form-control" cols="30" rows="8" placeholder="Write your message here..." name="message" required></textarea>
                            <div className="line"></div>
                        </div>
                        <div className="col-md-6 col-xs-12">

                            <button type="submit" className="button-edit" disabled={sending}>
                                {sending ? "Sending..." : "Send Message"}
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;