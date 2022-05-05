import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Education from './Pages/Education'
import Skills from './Pages/Skills'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

import GallerySetup from './DemoGallery/GallerySetup'
import Gallery1 from './DemoGallery/Gallery1';
import Gallery2 from './DemoGallery/Gallery2';
import Gallery3 from './DemoGallery/Gallery3';
import Gallery4 from './DemoGallery/Gallery4';

import ErrorPage from './Pages/ErrorPage'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/education'>
          <Education />
        </Route>
        <Route exact path='/skills'>
          <Skills />
        </Route>
        <Route exact path='/gallery'>
          <Gallery />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>

        <Route exact path='/contact/top'>
          <Contact />
        </Route>


        <Route exact path='/gallerysetup'>
          <GallerySetup />
        </Route>
        <Route exact path='/gallery1'>
          <Gallery1 />
        </Route>
        <Route exact path='/gallery2'>
          <Gallery2 />
        </Route>
        <Route exact path='/gallery3'>
          <Gallery3 />
        </Route>
        <Route exact path='/gallery4'>
          <Gallery4 />
        </Route>


        <Route exact path='*'>
          <ErrorPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
