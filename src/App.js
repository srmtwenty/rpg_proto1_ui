import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import PlayerList from './pages/PlayerList';
import PlayerDetail from './pages/players/PlayerDetail';
import PlayerPost from './pages/players/PlayerPost';
import PlayerUpdate from './pages/players/PlayerUpdate';

import ArmorList from './pages/ArmorList';
import ArmorDetail from './pages/armors/ArmorDetail';
import ArmorPost from './pages/armors/ArmorPost';
import ArmorUpdate from './pages/armors/ArmorUpdate';

import WeaponList from './pages/WeaponList';
import WeaponDetail from './pages/weapons/WeaponDetail';
import WeaponPost from './pages/weapons/WeaponPost';
import WeaponUpdate from './pages/weapons/WeaponUpdate';

import EnemyList from './pages/EnemyList';
import EnemyDetail from './pages/enemies/EnemyDetail';
import EnemyPost from './pages/enemies/EnemyPost';
import EnemyUpdate from './pages/enemies/EnemyUpdate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/players" element={<PlayerList/>}/>
        <Route exact path="/players/:id" element={<PlayerDetail/>}/>
        <Route exact path="/players/create" element={<PlayerPost/>}/>
        <Route exact path="/players/:id/update" element={<PlayerUpdate/>}/>

        <Route path="/armors" element={<ArmorList/>}/>
        <Route exact path="/armors/:id" element={<ArmorDetail/>}/>
        <Route exact path="/armors/create" element={<ArmorPost/>}/>
        <Route exact path="/armors/:id/update" element={<ArmorUpdate/>}/>

        <Route path="/weapons" element={<WeaponList/>}/>
        <Route exact path="/weapons/:id" element={<WeaponDetail/>}/>
        <Route exact path="/weapons/create" element={<WeaponPost/>}/>
        <Route exact path="/weapons/:id/update" element={<WeaponUpdate/>}/>

        <Route path="/enemies" element={<EnemyList/>}/>
        <Route exact path="/enemies/:id" element={<EnemyDetail/>}/>
        <Route exact path="/enemies/create" element={<EnemyPost/>}/>
        <Route exact path="/enemies/:id/update" element={<EnemyUpdate/>}/>
      </Routes>
    </div>
  );
}

export default App;
