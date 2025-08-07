import { useState } from "react";
import {
  Minus,
  Plus,
  Trash2,
  Edit3,
  MapPin,
  CreditCard,
  Truck,
} from "lucide-react";
import PageBreadcrumb from "../Component/CommanComponent/PageBreadcrumb";

export default function FoodCartPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce & basil",
      size: "Large",
      variant: "Thin Crust",
      price: 18.99,
      originalPrice: 22.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=150&h=150&fit=crop&crop=center",
    },
    {
      id: 2,
      name: "Chicken Biryani",
      description: "Aromatic basmati rice with spiced chicken",
      size: "Regular",
      variant: "Hyderabadi Style",
      price: 15.5,
      originalPrice: 18.5,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d94c?w=150&h=150&fit=crop&crop=center",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const originalSubtotal = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const discount = originalSubtotal - subtotal;
  const tax = 0;
  const shipping = 0;
  const total = subtotal + tax + shipping;

  const applyCoupon = () => {
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" applied successfully!`);
      setCouponCode("");
    }
  };

  const handleDeliveryInfoChange = (field, value) => {
    setDeliveryInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleCardInfoChange = (field, value) => {
    setCardInfo((prev) => ({ ...prev, [field]: value }));
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Cart";
      case 2:
        return "Checkout";
      case 3:
        return "Payment";
      default:
        return "Cart";
    }
  };

  return (
    <>
      <div className="min-h-screen  py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <PageBreadcrumb pageTitle="Cart Page" />
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {getStepTitle()}
            </h1>

            {/* Progress Steps */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="flex items-center">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= 1
                      ? "bg-gray-900 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  1
                </span>
                <span
                  className={`ml-2 font-medium ${
                    currentStep >= 1 ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  Cart
                </span>
              </div>
              <div className="h-px bg-gray-300 flex-1 max-w-16"></div>
              <div className="flex items-center">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= 2
                      ? "bg-gray-900 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  2
                </span>
                <span
                  className={`ml-2 font-medium ${
                    currentStep >= 2 ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  Checkout
                </span>
              </div>
              <div className="h-px bg-gray-300 flex-1 max-w-16"></div>
              <div className="flex items-center">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= 3
                      ? "bg-gray-900 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  3
                </span>
                <span
                  className={`ml-2 font-medium ${
                    currentStep >= 3 ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  Payment
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {currentStep === 1 && (
                /* Cart Items */
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0 mx-auto sm:mx-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-500 mb-3">
                            <span>
                              Size:{" "}
                              <span className="font-medium text-gray-700">
                                {item.size}
                              </span>
                            </span>
                            <span>
                              Style:{" "}
                              <span className="font-medium text-gray-700">
                                {item.variant}
                              </span>
                            </span>
                          </div>

                          {/* Price and Controls */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                              <span className="text-xl font-bold text-gray-900">
                                ${item.price}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                ${item.originalPrice}
                              </span>
                            </div>

                            <div className="flex items-center justify-center sm:justify-end gap-3">
                              {/* Quantity Controls */}
                              <div className="flex items-center border border-gray-200 rounded-lg">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="p-2 hover:bg-gray-50 transition-colors"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="px-4 py-2 font-medium min-w-12 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="p-2 hover:bg-gray-50 transition-colors"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>

                              {/* Action Buttons */}
                              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {currentStep === 2 && (
                /* Checkout Form */
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Delivery Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={deliveryInfo.fullName}
                        onChange={(e) =>
                          handleDeliveryInfoChange("fullName", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={deliveryInfo.phone}
                        onChange={(e) =>
                          handleDeliveryInfoChange("phone", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <textarea
                        value={deliveryInfo.address}
                        onChange={(e) =>
                          handleDeliveryInfoChange("address", e.target.value)
                        }
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your full address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={deliveryInfo.city}
                        onChange={(e) =>
                          handleDeliveryInfoChange("city", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your city"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        value={deliveryInfo.zipCode}
                        onChange={(e) =>
                          handleDeliveryInfoChange("zipCode", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter ZIP code"
                      />
                    </div>
                  </div>

                  {/* Delivery Options */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Truck className="w-5 h-5 mr-2" />
                      Delivery Options
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="delivery"
                          defaultChecked
                          className="mr-3"
                        />
                        <div className="flex-1">
                          <div className="font-medium">
                            Standard Delivery (Free)
                          </div>
                          <div className="text-sm text-gray-600">
                            3-5 business days
                          </div>
                        </div>
                        <span className="font-bold text-green-600">Free</span>
                      </label>
                      <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="delivery" className="mr-3" />
                        <div className="flex-1">
                          <div className="font-medium">Express Delivery</div>
                          <div className="text-sm text-gray-600">
                            1-2 business days
                          </div>
                        </div>
                        <span className="font-bold">$9.99</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                /* Payment Form */
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payment Method
                  </h2>

                  {/* Payment Method Selection */}
                  <div className="space-y-3 mb-6">
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
                      <span className="font-medium">Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <div className="w-5 h-5 mr-3 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                        P
                      </div>
                      <span className="font-medium">PayPal</span>
                    </label>
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <div className="w-5 h-5 mr-3 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                        $
                      </div>
                      <span className="font-medium">Cash on Delivery</span>
                    </label>
                  </div>

                  {/* Card Details Form */}
                  {paymentMethod === "card" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          value={cardInfo.cardNumber}
                          onChange={(e) =>
                            handleCardInfoChange("cardNumber", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={cardInfo.expiryDate}
                          onChange={(e) =>
                            handleCardInfoChange("expiryDate", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={cardInfo.cvv}
                          onChange={(e) =>
                            handleCardInfoChange("cvv", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="123"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          value={cardInfo.nameOnCard}
                          onChange={(e) =>
                            handleCardInfoChange("nameOnCard", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter name as on card"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "paypal" && (
                    <div className="text-center py-8">
                      <div className="text-gray-600 mb-4">
                        You will be redirected to PayPal to complete your
                        payment
                      </div>
                      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                        <div className="text-blue-600 font-bold text-xl">
                          PayPal
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "cash" && (
                    <div className="text-center py-8">
                      <div className="text-gray-600 mb-4">
                        Pay when your order is delivered
                      </div>
                      <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                        <div className="text-green-600 font-bold text-2xl">
                          $
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 sticky top-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sub Total</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-medium text-green-600">
                      ${discount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-orange-600">Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  // onClick={proceedToNextStep}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-6"
                >
                  {currentStep === 1
                    ? "Proceed to Checkout"
                    : currentStep === 2
                    ? "Continue to Payment"
                    : "Place Order"}
                </button>

                {currentStep > 1 && (
                  <button
                    onClick={goBackToPreviousStep}
                    className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors mb-6"
                  >
                    Back to {currentStep === 2 ? "Cart" : "Checkout"}
                  </button>
                )}

                {/* Coupon Section */}
                <div className="border-t pt-6 mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Have a Coupon?
                  </h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
