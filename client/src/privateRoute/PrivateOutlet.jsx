import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import authStore from "../store/authStore";

function PrivateOutlet() {
  const { checkAuth, loggedIn } = authStore();
  useEffect(() => {
    if (loggedIn === null) {
      checkAuth();
    }
  }, []);

  if (!loggedIn) return <Navigate to="login" />;
  if (loggedIn === false) return <Navigate to="login" />;
  if (loggedIn === null) return <h3>Loading....</h3>;

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateOutlet;
