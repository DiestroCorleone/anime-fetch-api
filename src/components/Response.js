import React from "react";
import RenderAnimeList from "./RenderAnimeList";

export default function Response(props) {
  return (
    <section className="p-6 is-hcentered columns is-desktop is-multiline">
      {props.results.length > 0 ? (
        <RenderAnimeList
          results={props.results}
          setShowModal={props.setShowModal}
          setModalInfo={props.setModalInfo}
        />
      ) : (
        <p>no anime in da list.</p>
      )}
    </section>
  );
}
