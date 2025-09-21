import { createContext, useContext, useState, type ReactNode } from "react";


interface SidebarCtx {
    showLeft: boolean;
    showRight: boolean;
    toggleLeft: () => void;
    toggleRight: () => void;
};

const SidebarContext = createContext<SidebarCtx | undefined>(undefined);

export const SidebarProvider = ({children}: {children: ReactNode}) => {
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);

  const toggleLeft = () => setShowLeft((prev) => !prev);
  const toggleRight = () => setShowRight((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ showLeft, showRight, toggleLeft, toggleRight }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() { 
    const ctx = useContext(SidebarContext);
    if (!ctx) {
        throw new Error("useSidebar must be used within a SidebarProvider");
      }
    return ctx;
}