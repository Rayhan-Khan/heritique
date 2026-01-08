import { useParams, Link } from 'react-router-dom';
import styles from './BlogPostPage.module.css';

interface BlogPost {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Blog posts data
  const blogPosts: Record<string, BlogPost> = {
    'kitchen-organization-tips': {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop',
      title: 'Essential Kitchen Organization Tips for Busy Families',
      excerpt: 'Transform your kitchen into an efficient workspace with these proven organization strategies.',
      category: 'Organization',
      author: 'A B M Whaiduzzaman',
      date: 'January 5, 2026',
      content: `
        <p>A well-organized kitchen is the heart of a happy home. For busy families juggling work, school, and activities, having an efficient kitchen setup can save precious time and reduce daily stress.</p>

        <h2>1. Declutter and Categorize</h2>
        <p>Start by removing items you haven't used in the past year. Group similar items together—baking supplies, cooking utensils, spices, etc. This makes it easier to find what you need when you need it.</p>

        <h2>2. Maximize Cabinet Space</h2>
        <p>Use stackable organizers, shelf risers, and drawer dividers to make the most of every inch. Store frequently used items at eye level and keep rarely used items on higher or lower shelves.</p>

        <h2>3. Create Zones</h2>
        <p>Designate specific areas for different tasks: a coffee station, a baking zone, a snack drawer for kids. This helps family members find things independently and keeps the kitchen running smoothly.</p>

        <h2>4. Label Everything</h2>
        <p>Clear containers with labels make it easy to see what you have and when supplies are running low. This is especially helpful for pantry organization and reduces food waste.</p>

        <h2>5. Maintain Daily Habits</h2>
        <p>Spend 10 minutes each evening tidying up. Put items back in their designated spots, wipe down counters, and prepare for the next day. Small daily efforts prevent overwhelming messes.</p>

        <p>Remember, the best organization system is one that works for your family's unique needs. Start with these basics and adjust as you discover what makes your kitchen flow better.</p>
      `
    },
    'small-kitchen-storage': {
      id: 2,
      image: 'https://images.unsplash.com/photo-1584990347449-39b4dfed5c86?w=1200&h=600&fit=crop',
      title: 'Best Storage Solutions for Small Kitchens',
      excerpt: 'Limited space doesn\'t mean limited possibilities. Discover smart storage solutions.',
      category: 'Storage',
      author: 'A B M Whaiduzzaman',
      date: 'January 3, 2026',
      content: `
        <p>Living with a small kitchen doesn't mean sacrificing functionality or style. With creative storage solutions, you can maximize every square inch and create a kitchen that works beautifully.</p>

        <h2>Vertical Storage is Your Friend</h2>
        <p>When floor space is limited, look up! Install floating shelves, hanging pot racks, and wall-mounted magnetic knife strips. These solutions keep essentials within reach while freeing up valuable counter space.</p>

        <h2>Multi-Functional Furniture</h2>
        <p>Choose pieces that serve multiple purposes. A kitchen island with built-in storage, a fold-down table that doubles as a prep surface, or stools that tuck completely under the counter can transform your space.</p>

        <h2>Corner Solutions</h2>
        <p>Corner spaces often go unused, but lazy Susans, pull-out corner drawers, and specialized corner shelving can turn these awkward spots into efficient storage.</p>

        <h2>Clear Containers Create Space</h2>
        <p>Transfer dry goods into stackable, clear containers. They take up less space than original packaging, stack neatly, and help you see exactly what you have at a glance.</p>

        <h2>Door and Cabinet Backs</h2>
        <p>The inside of cabinet doors and the backs of cabinets are prime real estate. Add hooks for measuring cups, adhesive organizers for spices, or wire racks for pot lids.</p>

        <p>Small kitchens can be incredibly efficient when every item has its perfect place. Focus on quality over quantity and choose storage solutions that fit your cooking style.</p>
      `
    },
    'modern-kitchen-tools': {
      id: 3,
      image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=1200&h=600&fit=crop',
      title: 'Modern Kitchen Tools That Save Time and Energy',
      excerpt: 'Upgrade your cooking experience with innovative kitchen tools designed for efficiency.',
      category: 'Tools & Gadgets',
      author: 'A B M Whaiduzzaman',
      date: 'December 28, 2025',
      content: `
        <p>Today's kitchen tools are designed with busy lifestyles in mind. The right gadgets can cut meal prep time in half while making cooking more enjoyable.</p>

        <h2>Multi-Blade Vegetable Choppers</h2>
        <p>Gone are the days of tedious hand-chopping. Modern vegetable choppers with interchangeable blades can dice, slice, and julienne vegetables in seconds. Look for models with containers to catch the chopped food—cleanup becomes a breeze.</p>

        <h2>Digital Food Scales</h2>
        <p>Precise measurements lead to better cooking results. Digital scales are essential for baking, portion control, and following recipes accurately. Choose one with a tare function for easy measuring.</p>

        <h2>Silicone Storage Bags</h2>
        <p>Replace single-use plastic bags with reusable silicone versions. They're dishwasher safe, freezer safe, and can even be used for sous vide cooking. An investment that pays for itself while reducing waste.</p>

        <h2>Instant-Read Thermometers</h2>
        <p>No more guessing if meat is done or worrying about food safety. A quality instant-read thermometer takes the guesswork out of cooking and ensures perfect results every time.</p>

        <h2>Herb Scissors</h2>
        <p>Five blades work together to mince fresh herbs in seconds—no cutting board needed. These specialized scissors save time and reduce cleanup when adding fresh herbs to your dishes.</p>

        <h2>Adjustable Measuring Spoons</h2>
        <p>One tool that adjusts from ⅛ teaspoon to 1 tablespoon means fewer utensils to wash and store. Perfect for small kitchens or anyone who values simplicity.</p>

        <p>Investing in quality kitchen tools isn't about following trends—it's about making your time in the kitchen more efficient and enjoyable. Choose tools that address your specific needs and cooking habits.</p>
      `
    }
  };

  const allPosts = Object.entries(blogPosts).map(([slug, post]) => ({ ...post, slug }));
  const currentPost = slug ? blogPosts[slug] : null;

  // Get related posts (exclude current post)
  const relatedPosts = allPosts.filter(post => post.slug !== slug).slice(0, 3);

  if (!currentPost) {
    return (
      <div className={styles.notFound}>
        <h1>Blog post not found</h1>
        <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className={styles.blogPostPage}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/blog">Blog</Link>
          <span> / </span>
          <span>{currentPost.title}</span>
        </div>

        {/* Blog Post Content */}
        <article className={styles.blogPost}>
          <div className={styles.postHeader}>
            <span className={styles.category}>{currentPost.category}</span>
            <h1 className={styles.postTitle}>{currentPost.title}</h1>
            <div className={styles.postMeta}>
              <span className={styles.author}>By {currentPost.author}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.date}>{currentPost.date}</span>
            </div>
          </div>

          <div className={styles.featuredImage}>
            <img src={currentPost.image} alt={currentPost.title} />
          </div>

          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />
        </article>

        {/* Related Posts */}
        <section className={styles.relatedPosts}>
          <h2 className={styles.relatedTitle}>Related Articles</h2>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedImage}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.relatedContent}>
                  <span className={styles.relatedCategory}>{post.category}</span>
                  <h3 className={styles.relatedCardTitle}>{post.title}</h3>
                  <p className={styles.relatedExcerpt}>{post.excerpt}</p>
                  <span className={styles.readMoreLink}>Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Back to Blog */}
        <div className={styles.backToBlog}>
          <Link to="/blog" className={styles.backButton}>
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
