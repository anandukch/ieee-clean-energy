import NavBar from './components/NavBar';
import MainBody from './components/MainBody'
import './App.css';

function App() {

  return (
    <div className='app' >
      <NavBar/>
      <div className="main_img" ><img src="https://c4.wallpaperflare.com/wallpaper/254/353/294/digital-art-minimalism-green-trees-wallpaper-preview.jpg" alt=""/></div>

    <MainBody/>
    </div>
  );
}

export default App;
