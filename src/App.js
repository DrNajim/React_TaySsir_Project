import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbare from './Components/Navbare';
import Contact from './Components/Contact';
import Universites from './Components/Universites';
import UniversiteDetail from './Components/UniversiteDetail';
import Article from './Components/Article';
import Footer from './Components/Footer';
import Signin from './Components/signin';
import SignUp from './Components/Signup';
import Hospitauxpub from './Components/Hospitaux';
import ScrollToTop from './Components/scrolltotop';
import Progress from './Components/progress';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<ScrollToTop/>
<Navbare/>
      <Routes>
      <Route path='/' element={<Article/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Universites' element={<Universites/>}/>
      <Route path='/UniversiteDetail' element={<UniversiteDetail/>}/>
      <Route path='/Hospitaux' element={<Hospitauxpub/>}/>
      <Route  path='/Signin' element={<Signin/>}/>
      <Route  path='/Signup' element={<SignUp/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
