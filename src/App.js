import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage, Layout } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='produkty' element={<HomePage />} />
        <Route path='o-nas' element={<HomePage />} />
        <Route path='kontakt' element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
