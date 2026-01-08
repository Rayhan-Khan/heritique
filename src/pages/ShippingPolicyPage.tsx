import styles from './PolicyPage.module.css';
import { CONTACT_INFO } from '../constants/contactInfo';

const ShippingPolicyPage = () => {
  return (
    <div className={styles.policyPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Shipping Policy</h1>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            At <strong>Heritique</strong>, we work directly with trusted manufacturers to bring you high-quality products at competitive prices — often up to <strong>60% off</strong> retail!
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How do we ship packages?</h2>
            <ul className={styles.list}>
              <li>
                Orders from our <strong>U.S. warehouse</strong> are shipped via <strong>USPS</strong>.
              </li>
              <li>
                Orders from our <strong>international warehouse (including China)</strong> are shipped using <strong>USPS</strong> or <strong>YunExpress</strong>, depending on product weight and size.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Do we ship worldwide?</h2>
            <p>
              Yes! We offer <strong>free shipping to over 200 countries</strong> worldwide.
            </p>
            <p>
              If we're unable to ship to your location for any reason, our team will contact you directly.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Customs & Duties</h2>
            <p>
              Please note, <strong>Homentry LLC is not responsible for any customs fees or duties</strong> that may apply upon arrival. By placing an order, you acknowledge that packages may incur such charges based on your country's regulations.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Estimated Shipping Times</h2>
            <p>Shipping times may vary depending on your location. Below are the general estimates:</p>

            <table className={styles.shippingTable}>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Estimated Shipping Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>United States</td>
                  <td>7-21 business days</td>
                </tr>
                <tr>
                  <td>Canada & Europe</td>
                  <td>7-25 business days</td>
                </tr>
                <tr>
                  <td>Australia & New Zealand</td>
                  <td>10-15 business days</td>
                </tr>
                <tr>
                  <td>Mexico, Central & South America</td>
                  <td>15-30 business days</td>
                </tr>
              </tbody>
            </table>

            <p className={styles.note}>
              *Note: These estimates do not include our 2-5 business day processing time.
            </p>
          </section>

          <section className={styles.section}>
            <p>
              Have questions? Feel free to contact us at Homentry LLC:{' '}
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

export default ShippingPolicyPage;
