import "./App.css";

import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Fire Island</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
