import SidebarToggle from '../Layout/SidebarToggle';
import SwitchLanguageToggle from '../Layout/SwitchLanguageToggle';
import NavigationMenu from './NavigationMenu';

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full border-ie ">
      <div className="text-3xl font-bold mis-5 mbs-3">
        <SidebarToggle />
      </div>
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mx-auto mb-3">Brand</h2>
      <div className="flex w-full justify-center ">
        <SwitchLanguageToggle />
      </div>
      <nav className="flex flex-col gap-6 flex-1 mt-6">
        <NavigationMenu />
      </nav>
    </div>
  );
}
