import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <main className="layout-container">
      <Header />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
