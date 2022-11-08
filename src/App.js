import './App.css';
import { Starships } from './Components/Starships';
import { Navigation } from './Components/Navigation';

import { Routes, Route } from 'react-router-dom'
import { CharacterList } from './Components/CharacterList';
import { Films } from './Components/Films'
import { Planets } from './Components/Planets'

function App() {


    return (
        <div className="App">
            <header className="App-header">

                <div className='nav'>
                    <Navigation className="nav" />
                </div>

                <div className='main'>
                    <Routes>
                        <Route path='/' element={<h1>Star Wars</h1>} />
                        <Route path='/starships' element={<Starships />} />
                        <Route path='/characters' element={<CharacterList />} />
                        <Route path='/films' element={<Films />} />
                        <Route path='/planets' element={<Planets />} />

                    </Routes>
                </div>




            </header>
        </div>
    );
}

export default App;
