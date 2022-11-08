import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState("");
  const [selectedType, setSelectedType] = useState("fetch");
  const [results, setResults] = useState([]);

  return (
    <main>
      <Header />
      <Tabs selectedType={selectedType} setSelectedType={setSelectedType} />
      <Searchbar
        setShowModal={setShowModal}
        setModalInfo={setModalInfo}
        selectedType={selectedType}
        results={results}
        setResults={setResults}
      />
      <Footer />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalInfo={modalInfo}
      />
    </main>
  );
}
