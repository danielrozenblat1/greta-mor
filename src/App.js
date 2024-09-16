import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import Syllabus from './components/silabus/Silabus';
import AcrylicCourse from './components/akril/Akril';
import CourseKits from './components/kits/Kits';
import FormScreen from './components/form/FormScreen';
import NavBarNew from './components/NewNav/NavBarNew';
import AboutMe from './components/me/Me';
import ForthScreen from './screens/ForthScreen';
import Recommends from './components/recommends/Students';
import Bikorot from './components/recommends/Recommends';
import { useEffect, useState } from 'react';
import ByMe from './components/ByMe/ByMe';

function App() {

  
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
  <SecondScreen/>
  <Syllabus/>
  <AcrylicCourse/>
  <CourseKits/>
  <FormScreen/>
  <AboutMe/>
  <Recommends/>
  <Bikorot/>
  <ForthScreen/>
  <ByMe/>
  </>
}

export default App;
