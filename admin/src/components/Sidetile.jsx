import React from "react";

function Sidetile({ icon, label, onClick }) {
  return (
    <div onClick={onClick} style={styles.container}>
      <div style={styles.icon}>{icon}</div>
      <div style={styles.label}>{label}</div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#f4f4f4",
    marginBottom: "20px",
    transition: "background-color 0.3s",
  },
  icon: {
    fontSize: "24px",
    color: "#555",
  },
  label: {
    fontSize: "16px",
    color: "#333",
    fontWeight: "500",
  },
};

export default Sidetile;
