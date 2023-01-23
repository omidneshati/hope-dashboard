import { useAppSelector } from '@/hooks/useAppRedux';
import SidebarToggle from './SidebarToggle';

export default function Header() {
  const { isOpen } = useAppSelector((state) => state.isSidebarOpen);
  return (
    <>
      {!isOpen && (
        <div className="text-2xl md:text-3xl font-bold lg:hidden">
          <SidebarToggle />
        </div>
      )}
      <div>Header</div>
    </>
  );
}
