import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, removeFromCart, updateQty, totalPrice, cartCount } = useCart();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-eternita-cream shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-eternita-taupe/60">
            <div>
              <h2 className="font-serif text-xl font-bold text-eternita-dark">Your Cart</h2>
              <p className="text-xs text-eternita-gray mt-0.5">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-eternita-dark/60 hover:text-eternita-dark transition-colors"
              aria-label="Close cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 mx-auto text-eternita-gray/40 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <p className="text-eternita-gray text-sm">Your cart is empty</p>
                <p className="text-eternita-gray text-xs mt-1">Browse our treatments and packages to get started.</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 p-3 rounded-lg bg-eternita-white border border-eternita-taupe/40">
                    {/* Image placeholder */}
                    {(item.image || item.initials) ? (
                      <img
                        src={item.image || `/images/service-${item.serviceIndex || 1}.jpg`}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-eternita-teal to-eternita-teal-dark flex items-center justify-center shrink-0">
                        <span className="font-serif font-bold text-white text-sm">{item.name.charAt(0)}</span>
                      </div>
                    )}
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-eternita-dark truncate">{item.name}</p>
                      <p className="text-eternita-teal text-sm font-semibold mt-0.5">${item.price}</p>
                      {/* Qty controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-6 h-6 rounded-full border border-eternita-taupe flex items-center justify-center text-xs text-eternita-dark/60 hover:border-eternita-teal hover:text-eternita-teal transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                          </svg>
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-6 h-6 rounded-full border border-eternita-taupe flex items-center justify-center text-xs text-eternita-dark/60 hover:border-eternita-teal hover:text-eternita-teal transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* Price + remove */}
                    <div className="text-right shrink-0">
                      <p className="font-bold text-eternita-dark text-sm">${(item.price * item.qty).toFixed(0)}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-eternita-gray hover:text-red-500 text-xs mt-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-eternita-taupe/60 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-eternita-gray">Subtotal</span>
                <span className="font-bold text-lg text-eternita-dark">${totalPrice.toFixed(0)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={onClose}
                className="block w-full text-center btn-primary text-sm py-3"
              >
                View Cart & Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}