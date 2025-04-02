import LikePost from "./LikePost";

const Post = () => {
  return (
    <div className="bg-white shadow rounded mb-4">
      <LikePost />
      <div className="p-4">
        <p className="text-gray-700 text-sm">This is a sample post content from Lori Ferguson.</p>
        <div className="mt-3 text-xs text-gray-500">2 comments • 5 likes</div>
      </div>
    </div>
  );
};

export default Post;
