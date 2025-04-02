import Image from 'next/image';
import { Product } from '../../types/business';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card border border-[var(--border)] rounded-lg overflow-hidden transition-[var(--transition)] bg-white hover:-translate-y-[5px] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
      <Image 
        src={product.image} 
        alt={product.name} 
        width={300} 
        height={140} 
        className="product-image w-full h-[140px] object-cover border-b border-[var(--border)]"
      />
      <div className="product-info p-4">
        <div className="product-name font-semibold text-[0.95rem] mb-2">{product.name}</div>
        <div className="product-price text-[var(--primary)] font-bold text-[1.1rem]">{product.price}</div>
      </div>
    </div>
  );
}