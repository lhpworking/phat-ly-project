
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Main from "./components/Main";
import { CONTACT_PATH, HOME_PATH, PROJECT_PATH } from "./constants/api";
import MainLayout from "./layouts/MainLayout";
import Contact from "./pages/Contact";
import Projects from "./pages/project";

function App() {
  return (

    <>
      {/* <Loading /> */ }
      <Routes>
        <Route element={ <MainLayout /> }>
          <Route index path={ HOME_PATH } element={ <Main /> } />
          <Route path={ PROJECT_PATH } element={ <Projects /> } />
          <Route index path={ CONTACT_PATH } element={ <Contact /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
