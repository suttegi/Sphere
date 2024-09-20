
import  Navbar  from './components/Navbar.jsx'
import MainPage from './pages/MainPage.jsx';
import Footer from './components/Footer.jsx';
import Categories from './pages/Categories.jsx';
import About from './pages/About.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
