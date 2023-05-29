import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage, Layout, Products, Product, CartProvider } from './pages';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='produkty' element={<Products />} />
          <Route path='produkty/:id' element={<Product />} />
          <Route path='o-nas' element={<HomePage />} />
          <Route path='kontakt' element={<HomePage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
