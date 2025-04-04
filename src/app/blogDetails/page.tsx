// pages/blogDetails.tsx
import MainHeader from '@/components/layouts/mainHeader';
import BlogHeader from '../../components/blogDetails/BlogHeader';
import BlogContent from '../../components/blogDetails/BlogContent';
import BlogQuote from '../../components/blogDetails/BlogQuote';
import BlogComments from '../../components/blogDetails/BlogComments';
import BlogReplyForm from '../../components/blogDetails/BlogReplyForm';

export default function BlogDetailsPage() {
  return (
    <>
      <main>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 mx-auto">
              <div className="vstack gap-4">
                <div className="card card-body">
                  <BlogHeader />
                  <BlogContent />
                  <BlogQuote />
                  <p className="mb-0">
                    All led out world this music while asked...
                  </p>
                </div>
                <div className="card">
                  <div className="card-body">
                    <BlogComments />
                    <hr className="my-4" />
                    <BlogReplyForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
