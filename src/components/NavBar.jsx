import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav>
      {/* image */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {/* nav links */}
      <ul className="navlinks">
        <li>Home</li>
        <li>Gallery</li>
        <li>Services</li>
      </ul>
    </nav>
  );
}

export default NavBar;
