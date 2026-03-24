import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";

export default function Navbar() {

    return (
        <>
          <BrowserRouter>
        <nav >
          <Link to="/">Home</Link> |{" "}
          <Link to="/Form">Add Record</Link> |{" "}
        </nav>
      
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Form" element={<Form />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}
