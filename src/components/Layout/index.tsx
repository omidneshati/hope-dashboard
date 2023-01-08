import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
