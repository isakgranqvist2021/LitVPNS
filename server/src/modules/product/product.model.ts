import mongoose from 'mongoose';

export interface Product {
  title: string;
  description: string;
  image: string;
  affiliateUrl: string;
  hasFreeOption: boolean;
  draft: boolean;
  onSale: boolean;
  rating: number;
  discount: number;
  features: string[];
}

export const ProductModel = mongoose.model<Product>(
  'Product',
  new mongoose.Schema<Product>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    affiliateUrl: { type: String, required: true },
    hasFreeOption: { type: Boolean, required: true },
    draft: { type: Boolean, required: true },
    rating: { type: Number, required: true },
    onSale: { type: Boolean, required: true },
    discount: { type: Number, requird: true },
    features: [String],
  }),
);
