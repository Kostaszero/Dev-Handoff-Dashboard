import { useState } from "react";
import { useSidebar } from "../contexts/SidebarContext";

const sidebarData = [{
    title: "Dashboards",
    content: [
        {label: "Default", items: [], icon: "/assets/ChartPieSliceLight.svg", icon_dark: "/assets/ChartPieSlice.svg", active: true},
        {label: "eCommerce", items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"], icon: "/assets/ShoppingBagOpenLight.svg", icon_dark: "/assets/ShoppingBagOpen.svg"},
        {label: "Projects", items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"], icon: "/assets/FolderNotchLight.svg", icon_dark: "/assets/FolderNotch.svg"},
        {label: "Online Courses", items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"], icon: "/assets/BookOpenLight.svg", icon_dark: "/assets/BookOpen.svg"}
    ]
},
{
    title: "Pages",
    content: [
        {label: "User Profile", items: ["Overview", "Projects", "Campaigns", "Documents", "Followers"], icon: "/assets/IdentificationBadgeLight.svg", icon_dark: "/assets/IdentificationBadge.svg"},
        {label: "Account", items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"], icon: "/assets/IdentificationCardLight.svg", icon_dark: "/assets/IdentificationCard.svg"},
        {label: "Corporate", items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"], icon: "/assets/UsersThreeLight.svg", icon_dark: "/assets/UsersThree.svg"},
        {label: "Blog", items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"], icon: "/assets/NotebookLight.svg", icon_dark: "/assets/Notebook.svg"},
        {label: "Social", items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"], icon: "/assets/ChatsTeardropLight.svg", icon_dark: "/assets/ChatsTeardrop.svg"}
    ]
}]


const SidebarItem = ({ item }: any) => {
  const [open, setOpen] = useState(false);

  return (
      <div>
        <button onClick={() => setOpen(!open)} className={`gap-1 cursor-pointer flex items-center w-full 
        py-1.5 rounded-md ${ item.active ? "bg-primary-bg dark:bg-border-color-dark" : "hover:bg-primary-bg dark:hover:bg-border-color-dark"}`}>
            <div className="w-4 h-4">
                { 
                  (item.items.length > 0) 
                    &&
                    <>
                    <img src="/assets/ArrowLineRightLight.svg" alt=">" className={` w-4 h-4 mr-2 block dark:hidden transform transition-transform duration-280 ${open ? "rotate-90": ''} `} />
                    <img src="/assets/ArrowLineRight.svg" alt=">" className={` w-4 h-4 mr-2 hidden dark:block transform transition-transform duration-280 ${open ? "rotate-90": ''} `} /> 
                    </>
                }
            </div>
          { item.icon && 
          <><img src={item.icon} alt="icons" className="w-5 h-5 block dark:hidden" /> <img src={item.icon_dark} alt="icons" className="w-5 h-5 hidden dark:block" /> </> 
          }
          <span>{item.label}</span>
        </button>

        {(item.items.length > 0) && 
        <div className="flex justify-center">
            {open && (
            <div className="mt-1 flex flex-col space-y-1">
                {item.items.map((child: any) => (
                <span key={child} className="rounded text-sm hover:bg-primary-bg dark:hover:bg-border-color-dark cursor-pointer px-2 py-1" >
                    {child}
                </span>
                ))}
            </div>
            )}
        </div>
        }
      </div>
    );
}

export default function Sidebar() {

  const { showLeft }: any = useSidebar();

  if (!showLeft) return null;

  return (
    <aside className="w-1/7 p-6 border-r border-solid border-border-color dark:border-border-color-dark min-h-screen">
      {/* Main profile */}
      <div className="flex items-center gap-3 pb-4">
        <img src="/assets/ByeWind.svg" alt="avatar" className="w-10 h-10 rounded-full" />
        <span className="text-sm">ByeWind</span>
      </div>

        <div className="my-space mb-4 mt-4 flex flex-col">
                <div className="header flex justify-between pb-4">
                    <p className="text-sm text-text-40 dark:text-text-dark-40">Favorites</p>
                    <p className="text-sm me-5 text-text-20 dark:text-text-dark-20">Recently</p>
                </div>
                <ul className="pe-4">
                    <li className="flex items-center gap-1 mb-4">
                        <img className="hidden dark:block h-[15px] w-[15px] mx-1" src="/assets/Dot.svg" alt="•" />
                        <img className="Block dark:hidden h-[6px] w-[6px] mx-2" src="/assets/DotWhite.svg" alt="•" />
                        <span>Overview</span>
                    </li>
                    <li className="flex items-center gap-1 mb-4">
                        <img className="hidden dark:block h-[15px] w-[15px] mx-1" src="/assets/Dot.svg" alt="•" />
                        <img className="Block dark:hidden h-[6px] w-[6px] mx-2" src="/assets/DotWhite.svg" alt="•" />
                        <span>Projects</span>
                    </li>
                </ul>
        </div>

      {/* Sidebar content */}
      <div className="flex flex-col gap-6 overflow-y-auto">
        {sidebarData.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-sm mb-2">
              {section.title}
            </h3>
            <div className="flex flex-col space-y-1">
               {/* All dropdown content */}
              {section.content.map((item, idx) => (
                <SidebarItem key={`${item}_${idx}`} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}