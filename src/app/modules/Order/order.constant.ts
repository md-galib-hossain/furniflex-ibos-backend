export const OrderStatusArr = ['pending', 'shipped', 'delivered', 'cancelled']
export const PaymentMethodArr = ['Card', 'PayPal', 'Bank Transfer','Cash On Delivery']

export const OrderStatus = {
    Pending: 'pending',
    Shipped: 'shipped',
    Delivered: 'delivered',
    Cancelled : 'cancelled'
  } as const;
export const PaymentMethod = {
    CreditCard: 'Card',
    PayPal: 'PayPal',
    BankTransfer: 'Bank Transfer',
    CashOnDelivery: 'Cash On Delivery'
  } as const;