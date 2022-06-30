import React, { useState } from "react";
import Header from "./Header";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const styles = {
  bgc: {
    background: "linear-gradient(#4a4913,  #eb4317, #882c14 )",
  },
};
export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Cart") {
      return <Cart />;
    }
    if (currentPage === "Menu") {
      return <Menu />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header />
      <div style={styles.bgc}>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
        <Footer />
      </div>
    </>
  );
}
