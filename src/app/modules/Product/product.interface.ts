 interface IProduct {
    _id?: string;
    name: string;
    description: string;
    price: number;
    discountPercentage?: number;
    imageUrl: string;
    stock: number;
    createdAt: Date;
    updatedAt?: Date; 
    finalPrice?: number; 
 }