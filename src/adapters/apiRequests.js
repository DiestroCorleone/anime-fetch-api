import axios from "axios";

export function getWithFetch(searchTerm, setResults) {
  if (searchTerm) {
    try {
      fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}`)
        .then((res) => res.json())
        .then((json) => {
          setResults(json.data);
          console.log("Ejecutada fetch");
        })
        .catch((err) => console.error(err));
    } catch (e) {
      alert("Error: " + e);
    }
  } else {
    alert("Please type something into the searchbar.");
  }
}

export async function getWithAsyncAwait(searchTerm, setResults) {
  if (searchTerm) {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}`);
      const json = await res.json();
      setResults(json.data);
      console.log("Ejecutada asyncAwait");
    } catch (e) {
      alert("Error: " + e);
    }
  } else {
    alert("Please type something into the searchbar.");
  }
}

export function getWithAxios(searchTerm, setResults) {
  if (searchTerm) {
    // alert("Under construction, please try another method.");
    axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}`).then((json) => {
      setResults(json.data.data);
      console.log("Ejecutada Axios");
    });
  } else {
    alert("Please type something into the searchbar.");
  }
}
