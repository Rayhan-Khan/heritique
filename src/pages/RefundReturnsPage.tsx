import styles from './PolicyPage.module.css';
import { CONTACT_INFO } from '../constants/contactInfo';

const RefundReturnsPage = () => {
  return (
    <div className={styles.policyPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Refund & Returns
            <span className={styles.sparkles}>
              <span className={styles.sparkle}>!</span>
              <span className={styles.sparkle}>!</span>
              <span className={styles.sparkle}>!</span>
            </span>
          </h1>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            At <strong>Homentry LLC</strong>, your satisfaction is our top priority. If any issues arise with your order, we're here to help make it right.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Product Delivery & Refunds</h2>
            <ul className={styles.list}>
              <li>
                If your order hasn't arrived within the guaranteed timeframe (60 days) — excluding our 2–5 day processing period — you may request a refund or reshipment.
              </li>
              <li>
                Received the wrong item? You can also request a reshipment or full refund.
              </li>
              <li>
                If you no longer want the item you received, you may request a refund, but the item must be unused and returned at your expense.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Easy Returns – 14 Days</h2>
            <ul className={styles.list}>
              <li>
                You have <strong>14 days</strong> from the date of delivery to return an item if you're unsatisfied.
              </li>
              <li>
                Simply email us at <a href={`mailto:${CONTACT_INFO.email}`} className={styles.link}>{CONTACT_INFO.email}</a>, and we'll guide you through the process.
              </li>
              <li>
                Once we receive the returned item, we'll issue a full refund.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Order Cancellation or Modification</h2>
            <p>Need to change or cancel your order? No problem.</p>
            <ul className={styles.list}>
              <li>
                You have <strong>12 hours</strong> from the time of purchase to contact us at <a href={`mailto:${CONTACT_INFO.email}`} className={styles.link}>{CONTACT_INFO.email}</a>.
              </li>
              <li>
                After that, if your order has already shipped, you'll need to return the item for a refund (excluding shipping fees).
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Refund Eligibility</h2>
            <p>Refunds may not be granted under the following conditions:</p>
            <ul className={styles.list}>
              <li>Incorrect address provided during checkout</li>
              <li>Delays or issues due to customs, natural disasters, or other events beyond our control</li>
            </ul>
            <p>
              Refund requests must be made within <strong>15 days</strong> after the guaranteed 60-day delivery period expires.
            </p>
            <p>
              To request a refund, please contact us through the Contact Us page.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Exchanges</h2>
            <p>Need a different size or item?</p>
            <ul className={styles.list}>
              <li>
                Please reach out to us before sending anything back. We'll assist you with the exchange process.
              </li>
              <li>
                Unauthorized returns may not be accepted.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Lost or Undelivered Packages</h2>
            <p>
              Homentry LLC is not responsible for lost or undelivered packages due to incorrect shipping addresses.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Refund Processing</h2>
            <p>
              Once approved, refunds are processed promptly and issued to your original payment method within <strong>14 days</strong>.
            </p>
          </section>

          <section className={styles.section}>
            <p>
              If you have any questions or concerns, feel free to reach out at Homentry LLC:{' '}
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

export default RefundReturnsPage;
