import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from './routers/routers';
import { SidebarProvider } from './contexts/SideBarProvider';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <SidebarProvider>
            <Sidebar />
            <BrowserRouter>
                <Routes>
                    {routers.map((item, index) => (
                        <Route path={item.path} element={<item.component />} key={index} />
                    ))}
                </Routes>
            </BrowserRouter>
        </SidebarProvider>
    );
}

export default App;
