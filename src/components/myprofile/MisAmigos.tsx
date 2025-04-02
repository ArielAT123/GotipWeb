const MyFriends = () => {
  const friends = [
    { name: "Amanda Reed", img: "/avatar/02.jpg", mutual: 16 },
    { name: "Alex Walker", img: "/avatar/03.jpg", mutual: 8 },
  ];

  // Calculamos la cantidad total de amigos
  const totalFriends = friends.length;

  return (
    <div className="bg-white shadow rounded p-4">
      <div className="flex justify-between mb-4">
        <h5 className="text-lg font-semibold">
          Friends <span className="text-sm text-red-500">({totalFriends})</span>
        </h5>
        <a href="#" className="text-sm text-blue-500">
          See all
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {friends.map((friend, index) => (
          <div key={index} className="text-center border p-2 rounded">
            <img
              src={friend.img}
              alt={friend.name}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h6 className="mt-2 font-medium">{friend.name}</h6>
            <p className="text-xs text-gray-500">
              {friend.mutual} mutual friends
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFriends;