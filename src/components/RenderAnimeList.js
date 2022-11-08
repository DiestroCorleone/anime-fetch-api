import React from "react";

export default function RendereAnimeList(props) {
  const renderAnimeList =
    props.results &&
    props.results.map((anime) => {
      return (
        <article
          className="column column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd m-auto"
          key={anime.mal_id}
        >
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title + " poster"}
                />
              </figure>
            </div>
            <header className="card-header">
              <p className="card-header-title">{anime.title}</p>
            </header>
            <footer className="card-footer">
              <p className="card-footer-item">
                Year: {anime.year || "Not available."}
              </p>
              <span className="card-footer-item">
                <button
                  className="button is-primary has-color-white"
                  onClick={() => {
                    props.setModalInfo([anime.title, anime.synopsis]);
                    props.setShowModal(true);
                  }}
                >
                  Read synopsis
                </button>
              </span>
            </footer>
          </div>
        </article>
      );
    });

  return <>{renderAnimeList}</>;
}
