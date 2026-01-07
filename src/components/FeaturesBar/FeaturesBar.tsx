import styles from './FeaturesBar.module.css';

const FeaturesBar = () => {
  const features = [
    {
      id: 1,
      icon: 'fas fa-shipping-fast',
      title: 'Fast delivery'
    },
    {
      id: 2,
      icon: 'fas fa-thumbs-up',
      title: 'Quality Product'
    },
    {
      id: 3,
      icon: 'fas fa-undo',
      title: 'Easy Returns'
    },
    {
      id: 4,
      icon: 'fas fa-headset',
      title: 'Strong Support'
    }
  ];

  return (
    <section className={styles.featuresBar}>
      <div className={styles.checkerboardTop}></div>
      <div className={styles.featuresContainer}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.featureItem}>
            <i className={`${feature.icon} ${styles.featureIcon}`}></i>
            <span className={styles.featureTitle}>{feature.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesBar;
