import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPages = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dental-clean/");
  }, []);
};

export default NotFoundPages;
