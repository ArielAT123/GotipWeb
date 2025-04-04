'use client';

import MainHeader from '../../components/layouts/mainHeader';
import BusinessSidebar from '../../components/business/BusinessSidebar';
import BusinessStats from '../../components/business/BusinessStats';
import ProductsGrid from '../../components/business/ProductsGrid';
import ReviewItem from '../../components/business/ReviewItem';
import Button from '../../components/ui/Buttom'; // Corregí "Buttom" a "Button"
import Card from '../../components/ui/Card';
import { Review } from '../../types/business';
import styles from './page.module.css';

const reviews: Review[] = [
  {
    id: 1,
    author: 'María González',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: '¡Los productos son excelentes! El kit zero waste ha cambiado completamente cómo manejo los residuos en casa. Muy buena calidad y el envío fue súper rápido.',
  },
  {
    id: 2,
    author: 'Carlos Mendoza',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4.5,
    text: 'Buenísima la botella térmica, mantiene el calor por horas. Solo sugeriría más colores disponibles. El servicio al cliente fue muy atento.',
  },
];

const BusinessDashboard: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div
        className={`${styles.businessContainer} max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-6`}>
        <BusinessSidebar />
        <main className="business-content flex-1">
          <Card className={`${styles.fadeIn} mb-6`}>
            <div className="card-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
              <h2 className="card-title text-xl font-bold flex items-center gap-3">
                <i className="fas fa-store text-[var(--primary)]"></i>
                Resumen de tu negocio
              </h2>
              <Button
                variant="primary"
                icon="pencil-alt">
                Editar negocio
              </Button>
            </div>
            <p className="mb-5">
              Aquí puedes gestionar todos los aspectos de tu negocio. Revisa tus
              estadísticas, productos y conexiones con clientes.
            </p>
            <BusinessStats />
          </Card>

          <Card className={`${styles.fadeIn} ${styles.fadeInDelay1} mb-6`}>
            <div className="card-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
              <h2 className="card-title text-xl font-bold flex items-center gap-3">
                <i className="fas fa-box-open text-[var(--secondary)]"></i>
                Productos destacados
              </h2>
              <Button
                variant="primary"
                icon="plus">
                Agregar producto
              </Button>
            </div>
            <ProductsGrid />
          </Card>

          <Card className={`${styles.fadeIn} ${styles.fadeInDelay2}`}>
            <div className="mb-5">
              <h2 className="card-title text-xl font-bold flex items-center gap-3">
                <i className="fas fa-star text-[var(--action)]"></i>
                Reseñas recientes
              </h2>
            </div>
            <div>
              {reviews.map((review) => (
                <ReviewItem
                  key={review.id}
                  review={review}
                />
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default BusinessDashboard;
