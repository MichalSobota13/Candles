import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage, Layout, Products, Product, CartProvider, Basket } from './pages';
import { Footer } from './components';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='produkty' element={<Products />} />
          <Route path='produkty/:id' element={<Product />} />
          <Route path='o-nas' element={<HomePage />} />
          <Route path='kontakt' element={<Footer />} />
          <Route path='koszyk' element={<Basket />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
