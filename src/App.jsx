import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import FavoritePage from './components/FavoritePage';
import { Route , Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <div className="flex">
        <SideBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/favorites' element={<FavoritePage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
