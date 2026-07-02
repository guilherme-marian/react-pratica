import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Questao1 from './Pages/Questao1/index';
import Questao2 from './Pages/Questao2/index';
import Questao3 from './Pages/Questao3/index';
import Questao4 from './Pages/Questao4/index';
import Questao5 from './Pages/Questao5/index';
import Questao6 from './Pages/Questao6/index';
import HomeGame from './Pages/Questao7/HomeGames';
import RainWorld from './Pages/Questao7/RainWorld';
import HollowKnight from './Pages/Questao7/HollowKnight';
import Silksong from './Pages/Questao7/Silksong';
import AHatInTime from './Pages/Questao7/AHatInTime';
import Mewgenics from './Pages/Questao7/Mewgenics';
import Ultrakill from './Pages/Questao7/Ultrakill';
import Terraria from './Pages/Questao7/Terraria';
import TheBindingOfIsaac from './Pages/Questao7/BindingOfIsaac';
import Journey from './Pages/Questao7/Journey';
import Blasphemous from './Pages/Questao7/Blasphemous';

import Questao8 from './Pages/Questao8/index';
import Questao9 from './Pages/Questao9/index';
import Questao10 from './Pages/Questao10/index';
import Questao11 from './Pages/Questao11/index';
import Questao12 from './Pages/Questao12/index';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/Questao1" element={<Questao1/>}/>
                <Route path="/Questao2" element={<Questao2/>}/>
                <Route path="/Questao3" element={<Questao3/>}/>
                <Route path="/Questao4" element={<Questao4/>}/>
                <Route path="/Questao5" element={<Questao5/>}/>
                <Route path="/Questao6" element={<Questao6/>}/>
                <Route path="/Questao7" element={<HomeGame />} />
                <Route path="/rain-world" element={<RainWorld />} />
                <Route path="/hollow-knight" element={<HollowKnight />} />
                <Route path="/silksong" element={<Silksong />} />
                <Route path="/a-hat-in-time" element={<AHatInTime />} />
                <Route path="/mewgenics" element={<Mewgenics/>} />
                <Route path="/ultrakill" element={<Ultrakill/>} />
                <Route path="/terraria" element={<Terraria/>} />
                <Route path="/the-binding-of-isaac" element={<TheBindingOfIsaac/>} />
                <Route path="/journey" element={<Journey/>} />
                <Route path="/blasphemous" element={<Blasphemous/>} />

                <Route path="/Questao8" element={<Questao8/>}/>
                <Route path="/Questao9" element={<Questao9/>}/>
                <Route path="/Questao10" element={<Questao10/>}/>
                <Route path="/Questao11" element={<Questao11/>}/>
                <Route path="/Questao12" element={<Questao12/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;