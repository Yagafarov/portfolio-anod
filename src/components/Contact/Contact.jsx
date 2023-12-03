import React, { useRef } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qo51tad', 'template_0b27yvo', form.current, '4ocOG5gKpRb99aWBy')
      .then((result) => {

          console.log(result.text);
          alert('Forma junatildi!');
          window.location.reload();
          
        }, (error) => {
        alert('Forma junatilmadi!.');
          console.log(error.text);
      });
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insert your name' name='user_name'  />
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Insert your email' name='user_email'  />
            </div>
          </div>

          <div className="contact__form-div">
            <input type="text" className="contact__form-input" placeholder='Insert your subject' name='msg_subject'/>
          </div>


          <div className="contact__form-div contact__form-area">
            <textarea name="msg_content" className='contact__form-input' placeholder='Write your message'></textarea>
          </div>

          <input type="submit" value="Send Message" className='btn' />
        </form>
      </div>
    </section>
  )
}

export default Contact