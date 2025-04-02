interface BlogCardProps {
    image: string;
    category: string;
    categoryColor: string;
    title: string;
    excerpt: string;
    date: string;
  }
  
  export default function BlogCard({ image, category, categoryColor, title, excerpt, date }: BlogCardProps) {
    return (
      <div className="card bg-transparent border-0">
        <div className="row g-3">
          <div className="col-4">
            <img className="rounded w-full h-auto" src={image} alt="Blog cover" />
          </div>
          <div className="col-8">
            <span
              className="badge mb-2 fw-bold text-sm px-2 py-1 rounded"
              style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}
            >
              {category}
            </span>
            <h5 className="text-lg font-semibold mb-1">
              <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors">{title}</a>
            </h5>
            <p className="text-sm text-gray-600 mb-2 hidden sm:block">{excerpt}</p>
            <span className="text-xs text-gray-500">
              <i className="fas fa-calendar-alt mr-1"></i> {date}
            </span>
          </div>
        </div>
      </div>
    );
  }