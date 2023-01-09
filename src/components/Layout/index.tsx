import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { store } from '../../redux/store';
import { store } from '@/redux/store';
import Sidebar from '../Sidebar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <header>header</header>
          <div>
            <Sidebar />
          </div>
          {children}
          <footer>footer</footer>
        </main>
      </BrowserRouter>
    </Provider>
  );
}
