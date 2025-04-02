import Image from 'next/image';
import { Review } from '../../types/business';

interface ReviewItemProps {
  review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
  return (
    <div className="review-item flex gap-4 py-5 border-b border-[var(--border)] transition-[var(--transition)] hover:bg-[rgba(248,249,250,0.5)] last:border-b-0">
      <Image 
        src={review.avatar} 
        alt={review.author} 
        width={48} 
        height={48} 
        className="review-avatar rounded-full border-2 border-white shadow-sm object-cover"
      />
      <div className="review-content flex-1">
        <div className="review-header flex justify-between items-center mb-2">
          <div className="review-author font-bold text-[0.95rem]">{review.author}</div>
          <div className="review-rating text-[var(--action)] text-[0.9rem]">
            {Array.from({ length: 5 }).map((_, i) => (
              <i 
                key={i}
                className={`fas ${i < Math.floor(review.rating) ? 'fa-star' : 
                  (i === Math.floor(review.rating) && review.rating % 1 > 0 ? 'fa-star-half-alt' : 'fa-star')}`}
              />
            ))}
          </div>
        </div>
        <div className="review-text text-sm text-[var(--text-dark)] leading-[1.5]">
          {review.text}
        </div>
      </div>
    </div>
  );
}