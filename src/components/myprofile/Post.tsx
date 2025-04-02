import LikePost from "./LikePost";

const Post = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-full max-w-2xl mx-auto text-sm border border-gray-100">
      <LikePost />
      <div className="p-4">
        <p className="text-gray-700 text-sm">This is a sample post content from Lori Ferguson.</p>
        <div className="mt-3 text-xs text-gray-500">2 comments • 5 likes</div>
      </div>
    </div>
  );
};

export default Post;
