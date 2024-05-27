import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
