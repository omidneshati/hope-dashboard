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
      <NavigationMenu />
    </ul>
  );
}
