import styles from './PolicyPage.module.css';
import { CONTACT_INFO } from '../constants/contactInfo';

const PrivacyPolicyPage = () => {
  return (
    <div className={styles.policyPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Privacy Policy
            <span className={styles.sparkles}>
              <span className={styles.sparkle}>!</span>
              <span className={styles.sparkle}>!</span>
              <span className={styles.sparkle}>!</span>
            </span>
          </h1>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from{' '}
            <a href="https://heritique.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              https://heritique.com
            </a>{' '}
            (the "Site").
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PERSONAL INFORMATION WE COLLECT</h2>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including details about your web browser, IP address, time zone, and installed cookies. As you browse, we also collect data about the pages or products you view, referral sources (websites or search terms), and your interactions with the Site. This is collectively referred to as "Device Information."
            </p>
            <p>We collect Device Information using technologies such as:</p>
            <ul className={styles.list}>
              <li>
                <strong>Cookies</strong> – small data files with an anonymous unique identifier. Learn more or disable cookies at{' '}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  www.allaboutcookies.org
                </a>
                .
              </li>
              <li>
                <strong>Log files</strong> – track actions on the Site and collect data like IP address, browser type, ISP, referring/exit pages, and timestamps.
              </li>
              <li>
                <strong>Web beacons, tags, and pixels</strong> – electronic files that record how you navigate the Site.
              </li>
            </ul>
            <p>
              When you make or attempt to make a purchase through the Site, we collect certain details including your name, billing and shipping address, payment info (e.g. credit card numbers), email address, and phone number. This is referred to as "Order Information."
            </p>
            <p>In this policy, "Personal Information" includes both Device Information and Order Information.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>HOW WE USE YOUR PERSONAL INFORMATION</h2>
            <p>We use your Order Information to fulfill orders, process payments, arrange shipping, and send confirmations. Additionally, we use this information to:</p>
            <ul className={styles.list}>
              <li>Communicate with you</li>
              <li>Screen orders for potential risk or fraud</li>
              <li>Provide information or promotions, based on your preferences</li>
            </ul>
            <p>Device Information helps us detect potential fraud (especially IP address checks), improve the Site experience, and analyze marketing performance.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>SHARING YOUR PERSONAL INFORMATION</h2>
            <p>We share your Personal Information with third parties to support our services:</p>
            <ul className={styles.list}>
              <li>
                <strong>Shopify</strong> powers our store. Read their privacy policy here:{' '}
                <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Shopify Privacy
                </a>
              </li>
              <li>
                <strong>Google Analytics</strong> helps us understand customer behavior. Learn more:{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Google Privacy
                </a>
                <ul>
                  <li>
                    Opt-out:{' '}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={styles.link}>
                      Google Analytics Opt-out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <p>We may also share information as required by law, legal requests, or to protect our rights.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>BEHAVIOURAL ADVERTISING</h2>
            <p>
              We may use your Personal Information for targeted ads or marketing communications. For more information on how targeted ads work, visit{' '}
              <a href="https://www.networkadvertising.org" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Network Advertising Initiative
              </a>
              .
            </p>
            <p>To opt-out of targeted ads:</p>
            <ul className={styles.list}>
              <li>
                <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Facebook Settings
                </a>
              </li>
              <li>
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Google Settings
                </a>
              </li>
              <li>
                <a href="https://about.ads.microsoft.com/en-us/resources/policies/personalized-ads" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Bing Ads Settings
                </a>
              </li>
            </ul>
            <p>
              You can also opt out via the{' '}
              <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Digital Advertising Alliance
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>DO NOT TRACK</h2>
            <p>Please note that we do not change our data collection practices when we receive a "Do Not Track" signal from your browser.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>YOUR RIGHTS</h2>
            <p>If you are a European resident, you have the right to access, update, or delete your Personal Information. To do so, please contact us using the information below.</p>
            <p>We process your data to fulfill orders or pursue our legitimate business interests. Please note, your information may be transferred outside of Europe, including to Canada and the United States.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>DATA RETENTION</h2>
            <p>We retain Order Information for our records unless you request its deletion.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>CHANGES</h2>
            <p>We may update this Privacy Policy to reflect changes in our practices, legal requirements, or other operational needs.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>CURRENCY CONVERSION</h2>
            <p>By using our website, you agree to allow third parties to process your IP address for currency conversion. A session-based cookie will store the selected currency so it remains consistent throughout your browsing session.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>CONTACT US</h2>
            <p>
              For questions, concerns, or complaints about this Privacy Policy, please contact us at Homentry LLC:{' '}
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

export default PrivacyPolicyPage;
