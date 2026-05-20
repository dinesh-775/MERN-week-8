import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function RouterLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RouterLayout;