import mongoose from 'mongoose';

interface Product {
  title: string;
  description: string;
  image: string;
  affiliateUrl: string;
  hasFreeOption: boolean;
  draft: boolean;
  moneyBackGuarantee: boolean;
  onSale: boolean;
  discount: number;
  features: { label: string }[];
}

const productSchema = new mongoose.Schema<Product>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  affiliateUrl: { type: String, required: true },
  hasFreeOption: { type: Boolean, required: true },
  draft: { type: Boolean, required: true },
  moneyBackGuarantee: { type: Boolean, required: true },
  onSale: { type: Boolean, required: true },
  discount: { type: Number, requird: true },
  features: [{ label: { type: String } }],
});

export const ProductModel = mongoose.model<Product>('Product', productSchema);