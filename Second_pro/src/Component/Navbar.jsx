import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Services } from './Services';
import { Contact } from './Contact';

export const Navbar = ()=>{
    return (
         <BrowserRouter>
      {/* Navigation */}
      <nav>

        <Link to="/">Home</Link> {" "}
        <Link to="/about">About</Link> {" "}
        <Link to="/services">Service</Link> {" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    )
}   