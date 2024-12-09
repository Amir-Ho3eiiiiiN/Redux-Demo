import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

export default function UserListContainer() {
  // 1. accepts a fucntion as its parameter : selector function
  // 2. useSelector hooks return whatever returns by selector function
  const { loading, data, error } = useSelector((state) => state.users);
  // returns a reference to the dispatch fucntion in redux store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="w-1/2 p-4  bg-blue-300 rounded-xl shadow-xl ">
      <h3 className="text-center text-lg font-semibold pb-2 border-b mb-4 border-white">
        List of users
      </h3>
      {loading ? (
        <span>Loading Data ...</span>
      ) : error ? (
        <span>{error}</span>
      ) : (
        <ul>
          {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      )}
    </div>
  );
}
