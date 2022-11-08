import React, { useState } from "react";
import {
  getWithFetch,
  getWithAsyncAwait,
  getWithAxios,
} from "../adapters/apiRequests";
import Response from "./Response";

export default function Searchbar(props) {
  const [query, setQuery] = useState("");

  const fetchResults = (query, setResults) => {
    switch (props.selectedType) {
      case "fetch":
        return getWithFetch(query, setResults);
        break;
      case "asyncAwait":
        return getWithAsyncAwait(query, setResults);
        break;
      case "axios":
        return getWithAxios(query, setResults);
        break;
      default:
        alert("There was an error, plx try again.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.name === "query") {
      fetchResults(query, props.setResults);
    }
  };

  return (
    <div className="container">
      <div className="field p-6">
        <p className="control has-icons-right">
          <input
            name="query"
            className="input is-primary"
            type="text"
            placeholder="type your anime search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <span className="icon is-small is-right is-clickable">
            <i
              className="fa fa-search"
              onClick={() => fetchResults(query, props.setResults)}
            ></i>
          </span>
        </p>
      </div>
      <Response
        results={props.results}
        setShowModal={props.setShowModal}
        setModalInfo={props.setModalInfo}
      />
    </div>
  );
}
