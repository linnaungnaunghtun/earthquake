import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageLoading from "../../../components/PageLoading";

const PublicLayout = () => {
  return (
    <main className="flex flex-col bg-black min-h-screen">

      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    
    </main>
  );
};

export default PublicLayout;
