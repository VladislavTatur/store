import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Liked } from './pages/Liked.tsx';
import { ShopHome } from './pages/ShopHome.tsx';
import { Header } from './shared/components/Header/Header.tsx';
import { Input } from './shared/components/Input/Input.tsx';
import { ROUTES } from './shared/constants/links.ts';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="block lg:hidden px-4 pt-3">
        <Input placeholder="Введите код или название товара" />
      </div>
      <Routes>
        <Route path={ROUTES.main} element={<ShopHome />} />
        <Route path={ROUTES.liked} element={<Liked />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
