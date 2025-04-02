'use client';

import MainHeader from '@/components/layouts/mainHeader';
import BlogCard from '@/components/blog/BlogCard';
import RecentPostList from '@/components/blog/RecentPostList';
import TagList from '@/components/blog/TagList';
import WhoToFollow from '@/components/blog/WhoToFollow';

export default function BlogPage() {
  const blogs = [
    {
      image: '/images/post/4by3/03.jpg',
      category: 'Lifestyle',
      categoryColor: '#e11d48',
      title: 'Social guides the way in 2022 app performance report',
      excerpt: 'Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.',
      date: 'Jan 22, 2022',
    },
    {
      image: '/images/post/4by3/04.jpg',
      category: 'Sports',
      categoryColor: '#0ea5e9',
      title: 'Upcoming live video feed may not work how you expect',
      excerpt: 'Under folly balls, death own point now men. Match way these she avoids seeing death.',
      date: 'Mar 07, 2022',
    },
    {
      image: '/images/post/4by3/05.jpg',
      category: 'Business',
      categoryColor: '#10b981',
      title: 'Google shares top search trends of 2022',
      excerpt: 'I think on style child of. Servants moreover in sensible it ye possible six say his.',
      date: 'Jun 17, 2022',
    },
    {
      image: '/images/post/4by3/06.jpg',
      category: 'Technology',
      categoryColor: '#f59e0b',
      title: 'Counts reels replies, delivering another way to tap into the video',
      excerpt: 'Placing forming nay looking old married few has. Margaret disposed of add screened rendered.',
      date: 'Nov 11, 2022',
    },
  ];

  return (
    <>
      <MainHeader />
      <main className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Blog section */}
          <section className="lg:col-span-8 space-y-6">
            <h1 className="text-xl font-semibold text-gray-800">Latest blogs</h1>
            {blogs.map((blog, idx) => (
              <div key={idx}>
                <BlogCard {...blog} />
                {idx !== blogs.length - 1 && <hr className="my-4" />}
              </div>
            ))}
            {/* Pagination opcional aquí */}
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <RecentPostList />
            <TagList />
            <WhoToFollow />
          </aside>
        </div>
      </main>
    </>
  );
}
