import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import { open, close } from '@/redux/slices/sidebarSlice';

export default function SidebarToggle() {
  const { isOpen } = useAppSelector((state) => state.isSidebarOpen);
  const dispatch = useAppDispatch();

  return isOpen ? (
    <button
      type="button"
      onClick={() => dispatch(close())}
      className="border-4 rounded-md border-gray-800 p-1">
      <GrClose />
    </button>
  ) : (
    <button
      type="button"
      onClick={() => dispatch(open())}
      className="border-4 rounded-md border-gray-800 p-1">
      <FiMenu />
    </button>
  );
}
