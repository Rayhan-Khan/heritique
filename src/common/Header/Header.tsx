import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
    <>

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

          {/* Desktop Navigation */}
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

          {/* Desktop Search Bar */}
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

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.mobileMenuToggle}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
        </div>

         {/* Mobile Search Bar */}
          <div className={styles.mobileSearchBar}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.mobileSearchBarInput}
            />
            <i className={`fas fa-search ${styles.mobileSearchBarIcon}`}></i>
          </div>

      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileMenuOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          {/* Mobile Menu Header */}
          <div className={styles.mobileMenuHeader}>
            <h2>Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={styles.mobileMenuClose}
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.mobileNavItem} ${isActive(item.path) ? styles.mobileNavItemActive : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Search */}
          <div className={styles.mobileSearch}>
            <input
              type="text"
              placeholder="Search for products..."
              className={styles.mobileSearchInput}
            />
            <i className="fas fa-search"></i>
          </div>

          {/* Mobile Menu Footer */}
          <div className={styles.mobileMenuFooter}>
            <div className={styles.mobileContact}>
              <p>📧 support@homentry.com</p>
              <p>📞 +880 123-456-7890</p>
            </div>
            <div className={styles.mobilePromo}>
              Free shipping on orders over $50
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;