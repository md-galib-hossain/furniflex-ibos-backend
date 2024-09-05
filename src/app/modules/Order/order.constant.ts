export const OrderStatusArr = ['Pending', 'Shipped', 'Delivered', 'Cancelled']
export const PaymentMethodArr = ['Credit Card', 'PayPal', 'Bank Transfer']

export const OrderStatus = {
    Pending: 'Pending',
    Shipped: 'Shipped',
    Delivered: 'Delivered',
    Cancelled : 'Cancelled'
  } as const;
export const PaymentMethod = {
    CreditCard: 'Credit Card',
    PayPal: 'PayPal',
    BankTransfer: 'Bank Transfer',
  } as const;