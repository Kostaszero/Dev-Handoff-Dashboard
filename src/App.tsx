import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { SidebarProvider } from './contexts/SidebarContext';
import Sidebar from './Components/Sidebar'
import DashboardDefault from './Components/DashboardDefault';
import Navbar from './Components/Navbar';
import NotificationSidebar from './Components/NotificationSidebar';

function App() {
  

  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="text-sm min-h-screen flex bg-background dark:bg-background-dark text-text dark:text-text-dark">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar /> 
            <main className="p-6 pt-6 overflow-y-auto">
              <DashboardDefault />
            </main>
          </div>
          <NotificationSidebar/>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
