import { useSidebar } from "../contexts/SidebarContext";
import { useTheme } from "../contexts/ThemeContext";


export default function Navbar() {

    const { toggle } = useTheme();
    const { toggleLeft, toggleRight }: any = useSidebar();

    return (
            <div className="flex items-center justify-between px-5 py-5 border-b border-border-color dark:border-border-color-dark">
            <div className="flex items-center">
            <div className="p-2 hover:bg-primary-card dark:hover:bg-primary-card-dark rounded-full cursor-pointer" onClick={toggleLeft}>
                <img src="assets/SidebarLight.svg" alt="menu" className="w-5 h-5 block dark:hidden"/>
                <img src="assets/Sidebar.svg" alt="menu" className="w-5 h-5 hidden dark:block" />
            </div>
            <div className="p-2 hover:bg-primary-card dark:hover:bg-primary-card-dark rounded-full cursor-pointer">
                <img src="assets/StarLight.svg" alt="star" className="w-5 h-5 block dark:hidden"/>
                <img src="assets/Star.svg" alt="star" className="w-5 h-5 hidden dark:block" />
            </div>
            <span className="p-2 pl-4 dark:hover:text-white hover:text-text text-text-40 dark:text-text-dark-40 cursor-pointer">Dashboards</span>
            <span className="px-2 text-text-20 dark:text-text-dark-20">/</span>
            <span className="p-2 font-normal">Default</span>
            </div>
    
            <div className="flex items-center gap-4">
            <div className="relative">
                <img src="assets/SearchLight.svg" alt="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 block dark:hidden" />
                <img src="assets/Search.svg" alt="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 hidden dark:block" />
                <input id="top-search-bar" type="text" placeholder="Search"
                className="bg-border-color dark:bg-border-color-dark text-sm placeholder-text-20 dark:placeholder-text-dark-20 pl-9 py-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
                <span className="absolute right-3 mt-[1px] top-1/2 -translate-y-1/2 text-xs text-text-20 dark:text-text-dark-20">⌘/</span>
            </div>
    
            <div className="flex items-center">
                <div className="p-2 hover:bg-primary-card dark:hover:bg-primary-card-dark rounded-full cursor-pointer">
                    <img src="assets/SunLight.svg" onClick={toggle} alt="sun" className="w-5 h-5 hover:opacity-80 block dark:hidden" />
                    <img src="assets/Sun.svg" onClick={toggle} alt="sun" className="w-5 h-5 hover:opacity-80 hidden dark:block" />
                </div>
                <div className="p-2 hover:bg-primary-card dark:hover:bg-primary-card-dark rounded-full cursor-pointer">
                    <img src="assets/ReloadLight.svg" alt="refresh" className="w-5 h-5 hover:opacity-80 block dark:hidden" />
                    <img src="assets/Reload.svg" alt="refresh" className="w-5 h-5 hover:opacity-80 hidden dark:block" />
                </div>
                <div className="p-2 hover:bg-primary-card dark:hover:bg-primary-card-dark rounded-full cursor-pointer" onClick={toggleRight}>
                    <img src="assets/BellLight.svg" alt="bell" className="w-5 h-5 hover:opacity-80 block dark:hidden" />
                    <img src="assets/Bell.svg" alt="bell" className="w-5 h-5 hover:opacity-80 hidden dark:block" />
                </div>
                <div className="p-2 hover:bg-primary-card dark:hover:bg-primary-card-dark rounded-full">
                    <img src="assets/SidebarLight.svg" alt="grid" className="w-5 h-5 cursor-pointer hover:opacity-80 block dark:hidden" />
                    <img src="assets/Sidebar.svg" alt="grid" className="w-5 h-5 cursor-pointer hover:opacity-80 hidden dark:block" />
                </div>
            </div>
            </div>
            </div>
        );
    }