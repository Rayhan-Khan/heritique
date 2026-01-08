import { useState } from 'react';
import styles from './CheckoutSection.module.css';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CheckoutSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: 'United States (US)',
    streetAddress: '',
    apartment: '',
    city: '',
    state: 'New York',
    zipCode: '',
    phone: '',
    orderNotes: '',
    shipToDifferent: false,
    paymentMethod: 'card',
    agreeToTerms: false
  });

  const [cardData, setCardData] = useState({
    cardNumber: '',
    expirationDate: '',
    securityCode: ''
  });

  const [giftCard, setGiftCard] = useState('');
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  const orderItems: OrderItem[] = [
    {
      id: 1,
      name: '2 Slice Slim Toaster, Fits-anywhere™ Kitchenware',
      price: 19.99,
      quantity: 6
    },
    {
      id: 2,
      name: '10 Pack Refrigerator Pantry Organizer Bins, Stackable Fridge Organizer Bins with Lids',
      price: 22.59,
      quantity: 1
    },
    {
      id: 3,
      name: '12-in-1 Vegetable Chopper, 7 Blade Veggie Chopper, Practical Food Chopper with Container',
      price: 9.99,
      quantity: 2
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear the cart from localStorage
    localStorage.removeItem('heritique-cart');
    // Dispatch event to update cart badge
    window.dispatchEvent(new Event('cartUpdated'));
    // Show invoice modal
    setShowInvoiceModal(true);
  };

  return (
    <section className={styles.checkoutSection}>
      <div className={styles.breadcrumb}>
        <span>Cart</span>
        <span className={styles.separator}>›</span>
        <span className={styles.active}>Checkout</span>
        <span className={styles.separator}>›</span>
        <span>Order complete</span>
      </div>

      <div className={styles.checkoutContainer}>
        <div className={styles.billingDetails}>
          <h2 className={styles.sectionTitle}>Billing Details</h2>

          <form onSubmit={handlePlaceOrder}>
            <div className={styles.formGroup}>
              <label htmlFor="email">
                Email Address <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">
                  First Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName">
                  Last Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="country">
                Country / Region <span className={styles.required}>*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="United States (US)">United States (US)</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="streetAddress">
                Street address <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                placeholder="House number and street name"
                required
              />
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                placeholder="Apartment, suite, unit, etc. (optional)"
                className={styles.apartmentInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="city">
                Town / City <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="state">
                State <span className={styles.required}>*</span>
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              >
                <option value="New York">New York</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="zipCode">
                ZIP Code <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="shipToDifferent"
                name="shipToDifferent"
                checked={formData.shipToDifferent}
                onChange={handleInputChange}
              />
              <label htmlFor="shipToDifferent">Ship to a different address?</label>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="orderNotes">Order notes (optional)</label>
              <textarea
                id="orderNotes"
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleInputChange}
                placeholder="Notes about your order, e.g. special notes for delivery."
                rows={4}
              />
            </div>
          </form>
        </div>

        <div className={styles.orderSummary}>
          <h2 className={styles.sectionTitle}>Your Order</h2>

          <div className={styles.orderHeader}>
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          <div className={styles.orderItems}>
            {orderItems.map((item) => (
              <div key={item.id} className={styles.orderItem}>
                <span className={styles.itemName}>
                  {item.name} <span className={styles.quantity}>× {item.quantity}</span>
                </span>
                <span className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className={styles.orderRow}>
            <span>Subtotal</span>
            <span className={styles.amount}>${subtotal.toFixed(2)}</span>
          </div>

          <div className={styles.orderRow}>
            <span>Shipping</span>
            <span className={styles.freeShipping}>Free shipping</span>
          </div>

          <div className={styles.orderTotal}>
            <span>Total</span>
            <span className={styles.totalAmount}>${total.toFixed(2)}</span>
          </div>

          <div className={styles.couponLink}>
            Have a coupon? <a href="#">Click here to enter your coupon code</a>
          </div>

          <div className={styles.paymentSection}>
            <div className={styles.paymentMethod}>
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleInputChange}
              />
              <label htmlFor="card">Card</label>
              <div className={styles.cardLogos}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" />
              </div>
            </div>

            {formData.paymentMethod === 'card' && (
              <div className={styles.cardDetails}>
                <div className={styles.formGroup}>
                  <label htmlFor="cardNumber">Card number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={cardData.cardNumber}
                    onChange={handleCardChange}
                    placeholder="1234 1234 1234 1234"
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="expirationDate">Expiration date</label>
                    <input
                      type="text"
                      id="expirationDate"
                      name="expirationDate"
                      value={cardData.expirationDate}
                      onChange={handleCardChange}
                      placeholder="MM / YY"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="securityCode">Security code</label>
                    <input
                      type="text"
                      id="securityCode"
                      name="securityCode"
                      value={cardData.securityCode}
                      onChange={handleCardChange}
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className={styles.paymentMethod}>
              <input
                type="radio"
                id="bankTransfer"
                name="paymentMethod"
                value="bankTransfer"
                checked={formData.paymentMethod === 'bankTransfer'}
                onChange={handleInputChange}
              />
              <label htmlFor="bankTransfer">Direct bank transfer</label>
            </div>

            <div className={styles.paymentMethod}>
              <input
                type="radio"
                id="cashOnDelivery"
                name="paymentMethod"
                value="cashOnDelivery"
                checked={formData.paymentMethod === 'cashOnDelivery'}
                onChange={handleInputChange}
              />
              <label htmlFor="cashOnDelivery">Cash on delivery</label>
            </div>

            <p className={styles.privacyText}>
              Your personal data will be used to process your order, support your experience
              throughout this website, and for other purposes described in our privacy policy.
            </p>

            <div className={styles.termsCheckbox}>
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="agreeToTerms">
                I have read and agree to the website <a href="#">terms and conditions</a>
                <span className={styles.required}>*</span>
              </label>
            </div>

            <div className={styles.giftCardSection}>
              <p>Have a gift card?</p>
              <div className={styles.giftCardInput}>
                <input
                  type="text"
                  placeholder="Gift card number"
                  value={giftCard}
                  onChange={(e) => setGiftCard(e.target.value)}
                />
                <button type="button" className={styles.applyGiftCard}>Apply Gift Card</button>
              </div>
            </div>

            <button type="submit" className={styles.placeOrderButton} onClick={handlePlaceOrder}>
              Place order
            </button>
          </div>
        </div>
      </div>

      {/* Invoice Modal */}
      {showInvoiceModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Order Invoice</h2>
              <button 
                className={styles.closeButton} 
                onClick={() => setShowInvoiceModal(false)}
              >
                ✕
              </button>
            </div>

            <div className={styles.invoiceBody}>
              <div className={styles.invoiceSection}>
                <h3>Order Confirmation</h3>
                <p>Thank you for your order!</p>
              </div>

              <div className={styles.invoiceSection}>
                <h4>Billing Information</h4>
                <p><strong>{formData.firstName} {formData.lastName}</strong></p>
                <p>{formData.streetAddress}</p>
                {formData.apartment && <p>{formData.apartment}</p>}
                <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                <p>{formData.country}</p>
                <p>Email: {formData.email}</p>
                {formData.phone && <p>Phone: {formData.phone}</p>}
              </div>

              <div className={styles.invoiceSection}>
                <h4>Order Items</h4>
                <table className={styles.invoiceTable}>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.invoiceSection}>
                <div className={styles.invoiceSummary}>
                  <div className={styles.summaryRow}>
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className={styles.summaryRowTotal}>
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className={styles.invoiceSection}>
                <h4>Payment Method</h4>
                <p>
                  {formData.paymentMethod === 'card' && 'Credit Card'}
                  {formData.paymentMethod === 'bankTransfer' && 'Direct Bank Transfer'}
                  {formData.paymentMethod === 'cashOnDelivery' && 'Cash on Delivery'}
                </p>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button 
                className={styles.closeModalButton}
                onClick={() => setShowInvoiceModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CheckoutSection;
