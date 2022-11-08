import React from "react";

export default function Header() {
  return (
    <header className="hero is-primary p-6">
      <div className="hero-body">
        <div className="columns  is-vcentered">
          <div className="column is-three-quarters">
            {" "}
            <h1 className="title">the most coolest anime site!</h1>
            <h3 className="subtitle">
              all the info you need about every anime ever
            </h3>
          </div>
          <div className="column is-one-quarter">
            <img
              src="https://raw.githubusercontent.com/DiestroCorleone/anime-fetch-api-assets/main/img/kawaii-transparent.png"
              alt="Kawaii header"
              className="opacity-on-hover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
