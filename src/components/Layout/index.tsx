import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/useAppRedux';
import Sidebar from '../Sidebar';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  const { isOpen } = useAppSelector((state) => state.isSidebarOpen);
  const { language: currentLanguage } = useTranslation().i18n;
  return (
    <main dir={currentLanguage === 'fa' ? 'rtl' : undefined} className="md:grid grid-cols-6">
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block col-start-1 row-start-1 h-screen fixed inset-0 bg-white `}>
        <Sidebar />
      </div>
      <div className="container flex flex-col">
        <header className="flex px-5 py-3 h-20 items-center" dir="ltr">
          <Header />
        </header>
        <div className="">{children}</div>
        <footer className="mt-auto">footer</footer>
      </div>
    </main>
  );
}
