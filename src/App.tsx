import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductsPage from './pages/MasterMngt/Products/ProductsPage';
import AssetsPage from './pages/MasterMngt/Assets/AssetsPage';
import AssetDetailPage from './pages/MasterMngt/Assets/AssetDetailPage/AssetDetailPage';
import Transactions from './pages/Transaction/Transactions';
import EditTransactions from './pages/Transaction/EditTransactions';
import CreateTransaction from './pages/Transaction/CreateTransaction';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
      <Route element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/transaction/transactions" element={<Transactions />} />
        <Route path="/transaction/transactions/create" element={<CreateTransaction />} />
        <Route path="/transaction/transactions/:id" element={<EditTransactions />} />
        <Route path="/master-mgmt/assets" element={<AssetsPage />} />
        <Route path="/master-mgmt/assets/:id" element={<AssetDetailPage />} />
        <Route path="/master-mgmt/products" element={<ProductsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  );
}

export default App;
