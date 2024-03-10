import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter  , Route ,Routes } from 'react-router-dom'
import { AppContext } from './Components/AppContext.jsx'
import About from './Pages/About.jsx'
import Adminstration from './Pages/Adminstration.jsx'
import Academics from './Pages/Academics.jsx'
import Departments from './Pages/Departments.jsx'
import Research from './Pages/Research.jsx'
import TraningandPlacement from './Pages/TraningandPlacement.jsx'
import Alumni from './Pages/Alumni.jsx'
import './i18n.js';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Routes>
//     const [theme,settheme]=useState("");
//     <Appcontext.Provider value={{theme, settheme}}>
//       <Route path='/' element={ <App />}></Route>
//       </Appcontext.Provider>
//     </Routes>
   
//     </BrowserRouter>
//   </React.StrictMode>,
// )

const Root = () => {
  const [theme, settheme] = useState("");

  return (
    <React.StrictMode>
      <AppContext.Provider value={{ theme, settheme }}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/About' element={<About />} />
            <Route path='/Administration' element={<Adminstration />} />
            <Route path='/Academics' element={<Academics/>} />
            <Route path='/Departments' element={<Departments />} />
            <Route path='/Research' element={<Research />} />
            <Route path='/Traning&Placement' element={<TraningandPlacement />} />
            <Route path='/Alumni' element={<Alumni/>} />



        </Routes>
      </BrowserRouter>
      </AppContext.Provider>

    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);