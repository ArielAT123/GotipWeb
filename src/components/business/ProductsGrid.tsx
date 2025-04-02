import ProductCard from './ProductCard';
import { Product } from '../../types/business';

const products: Product[] = [
  { id: 1, name: 'Kit Hogar Zero Waste', price: '$599 MXN', image: 'https://source.unsplash.com/random/300x200/?eco,product,1' },
  { id: 2, name: 'Cepillos de Bambú', price: '$129 MXN', image: 'https://source.unsplash.com/random/300x200/?eco,product,2' },
  { id: 3, name: 'Envolturas de Cera', price: '$249 MXN', image: 'https://source.unsplash.com/random/300x200/?eco,product,3' },
  { id: 4, name: 'Botella Térmica', price: '$399 MXN', image: 'https://source.unsplash.com/random/300x200/?eco,product,4' }
];

export default function ProductsGrid() {
  return (
    <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}