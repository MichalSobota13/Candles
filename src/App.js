import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage, Layout, Products, Product, Basket, AboutUs, Login } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='produkty' element={<Products />} />
        <Route path='produkty/:id' element={<Product />} />
        <Route path='o-nas' element={<AboutUs />} />
        <Route path='koszyk' element={<Basket />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
