import { Link } from 'react-router-dom';
import styles from './BlogSection.module.css';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      title: 'Essential Kitchen Organization Tips for Busy Families',
      excerpt: 'Transform your kitchen into an efficient workspace with these proven organization strategies. Learn how to maximize cabinet space and keep everything within reach.',
      link: '/blog/kitchen-organization-tips'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1565183928294-7d22f6d07dfd?w=800&q=80',
      title: 'Best Storage Solutions for Small Kitchens',
      excerpt: 'Limited space doesn\'t mean limited possibilities. Discover smart storage solutions that help you make the most of every inch in your compact kitchen.',
      link: '/blog/small-kitchen-storage'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
      title: 'Modern Kitchen Tools That Save Time and Energy',
      excerpt: 'Upgrade your cooking experience with innovative kitchen tools designed for efficiency. Find out which gadgets are worth the investment for your home.',
      link: '/blog/modern-kitchen-tools'
    }
  ];

  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.blogCard}>
            <div className={styles.imageWrapper}>
              <img
                src={post.image}
                alt={post.title}
                className={styles.blogImage}
              />
            </div>
            <div className={styles.blogContent}>
              <h3 className={styles.blogTitle}>{post.title}</h3>
              <p className={styles.blogExcerpt}>{post.excerpt}</p>
              <Link to={post.link} className={styles.readMore}>
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
