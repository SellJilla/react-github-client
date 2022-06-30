import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className='App container'>
      <div className='row vh-100'>
        <div className='col-3'>
          <div className='py-5'>
            <UserInfo />
          </div>
          <SideMenu />
        </div>
        <div className='col-9'>
          <div className='py-5'>
            <Header />
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
