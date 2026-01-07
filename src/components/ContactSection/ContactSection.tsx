import { useState } from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Contact us</h1>
          <p className={styles.contactSubtitle}>
            Have any questions or need to get more information about a product? Either way, you're in the
            right spot, just contact us and we will get back to you as soon as possible.
          </p>
          <h2 className={styles.companyName}>Homentry LLC</h2>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <strong>Phone:</strong> <a href="tel:01XXX">01XXX</a>
            </div>
            <div className={styles.infoItem}>
              <strong>Email:</strong> <a href="mailto:pappow@gmail.com">pappow@gmail.com</a>
            </div>
            <div className={styles.infoItem}>
              <strong>Address:</strong> Dhaka, Gulshan
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h3 className={styles.formTitle}>Have a question? Use the form below to send us a message.</h3>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className={styles.formInput}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.formInput}
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className={styles.formTextarea}
              rows={5}
              required
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
