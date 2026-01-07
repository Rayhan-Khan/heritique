import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Kitchen Storage', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
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
          <button className={styles.iconButton}>
            <i className="fas fa-shopping-cart"></i>
            {/* Optional: Cart badge for item count */}
            {/* <span className={styles.cartBadge}>3</span> */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
