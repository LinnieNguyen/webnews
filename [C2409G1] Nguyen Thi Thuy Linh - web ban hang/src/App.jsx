import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './Component/Header/Header';
import HomePage from './Pages/HomePage';
import ProductDetail from './Component/ProductDetail/ProductDetail';
import Footer from './Component/Footer/Footer';
import Didong from './Pages/Didong';
import Tivi from './Pages/Tivi';
function App() {

  return (
   <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/mobile' element={<Didong />} />
          <Route path='/tivi' element={<Tivi />} />
          <Route path='/product-detail/:id' element={<ProductDetail />} />

      </Routes>
   
      <Footer />
   </BrowserRouter>
    
  )
}

export default App
