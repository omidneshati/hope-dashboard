import { ReactNode } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import Sidebar from '../Sidebar';
import { open } from '@/redux/slices/sidebarSlice';

export default function Layout({ children }: { children: ReactNode }) {
  const { isOpen } = useAppSelector((state) => state.isSidebarOpen);
  const dispatch = useAppDispatch();
  return (
    <main>
      <header>
        <div>header</div>
        <button type="button" onClick={() => dispatch(open())}>
          Open
        </button>
      </header>
      <div
        style={{
          display: isOpen ? 'block' : 'none'
        }}>
        <Sidebar />
      </div>
      {children}
      <footer>footer</footer>
    </main>
  );
}
