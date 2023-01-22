import { useAppDispatch } from '@/hooks/useAppRedux';
import NavigationMenu from './NavigationMenu';
import { close } from '@/redux/slices/sidebarSlice';

export default function Sidebar() {
  const dispatch = useAppDispatch();
  return (
    <ul>
      <button type="button" onClick={() => dispatch(close())}>
        Close
      </button>
      <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-ie dark:bg-gray-900 dark:border-gray-700">
        <NavigationMenu />
      </div>
    </ul>
  );
}
