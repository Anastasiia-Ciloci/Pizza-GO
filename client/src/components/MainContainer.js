import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("Order");

  const renderPage = () => {
    if (currentPage === "Order") {
      return <Order />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Cart") {
      return <Cart />;
    }
    return <Cart />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
