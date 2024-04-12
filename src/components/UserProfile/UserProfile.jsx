import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="border flex flex-col lg:flex-row rounded-xl w-3/4 lg:w-1/2 mx-auto my-20 p-4">
      <img
        src={user && user.photoURL}
        alt=""
        className="lg:w-40  h-40 object-cover rounded-xl mx-auto"
      />
      <div className="card-body">
        <h2 className="text-xl font-semibold">
          Name : {user && user.displayName}
        </h2>
        <h3 className="text-xl">Email : {user && user.email}</h3>
      </div>
    </div>
  );
};

export default UserProfile;
