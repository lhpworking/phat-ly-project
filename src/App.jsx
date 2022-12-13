
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HOME_PATH, PROJECT_PATH } from "./constants/config";
import { ProjectDetail1, ProjectDetail2, ProjectDetail3, ProjectDetail4 } from "./pages/project/[slug]";

const Projects = lazy(() => import("./pages/project/index"))
const Main = lazy(() => import("./components/Main/index"))
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
            <Route path="/projects/p-4" element={ <ProjectDetail4 /> } />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
