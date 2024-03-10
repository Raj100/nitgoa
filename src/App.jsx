import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Announcement from './Components/Announcement'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {

  return (
    <I18nextProvider i18n={i18n}>


    <Navbar></Navbar>
    <Announcement></Announcement>
    <Footer></Footer>
    </I18nextProvider>
  )
}

export default App
