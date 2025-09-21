import { createContext, useEffect, useState, type ReactNode, useContext } from 'react';

interface ThemeCtx {
    dark: boolean;
    toggle: () => void;
    setDark: (v: boolean) => void;
};

const ThemeContext = createContext<ThemeCtx>({
    dark: false,
    toggle: () => {},
    setDark: () => {}
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [dark, setDarkState] = useState<boolean>(() => {
        if (typeof window === "undefined") return false;
        const theme = localStorage.getItem("theme");
        if (theme) return theme === "dark";
        return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
      });

    useEffect(() => {
        const root = document.documentElement;
        if (dark) root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    const toggle = () => setDarkState((s) => !s);
    const setDark = (value: boolean) => setDarkState(value);

    return (
        <ThemeContext.Provider value={{dark, toggle, setDark }}>
            {children}
        </ThemeContext.Provider>
    ) 

}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
      }
    return context;
}