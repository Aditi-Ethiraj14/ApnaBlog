import React from "react";

const PopularAuthors = () => {
  const popularUser = [
    {
      firstName: "Aditi", // Replace with your name
      lastName: "Ethiraj", // Leave empty or add surname
      photoUrl: "/src/assets/adi.jpg", // Replace with your image URL
    },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 items-center">
          <h1 className="text-3xl md:text-4xl font-bold pt-10">
            Popular Authors
          </h1>
          <hr className="w-24 text-center border-2 border-red-500 rounded-full" />
        </div>
        <div className="flex items-center justify-around my-10 px-4 md:px-0">
          {popularUser.map((user, index) => (
            <div key={index} className="flex flex-col gap-2 items-center">
              <img
                src={user.photoUrl}
                alt={`${user.firstName} ${user.lastName}`}
                className="rounded-full h-16 w-16 md:w-32 md:h-32"
              />
              <p className="font-semibold">
                {user.firstName} {user.lastName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularAuthors;

