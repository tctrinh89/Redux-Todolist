import Navbar from "../component/Navbar";

function NavbarOnly({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default NavbarOnly;
