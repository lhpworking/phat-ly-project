
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HOME_PATH, PROJECT_PATH } from "./constants/api";
import { ProjectDetail1, ProjectDetail2, ProjectDetail3 } from "./pages/project/[slug]";

const Projects = lazy(() => import("./pages/project"))
const Main = lazy(() => import("./components/Main"))
const MainLayout = lazy(() => import("./layouts/MainLayout"))

function App() {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <Routes>
        <Route element={ <MainLayout /> }>
          <Route index path={ HOME_PATH } element={ <Main /> } />
          <Route path={ PROJECT_PATH }  >
            <Route index element={ <Projects /> } />
            <Route path="/projects/p-1" element={ <ProjectDetail1 /> } />
            <Route path="/projects/p-2" element={ <ProjectDetail2 /> } />
            <Route path="/projects/p-3" element={ <ProjectDetail3 /> } />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
