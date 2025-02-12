import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './Component/HomeComponent';
import AboutComponent from './Component/AboutComponent';
import ContactComponent from './Component/ContactComponent';
import ProductComponent from './Component/ProductComponent';
import LayoutComponent from './Component/LayoutComponent';
import NotFoundComponent from './Component/NotFoundComponent';



function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product/:id">Product</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/product/:id" element={<ProductComponent />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
