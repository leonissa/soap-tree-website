import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const steps = [
  { id: 1, label: 'Details' },
  { id: 2, label: 'Payment' },
  { id: 3, label: 'Confirmation' },
];

export default function Checkout() {
  const { items, totalPrice, cartCount, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [payment, setPayment] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });
  const [confirmed, setConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    let val = value;
    if (name === 'cardNumber') {
      val = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').slice(0, 19);
    }
    if (name === 'expiry') {
      val = value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/, '$1/').slice(0, 5);
    }
    if (name === 'cvv') {
      val = value.replace(/\D/g, '').slice(0, 4);
    }
    setPayment({ ...payment, [name]: val });
  };

  const handleConfirm = () => {
    const num = 'ET-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    setOrderNumber(num);
    setConfirmed(true);
    clearCart();
    setStep(3);
  };

  if (items.length === 0 && !confirmed) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4 py-16">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20 mx-auto text-eternita-gray/30 mb-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <h2 className="font-serif text-2xl font-bold text-eternita-dark mb-2">Your Cart is Empty</h2>
          <p className="text-eternita-gray text-sm mb-8">Looks like you haven't added any treatments or packages yet. Browse our menu to get started.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/treatments" className="btn-primary">Browse Treatments</Link>
            <Link to="/packages" className="btn-secondary">View Packages</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-eternita-light">
      {/* Header */}
      <div className="bg-eternita-white border-b border-eternita-taupe/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <div className="w-8 h-8 rounded-lg bg-eternita-teal flex items-center justify-center">
              <span className="font-serif font-bold text-white text-sm">E</span>
            </div>
            <span className="font-serif text-xl font-bold text-eternita-teal">Eternita</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Stepper */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-0 max-w-lg mx-auto">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      step > s.id
                        ? 'bg-eternita-teal text-white'
                        : step === s.id
                        ? 'bg-eternita-teal text-white ring-4 ring-eternita-teal/20'
                        : 'bg-eternita-taupe/50 text-eternita-gray'
                    }`}
                  >
                    {step > s.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    ) : (
                      s.id
                    )}
                  </div>
                  <span
                    className={`hidden sm:inline text-xs font-medium ${
                      step >= s.id ? 'text-eternita-dark' : 'text-eternita-gray'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-12 md:w-20 h-0.5 mx-2 ${
                      step > s.id ? 'bg-eternita-teal' : 'bg-eternita-taupe/50'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Main content */}
          <div className="lg:col-span-3">
            {step === 1 && (
              <div className="bg-eternita-white rounded-2xl p-6 md:p-8 border border-eternita-taupe/30">
                <h2 className="font-serif text-2xl font-bold text-eternita-dark mb-6">Contact Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-eternita-dark/70 mb-1.5">First Name</label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-cream text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal"
                      placeholder="Jane"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-eternita-dark/70 mb-1.5">Last Name</label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-cream text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-eternita-dark/70 mb-1.5">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-cream text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-eternita-dark/70 mb-1.5">Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-cream text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal"
                      placeholder="(509) 986-3222"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-medium text-eternita-dark/70 mb-1.5">Special Notes (optional)</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleFormChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-cream text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal resize-none"
                    placeholder="Any allergies, preferences, or special requests..."
                  />
                </div>
                {form.firstName && form.lastName && form.email ? (
                  <button onClick={() => setStep(2)} className="btn-primary w-full text-center">
                    Continue to Payment
                  </button>
                ) : (
                  <p className="text-eternita-gray text-xs">Please fill in all required fields to continue.</p>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="bg-eternita-white rounded-2xl p-6 md:p-8 border border-eternita-taupe/30">
                <h2 className="font-serif text-2xl font-bold text-eternita-dark mb-6">Payment Details</h2>

                {/* Card Preview */}
                <div className="mb-8">
                  <div className="bg-gradient-to-br from-eternita-teal-dark to-eternita-teal rounded-2xl p-6 text-eternita-white shadow-xl max-w-sm mx-auto">
                    <div className="flex justify-between items-start mb-8">
                      <span className="text-xs font-medium opacity-70">
                        {payment.cardNumber.startsWith('4') ? 'Visa' :
                         payment.cardNumber.startsWith('5') ? 'Mastercard' :
                         payment.cardNumber.startsWith('3') ? 'American Express' :
                         payment.cardNumber.startsWith('6') ? 'Discover' : 'Card'}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 opacity-70">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                      </svg>
                    </div>
                    <p className="font-mono text-lg md:text-xl tracking-widest mb-4">
                      {payment.cardNumber || '•••• •••• •••• ••••'}
                    </p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] opacity-70 mb-0.5">Cardholder</p>
                        <p className="text-sm font-medium">{payment.cardName || 'Your Name'}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] opacity-70 mb-0.5">Expires</p>
                        <p className="text-sm font-medium">{payment.expiry || 'MM/YY'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-eternita-dark/70 mb-1.5">Card Number</label>
                    <div className="relative">
                      <input
                        name="cardNumber"
                        value={payment.cardNumber}
                        onChange={handlePaymentChange}
                        className="w-full px-4 py-3 pl-10 rounded-xl border border-eternita-taupe/60 bg-eternita-cream text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal font-mono tracking-wider"
                        placeholder="4242 4242 4242 4242"
                        maxLength={19}
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold opacity-40">
                        {payment.cardNumber.startsWith('4') ? 'V' :
                         payment.cardNumber.startsWith('5') ? 'M' :
                         payment.cardNumber.startsWith('3') ? 'A' :
                         payment.cardNumber.startsWith('6') ? 'D' : 'C'}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-eternita-dark/70 mb-1.5">Cardholder Name</label>
                    <input
                      name="cardName"
                      value={payment.cardName}
                      onChange={handlePaymentChange}
                      className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-cream text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-eternita-dark/70 mb-1.5">Expiry Date</label>
                      <input
                        name="expiry"
                        value={payment.expiry}
                        onChange={handlePaymentChange}
                        className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-cream text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal font-mono"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-eternita-dark/70 mb-1.5">CVV</label>
                      <input
                        name="cvv"
                        type="password"
                        value={payment.cvv}
                        onChange={handlePaymentChange}
                        className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-cream text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal font-mono"
                        placeholder="***"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-eternita-gray pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-eternita-teal">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <span>Secure encrypted payment. Your card details are never stored.</span>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button onClick={() => setStep(1)} className="btn-secondary flex-1 text-center">Back</button>
                  <button
                    onClick={handleConfirm}
                    disabled={!payment.cardNumber || !payment.cardName || !payment.expiry || !payment.cvv}
                    className="btn-primary flex-1 text-center disabled:opacity-40"
                  >
                    Pay ${totalPrice.toFixed(0)}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && confirmed && (
              <div className="bg-eternita-white rounded-2xl p-8 md:p-10 border border-eternita-taupe/30 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-eternita-dark mb-2">Order Confirmed!</h2>
                <p className="text-eternita-gray text-sm mb-4">Thank you for choosing Eternita. Your wellness journey begins now.</p>
                <div className="bg-eternita-light rounded-xl p-4 mb-6 inline-block">
                  <p className="text-xs text-eternita-gray mb-1">Order Number</p>
                  <p className="font-mono font-bold text-eternita-teal">{orderNumber}</p>
                </div>
                <div className="space-y-2 text-sm text-eternita-gray mb-8">
                  <p>A confirmation email will be sent to <strong className="text-eternita-dark">{form.email}</strong></p>
                  <p>Our team will contact you within 24 hours to schedule your appointment.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/" className="btn-primary">Return Home</Link>
                  <Link to="/treatments" className="btn-secondary">Browse More Treatments</Link>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          {step < 3 && (
            <div className="lg:col-span-2">
              <div className="bg-eternita-white rounded-2xl p-6 border border-eternita-taupe/30 sticky top-28">
                <h3 className="font-serif text-lg font-bold text-eternita-dark mb-4">
                  Order Summary ({cartCount} {cartCount === 1 ? 'item' : 'items'})
                </h3>
                <ul className="space-y-3 mb-6">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-3 pb-3 border-b border-eternita-taupe/20">
                      {(item.image || item.serviceIndex) ? (
                        <img
                          src={item.image || `/images/service-${item.serviceIndex || 1}.jpg`}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-eternita-teal to-eternita-teal-dark flex items-center justify-center shrink-0">
                          <span className="font-serif font-bold text-white text-xs">{item.name.charAt(0)}</span>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-eternita-dark truncate">{item.name}</p>
                        <p className="text-xs text-eternita-gray">Qty: {item.qty}</p>
                      </div>
                      <p className="text-sm font-bold text-eternita-dark shrink-0">${(item.price * item.qty).toFixed(0)}</p>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between text-eternita-gray">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-eternita-gray">
                    <span>Tax</span>
                    <span>Calculated at next step</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-eternita-taupe/30">
                  <span className="font-serif text-lg font-bold text-eternita-dark">Total</span>
                  <span className="font-serif text-2xl font-bold text-eternita-teal">${totalPrice.toFixed(0)}</span>
                </div>
                <p className="text-[10px] text-eternita-gray mt-4 text-center">
                  Secure checkout. Your information is encrypted and never shared.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}