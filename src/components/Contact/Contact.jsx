import React, { useRef } from 'react';
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendToTelegram = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const msgSubject = formData.get('msg_subject');
    const msgContent = formData.get('msg_content');

    const message = `

      Name: ${userName}
      Email: ${userEmail}
      Subject: ${msgSubject}
      Message: ${msgContent}
      
    `;

    const telegramApiUrl = `https://api.telegram.org/bot6440515392:AAF_okXB_ht2dvpo7HB9Aq6WE4DAIY9jkEY/sendMessage`;
    const chatId = '6693729621'; // Replace with your chat ID

    try {
      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      });

      if (response.ok) {
        alert('Forma junatildi!');
        window.location.reload();
      } else {
        alert('Forma junatilmadi!.');
        console.error('Telegram API response:', await response.json());
      }
    } catch (error) {
      alert('Forma junatilmadi!.');
      console.error('Error:', error);
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>
        <form ref={form} onSubmit={sendToTelegram} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insert your name' name='user_name' />
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Insert your email' name='user_email' />
            </div>
          </div>

          <div className="contact__form-div">
            <input type="text" className="contact__form-input" placeholder='Insert your subject' name='msg_subject' />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="msg_content" className='contact__form-input' placeholder='Write your message'></textarea>
          </div>

          <input type="submit" value="Send Message" className='btn' />
        </form>
      </div>
    </section>
  );
}

export default Contact;
