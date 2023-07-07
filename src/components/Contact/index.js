import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../Layout/AnimatedLetters";
import "./index.scss";
import Logo from "../Layout/Logo";

const Contact = () => {

    const [letterClass, setLetterClass] = useState("text-animate");


    useEffect(() => {
        return () =>
            setTimeout(() => {
                setLetterClass("text-animate-hover");
            }, 3000);
    }, []);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5at10lo', 'template_50hiugu', form.current, 'Nj5PNS1MGYZOrro8Y')
            .then((result) => {
                alert('Message successfully sent!')
                window.location.reload(false)

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a 26 year old, self taught and professionally guided front end
                        react developer based in Florida at the moment
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required />
                                </li>
                                <li>
                                    <input type="subject" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea type="message" name="message" placeholder="Message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
