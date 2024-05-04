import React from "react";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops! Page Not Found</h1>
      <p style={styles.message}>The page you are looking for does not exist.</p>
    </div>
  );
};

const styles: {[key: string]: React.CSSProperties} = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
  },
  message: {
    fontSize: "20px",
    color: "#666",
  },
};

export default NotFound;
