import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./Pages/Home-Pages/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
