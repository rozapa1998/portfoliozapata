import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/Navbar/NavBarComponent';
import HomeComponent from './components/Home/HomeComponent';
import 'animate.css';
import ContentListContainer from './components/ContentList/ContentListContainer';

function App() {
  return (
    <>
      <NavBarComponent/>
      <HomeComponent/>
      <ContentListContainer/>
    </>
  )
}

export default App
