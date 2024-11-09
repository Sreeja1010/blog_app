import React, { useState } from "react";
import Layout from "../components/Layout";
import follower1Pic from "../assests/follower1.jpg";
import follower2Pic from "../assests/follower2.jpg";
import follower3Pic from "../assests/follower3.jpg";
import follower4Pic from "../assests/follower4.jpg";
import follower5Pic from "../assests/follower5.jpg";
import following1Pic from "../assests/follower1.jpg"; // Add images for following
import following2Pic from "../assests/follower2.jpg";
import following3Pic from "../assests/follower3.jpg";
import following4Pic from "../assests/follower4.jpg";
import following5Pic from "../assests/follower5.jpg";

const Profile = ({ user, setUser }) => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  const handleLogout = () => {
    setUser(null); // Clear user data to log out
  };

  // Sample followers and following data
  const followers = [
    { id: 1, name: "Manasa.Kamineni", profilePicture: follower1Pic },
    { id: 2, name: "Sreeja.Gorantla", profilePicture: follower2Pic },
    { id: 3, name: "Gayathri.Inturi", profilePicture: follower3Pic },
    { id: 4, name: "Dinesh Reddy", profilePicture: follower4Pic },
    { id: 5, name: "Gowtham Reddy", profilePicture: follower5Pic },
  ];

  const following = [
    { id: 1, name: "Manasa.Kamineni", profilePicture: following1Pic },
    { id: 2, name: "Sreeja.Gorantla", profilePicture: following2Pic },
    { id: 3, name: "Gayathri.Inturi", profilePicture: following3Pic },
    { id: 4, name: "Dinesh Reddy", profilePicture: following4Pic },
    { id: 5, name: "Gowtham Reddy", profilePicture: following5Pic },
  ];

  // Dummy data for user's posts count and likes
  const posts = [
    { id: 1, title: "Post 1", content: "This is the first post" },
    { id: 2, title: "Post 2", content: "This is the second post" },
    { id: 3, title: "Post 3", content: "This is the third post" },
  ];
  const userLikes = 120; // Example number of likes

  return (
    <Layout>
      <section className="container mx-auto mt-10 p-5 flex flex-col items-center">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <img
              src="https://via.placeholder.com/150" // Placeholder for profile picture
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300"
            />
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>
          </div>

          {/* Number of Posts and Likes */}
          <div className="text-center mt-6 text-gray-700">
            <p>
              <strong className="text-xl">{posts.length}</strong> Posts
            </p>
            <p>
              <strong className="text-xl">{userLikes}</strong> Likes
            </p>
          </div>

          {/* Followers and Following Toggle */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowFollowers(!showFollowers)}
              className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              {showFollowers ? "Hide Followers" : "Show Followers"}
            </button>
            <button
              onClick={() => setShowFollowing(!showFollowing)}
              className="bg-green-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300 ease-in-out ml-4"
            >
              {showFollowing ? "Hide Following" : "Show Following"}
            </button>
          </div>

          {/* Followers Section */}
          {showFollowers && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Followers</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {followers.map((follower) => (
                  <div
                    key={follower.id}
                    className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
                  >
                    <img
                      src={follower.profilePicture}
                      alt={follower.name}
                      className="w-20 h-20 rounded-full border-2 border-gray-200 mb-2"
                    />
                    <p className="text-gray-700">{follower.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Following Section */}
          {showFollowing && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Following</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {following.map((person) => (
                  <div
                    key={person.id}
                    className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
                  >
                    <img
                      src={person.profilePicture}
                      alt={person.name}
                      className="w-20 h-20 rounded-full border-2 border-gray-200 mb-2"
                    />
                    <p className="text-gray-700">{person.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white p-3 rounded-full mt-6 w-full hover:bg-red-600 transition-all duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
