import React, { useState, useEffect, useCallback } from "react";
import StickyHeader from "./header-footer/StickyHeader";
import FooterLoader from "./header-footer/FooterLoader";
import { FaTrash } from "react-icons/fa";
import "../assets/css/style.css";

const ListComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Fetch data from API
  const fetchUserData = useCallback(async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=5&seed=abc`
      );
      const data = await response.json();
      console.log(data.results);
      if (data.results.length > 0) {
        setUsers((prevUsers) => [...prevUsers, ...data.results]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUserData(page);
    return () => {
      setLoading(false);
    };
  }, [fetchUserData, page]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle delete user
  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.login.uuid !== userId)
      );
    }
  };

  return (
    <div className="list-container">
      <StickyHeader />
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.login.uuid} className="user-item">
            <img
              src={user.picture.large}
              alt={user.name.first}
              className="user-image"
            />
            <div className="user-info">
              <h3>{`${user.name.first} ${user.name.last}`}</h3>
              <p>Email: {user.email}</p>
              <p>Username: {user.login.username}</p>
              <p>
                Location: {`${user.location.city}, ${user.location.country}`}
              </p>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDelete(user.login.uuid)}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <FooterLoader loading={loading} />
    </div>
  );
};

export default ListComponent;
