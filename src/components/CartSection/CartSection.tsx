import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartSection.module.css';

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const CartSection = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300&q=80',
      name: '2 Slice Slim Toaster, Fits-anywhere™ Kitchenware',
      price: 19.99,
      quantity: 6
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1565183928294-7d22f6d07dfd?w=300&q=80',
      name: '10 Pack Refrigerator Pantry Organizer Bins, Stackable Fridge Organizer Bins with Lids',
      price: 22.59,
      quantity: 1
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=300&q=80',
      name: '12-in-1 Vegetable Chopper, 7 Blade Veggie Chopper, Practical Food Chopper with Container',
      price: 9.99,
      quantity: 2
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [giftCard, setGiftCard] = useState('');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <section className={styles.cartSection}>
      <div className={styles.breadcrumb}>
        <span className={styles.active}>Cart</span>
        <span className={styles.separator}>›</span>
        <span>Checkout</span>
        <span className={styles.separator}>›</span>
        <span>Order complete</span>
      </div>

      <div className={styles.cartContainer}>
        <div className={styles.cartItems}>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className={styles.productInfo}>
                      <img src={item.image} alt={item.name} className={styles.productImage} />
                      <span className={styles.productName}>{item.name}</span>
                    </div>
                  </td>
                  <td className={styles.price}>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className={styles.quantityInput}
                      min="1"
                    />
                  </td>
                  <td className={styles.subtotal}>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.couponSection}>
            <input
              type="text"
              placeholder="Coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className={styles.couponInput}
            />
            <button className={styles.applyCoupon}>Apply coupon</button>
          </div>
        </div>

        <div className={styles.cartTotals}>
          <h2 className={styles.totalsTitle}>Cart Totals</h2>

          <div className={styles.totalsRow}>
            <span>Subtotal</span>
            <span className={styles.amount}>${subtotal.toFixed(2)}</span>
          </div>

          <div className={styles.totalsRow}>
            <span>Shipping</span>
            <div className={styles.shippingInfo}>
              <p className={styles.freeShipping}>Free shipping</p>
              <p className={styles.shippingTo}>Shipping to NY.</p>
              <button className={styles.changeAddress}>Change address</button>
            </div>
          </div>

          <div className={styles.totalsRow}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalAmount}>${total.toFixed(2)}</span>
          </div>

          <div className={styles.giftCard}>
            <p className={styles.giftCardLabel}>Have a gift card?</p>
            <div className={styles.giftCardInput}>
              <input
                type="text"
                placeholder="Gift card number"
                value={giftCard}
                onChange={(e) => setGiftCard(e.target.value)}
              />
              <button>Apply</button>
            </div>
          </div>

          <Link to="/checkout" className={styles.checkoutButton}>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
