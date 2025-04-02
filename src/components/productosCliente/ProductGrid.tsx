import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        name="Kit Inicial Zero Waste"
        category="Hogar sostenible"
        price="$599 MXN"
        originalPrice="$799 MXN"
        rating={4.5}
        reviews={24}
        image="https://source.unsplash.com/random/600x400/?eco,product,1"
        badge="Nuevo"
      />
      <ProductCard
        name="Cepillo Dental de Bambú"
        category="Cuidado personal"
        price="$129 MXN"
        rating={5}
        reviews={56}
        image="https://source.unsplash.com/random/600x400/?eco,product,2"
        badge="Más vendido"
        badgeColor="bg-green-500"
      />
      <ProductCard
        name="Envolturas Reutilizables de Cera de Abeja"
        category="Hogar sostenible"
        price="$249 MXN"
        originalPrice="$299 MXN"
        rating={4}
        reviews={18}
        image="https://source.unsplash.com/random/600x400/?eco,product,3"
      />
      {/* Agrega más cards como necesites */}
    </section>
  );
}
