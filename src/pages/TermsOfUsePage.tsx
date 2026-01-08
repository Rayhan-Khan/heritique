import styles from './PolicyPage.module.css';
import { CONTACT_INFO } from '../constants/contactInfo';

const TermsOfUsePage = () => {
  return (
    <div className={styles.policyPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Terms of Use
            <span className={styles.sparkles}>
              <span className={styles.sparkle}>!</span>
              <span className={styles.sparkle}>!</span>
              <span className={styles.sparkle}>!</span>
            </span>
          </h1>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            By accessing or using{' '}
            <a href="https://heritique.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              https://heritique.com
            </a>{' '}
            ("the Site"), you agree to comply with these Terms of Use. Please read them carefully. If you disagree with any part, do not use the Site.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Use of the Site</h2>
            <p>
              You may only use this Site for lawful purposes. Any misuse, unauthorized access, or disruption of service is strictly prohibited. We reserve the right to terminate access for violations.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Intellectual Property</h2>
            <p>
              All content on the Site (logos, images, text, designs) is owned by or licensed to <strong>Homentry LLC</strong>. You may not copy, modify, or distribute any content without our permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Product Info & Pricing</h2>
            <p>
              We aim to provide accurate product descriptions and prices, but errors may occur. We reserve the right to correct pricing mistakes and cancel or refuse orders if necessary.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Orders & Payments</h2>
            <p>
              By placing an order, you agree to provide accurate info and a valid payment method. Orders are subject to acceptance and availability. We may cancel an order if we detect errors or fraud.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Shipping & Delivery</h2>
            <p>
              Shipping estimates are provided on the Site, but actual delivery may vary. We are not responsible for delays beyond our control, including carrier or customs issues.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Returns & Refunds</h2>
            <p>
              Please refer to our full Return & Refund Policy. Item must be returned in original condition. Return shipping may be at your expense unless the product was incorrect or defective.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
            <p>
              Homentry LLC is not liable for indirect or incidental damages resulting from your use of the Site or our products. Our total liability is limited to the amount you paid for the product.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Indemnification</h2>
            <p>
              You agree to hold Homentry LLC harmless from any claims related to your use of the Site, violation of these Terms, or breach of any rights of another.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to Terms</h2>
            <p>
              We may update these Terms at any time. Continued use of the Site after updates means you accept the revised Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at Homentry LLC:{' '}
              <strong>Phone:</strong> <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className={styles.link}>{CONTACT_INFO.phone}</a>,{' '}
              <strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className={styles.link}>{CONTACT_INFO.email}</a>,{' '}
              <strong>Address:</strong> 30 N Gould St # 7619 Sheridan, Wyoming 82801, USA
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
