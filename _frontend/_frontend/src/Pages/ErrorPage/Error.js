import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

function Error(props) {
  const navigate = useNavigate();
  return (
    <div className="error_section">
      <h1 className="error">404</h1>
      <div className="error_description">Ooops!!! Saxifa topilmadi</div>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Orqaga
      </button>
    </div>
  );
}

export default Error;
