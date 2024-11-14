import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import inactivityLogout from './components/InactivityLogout';

function App() {
  inactivityLogout();
  return (
    <div className='container'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
