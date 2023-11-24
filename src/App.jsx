import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/sauce/SharedLayout';
import Cases from './components/Main/cases/cases'
import About from './components/Main/about/about'
import Greet from './components/Main/greet/greet';
// import Hero from './components/Main/hero/hero'
import Soon from './components/Main/soon/soon';

import Industries from './components/Main/about/industries/industries';
import Services from './components/Main/about/services/services';
import Approach from './components/Main/about/approach/approach';
import Team from './components/Main/about/team/team';

import './App.module.scss';


// Change Soon on Hero

function App () {
  return (
    
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Soon/>} />
        {/* <Route index element={<Hero />} /> */}
        <Route path="/cases" element={<Cases />} /> 
        <Route path="/about" element={<About />}> 
          <Route path="industries" element={<Industries/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="approach" element={<Approach/>}/>
          <Route path="team" element={<Team/>}/>
        </Route>
        <Route path="/greet" element={<Greet />} /> 
        <Route path="*" element={< Soon/>} /> 
      </Route>
    </Routes>
    
  );
}

export default App;
