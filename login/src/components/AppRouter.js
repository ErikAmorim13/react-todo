import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Inicio from './Inicio';
import Playlist from './Playlist';
import Novidades from './Novidades';
import GlobalBrasil from './GlobalBrasil';

function AppRouter(){
    return(
        <Router>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/inicio" element={<Inicio/>} />
				<Route path="/top-global" element={<Playlist/>} />
				<Route path="/novidades" element={<Novidades/>} />
				<Route path="/global-brasil" element={<GlobalBrasil/>} />			
			</Routes>
		</Router>
    )
}

export default AppRouter;