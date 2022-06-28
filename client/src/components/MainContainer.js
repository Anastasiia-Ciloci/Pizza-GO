import React, { useState } from "react";
import Header from "./Header";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

//header bg image
import header from "../assets/img/header.jpg";

const styles = {
  bgc: {
    background: "linear-gradient(#4a4913, #eb4317, #882c14, #da3c13 )",
  },
  bgcImg: {
    resizeMode: "cover",
    backgroundImage: `url(${header})`,
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
      <div style={styles.bgcImg}>
        <Header />
      </div>
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
