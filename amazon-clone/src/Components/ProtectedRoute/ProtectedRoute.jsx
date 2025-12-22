import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataProvider";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children, msg, redirect }) {
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!user) {
      alert(msg);
      navigate("/auth", { state: {msg, redirect} });
    }  
  }, [user]); 

  return <>{children}</>;
}

export default ProtectedRoute;
