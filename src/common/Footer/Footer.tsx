import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const features = [
    { id: 1, icon: 'fas fa-shipping-fast', title: 'Fast delivery' },
    { id: 2, icon: 'fas fa-thumbs-up', title: 'Quality Product' },
    { id: 3, icon: 'fas fa-undo', title: 'Easy Returns' },
    { id: 4, icon: 'fas fa-headset', title: 'Strong Support' }
  ];

  const quickLinks = [
    { name: 'Contact us', path: '/contact' },
    { name: 'My account', path: '/login' },
    { name: 'Checkout', path: '/checkout' },
    { name: 'Cart', path: '/cart' }
  ];

  const policies = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Shipping Policy', path: '/shipping-policy' },
    { name: 'Refund & Returns', path: '/refund-returns' },
    { name: 'Terms of Use', path: '/terms-of-use' }
  ];

  const paymentMethods = [
    { name: 'American Express', icon: 'fab fa-cc-amex' },
    { name: 'Apple Pay', icon: 'fab fa-cc-apple-pay' },
    { name: 'Diners Club', icon: 'fab fa-cc-diners-club' },
    { name: 'Discover', icon: 'fab fa-cc-discover' },
    { name: 'Google Pay', icon: 'fab fa-google-pay' },
    { name: 'JCB', icon: 'fab fa-cc-jcb' },
    { name: 'Mastercard', icon: 'fab fa-cc-mastercard' },
    { name: 'PayPal', icon: 'fab fa-cc-paypal' },
    { name: 'Visa', icon: 'fab fa-cc-visa' }
  ];

  return (
    <footer className={styles.footer}>
      {/* Features Bar */}
      <div className={styles.featuresBar}>
        <div className={styles.featuresContainer}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureItem}>
              <i className={`${feature.icon} ${styles.featureIcon}`}></i>
              <span className={styles.featureTitle}>{feature.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footerContent}>
        {/* Logo and Company Info */}
        <div className={styles.footerSection}>
          <Link to="/" className={styles.footerLogo}>
            <img
              src="/images/logo.png"
              alt="Heritique Logo"
              className={styles.logoImage}
            />
          </Link>
          <h3 className={styles.companyName}>Homentry LLC</h3>
          <p className={styles.companyDescription}>
            Homentry brings simple, practical kitchen tools designed to make everyday cooking and
            storage easier. Smart design for real-life homes.
          </p>
          <p className={styles.ownerName}>– A B M Whaiduzzaman (Owner)</p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={styles.footerLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Policies</h4>
          <ul className={styles.linkList}>
            {policies.map((policy) => (
              <li key={policy.path}>
                <Link to={policy.path} className={styles.footerLink}>
                  {policy.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Contact Info</h4>
          <div className={styles.contactInfo}>
            <p className={styles.contactItem}>
              <strong>Homentry LLC</strong>
            </p>
            <a href="mailto:pappow@gmail.com" className={styles.contactLink}>
              pappow@gmail.com
            </a>
            <a href="tel:+8801791001818" className={styles.contactLink}>
              01XXX
            </a>
            <p className={styles.contactItem}>
              Dhaka, Gulshan
            </p>
          </div>

          {/* Payment Methods */}
          <div className={styles.paymentMethods}>
            {paymentMethods.map((method) => (
              <i
                key={method.name}
                className={`${method.icon} ${styles.paymentIcon}`}
                title={method.name}
              ></i>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>Copyright ©2026</p>
      </div>
    </footer>
  );
};

export default Footer;
