import { Routes, Route, BrowserRouter } from 'react-router-dom';

import TestComp from './components/TestComp';
import Home from './pages/Home';
import Customer from './pages/Customer';
import Inventory from './pages/Inventory';
import Order from './pages/Order';
import Report from './pages/Report';
import Page404 from './pages/Page404';
import Layout from './components/Layout';
import AppProvider from './redux/AppProvider';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="customer" element={<Customer />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="order" element={<Order />} />
            <Route path="report" element={<Report />} />
            <Route path="test" element={<TestComp />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
