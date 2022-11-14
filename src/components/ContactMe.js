import emailjs from "emailjs-com";


const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_id', 'template_id', e.target, 'user_TrXPs7sSN6hdlMgRRuFAG')
            .then((result) => {
                console.log(result.text);
                alert("Thanks for reaching out!");
            }, (error) => {
                console.log(error.text);
                
            });
        e.target.reset()
    };

    return (
        <div id="contact" className="contact-form">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Contact Me</h1>
                <p className="text-center">Message me for whatever reason. Lets chat! </p>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-md-6 col-xs-12">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                            <div className="line"></div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            <div className="line"></div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            <div className="line"></div>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Write your message here..." name="message"></textarea>
                            <div className="line"></div>
                        </div>
                        <div className="col-md-6 col-xs-12">

                            <button className="button-edit">
                                <input type="submit" value="Send Message"></input>
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;