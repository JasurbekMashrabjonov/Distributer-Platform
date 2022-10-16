import React from "react";
import ListAgency from "../layouts/ListAgency";
import Navbar from "../layouts/Navbar";
import ReportAgency from "../layouts/ReportAgency";

function MainPage() {
  return (
    <>
      <section className="mainpage">
      <Navbar/>
      <div className="row">
      <ListAgency/>
      <ReportAgency/>
      </div>
      </section>
    </>
  );
}

export default MainPage;
