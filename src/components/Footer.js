import React from "react";

export default function Footer() {
  const showYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        Developed with 💚 by{" "}
        <a
          href="https://www.github.com/diestrocorleone"
          target="_blank"
          title="GitHub Diestro Corleone"
          rel="noreferrer"
        >
          Diestro Corleone
        </a>{" "}
        | {showYear()}
      </div>
    </footer>
  );
}
