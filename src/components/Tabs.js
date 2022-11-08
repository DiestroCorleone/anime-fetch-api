import React from "react";

export default function Tabs(props) {
  return (
    <div className="tabs">
      <ul>
        <li
          className={props.selectedType === "fetch" ? "is-active" : ""}
          onClick={() => props.setSelectedType("fetch")}
        >
          <a>Fetch</a>
        </li>
        <li
          className={props.selectedType === "asyncAwait" ? "is-active" : ""}
          onClick={() => props.setSelectedType("asyncAwait")}
        >
          <a>Async/Await</a>
        </li>
        <li
          className={props.selectedType === "axios" ? "is-active" : ""}
          onClick={() => props.setSelectedType("axios")}
        >
          <a>Axios</a>
        </li>
      </ul>
    </div>
  );
}
