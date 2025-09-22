import { createContext, useContext, type ReactNode } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const RechartsComponentContext = createContext({
    Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis
});

export const RechartsComponentContextProvider = ({children}: {children: ReactNode}) => {
    return (
        <RechartsComponentContext.Provider value={{Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis }}>
            {children}
        </RechartsComponentContext.Provider>
    )
}

export function useRecharts() {
    const context = useContext(RechartsComponentContext);
    if (!context) {
        throw new Error("useRecharts must be used within a RechartsProvider");
      }
    return context;
}