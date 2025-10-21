import React, { useState } from "react";

const backgroundImageUrl =
  "https://imgs.search.brave.com/Fqxy2mEa1LmO_4hH3J0pbqJcI9WHYq_00KpN39zvWl4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGUuaW8vX25l/eHQvaW1hZ2U_dXJs/PS9pbWFnZXMvaGVy/by5qcGcmdz0zODQw/JnE9NzU"; // Replace with your chosen image

function MovieRecommendationApp() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `linear-gradient(rgba(18,18,18,0.7), rgba(18,18,18,0.6)), url("${backgroundImageUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "2rem",
          textShadow: "0 4px 16px rgba(0,0,0,0.7)",
        }}
      >
        Movie Recommendation System
      </h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search movies..."
        style={{
          fontSize: "1.2rem",
          padding: "0.8rem 1.5rem",
          borderRadius: "12px",
          border: "none",
          boxShadow: "0 2px 16px rgba(0,0,0,0.20)",
          outline: "none",
          width: "320px",
          marginBottom: "2rem",
          transition: "box-shadow 0.3s",
        }}
        onFocus={e => e.target.style.boxShadow = "0 4px 24px rgba(0,0,0,0.40)"}
        onBlur={e => e.target.style.boxShadow = "0 2px 16px rgba(0,0,0,0.20)"}
        aria-label="Movie search"
      />
      <div style={{
        display: "flex",
        gap: "1rem",
        marginTop: "1.5rem"
      }}>
        <button style={{
          padding: "0.6rem 1.3rem",
          border: "none",
          borderRadius: "8px",
          background: "#ff5757",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "1rem",
          boxShadow: "0 1px 8px rgba(50,0,0,0.15)",
        }}>Sign In</button>
        <button style={{
          padding: "0.6rem 1.3rem",
          border: "none",
          borderRadius: "8px",
          background: "#4f83ff",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "1rem",
          boxShadow: "0 1px 8px rgba(0,40,150,0.22)",
        }}>Sign Up</button>
      </div>
    </div>
  );
}

export default MovieRecommendationApp;
