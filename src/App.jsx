import React, { useState } from "react";
import { FaUsers, FaBoxOpen } from "react-icons/fa";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [productsCount, setProductsCount] = useState(null);

  const fetchStudents = () => {
    setTimeout(() => {
      setStudents(["John", "Sarah", "Mike"]);
    }, 800);
  };

  const fetchProducts = () => {
    setTimeout(() => {
      setProductsCount(15);
    }, 800);
  };

  return (
    <div className="dashboard">
      {/* Heading at the top center */}
      <h1 className="main-heading">📊 Admin Dashboard</h1>

      {/* Buttons */}
      <div className="button-row">
        <button className="fetch-btn" onClick={fetchStudents}>
          <FaUsers style={{ marginRight: "8px" }} /> Fetch Students
        </button>

        <button className="fetch-btn" onClick={fetchProducts}>
          <FaBoxOpen style={{ marginRight: "8px" }} /> Fetch Products
        </button>
      </div>

      {/* Info cards */}
      <div className="cards-row">
        <div className="info-card">
          <FaUsers size={28} color="#007bff" />
          <div>
            <h3>Students</h3>
            <p>{students.length}</p>
          </div>
        </div>

        <div className="info-card">
          <FaBoxOpen size={28} color="#007bff" />
          <div>
            <h3>Products</h3>
            <p>{productsCount !== null ? productsCount : "-"}</p>
          </div>
        </div>
      </div>

      {/* Student list */}
      {students.length > 0 && (
        <div className="student-list">
          <h2><FaUsers style={{ marginRight: "8px" }} /> Student List</h2>
          <ul>
            {students.map((student, idx) => (
              <li key={idx}>{student}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
