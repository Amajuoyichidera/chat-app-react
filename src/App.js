import { Routes, Route } from 'react-router-dom';

import ChatDashboard from './pages/ChatDashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<ChatDashboard />} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/register' element= {<Register/>} />
        <Route path='*' element= {<NotFound/>} />
      </Routes>
      <h1 className="text-2xl font-bold">React + tailwindcss = Awesomeness </h1>
    </div>
  );
}

export default App;
