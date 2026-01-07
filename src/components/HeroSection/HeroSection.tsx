import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&q=80',
      alt: 'Kitchen Utensils'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1615485020745-66e1c3e8e843?w=600&h=600&fit=crop&q=80',
      alt: 'Wooden Kitchen Tools'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop&q=80',
      alt: 'Food Storage Containers'
    }
  ];

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Make Your Kitchen Work Smarter</h1>
        <p className={styles.heroSubtitle}>
          Modern kitchen tools that save space, time, and effort without sacrificing style.
        </p>
        <Link to="/shop" className={styles.shopButton}>
          Shop Now
        </Link>
      </div>

      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCircle}>
            <div className={styles.circleFrame}>
              <img
                src={product.image}
                alt={product.alt}
                className={styles.productImage}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.checkerboard}></div>
    </section>
  );
};

export default HeroSection;
