import './App.scss';
import NavBar from './Bars/NavBar';
import SideBar from './Bars/SideBar';
import MainSection from './MainSection/MainSection';

function App() {
  return (
    <div className="App">
      <div className='main' >
        <SideBar/>
        <NavBar/>
        <MainSection/>
      </div>
    </div>
  );
}

export default App;
