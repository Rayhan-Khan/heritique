import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  // Listen for cart updates
  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem('heritique-cart');
      if (savedCart) {
        try {
          const cart = JSON.parse(savedCart);
          const total = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
          setCartCount(total);
        } catch (err) {
          console.error('Failed to load cart:', err);
        }
      } else {
        setCartCount(0);
      }
    };

    updateCartCount();

    // Listen for storage changes (cart updates from other components)
    window.addEventListener('storage', updateCartCount);
    // Listen for custom event
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Kitchen Storage', path: '/kitchen-storage' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Homentry Logo"
            className={styles.logo}
          />
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navItem} ${isActive(item.path) ? styles.active : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for products..."
            className={styles.searchInput}
          />
          <i className={`fas fa-search ${styles.searchIcon}`}></i>
        </div>

        {/* Action Icons */}
        <div className={styles.actions}>
          {/* User Icon */}
          <Link to="/login" className={styles.iconButton}>
            <i className="fas fa-user-circle"></i>
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className={styles.iconButton}>
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
