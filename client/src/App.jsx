import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import CreateProject from './pages/CreateProject';
import UpdateProject from './pages/UpdateProject';
import ProjectPage from './pages/ProjectPage';
import SearchProject from './pages/SearchProject';
import NavbarComp from './components/NavbarComp';
import ErrorBoundary from './components/ErrorBoundary';
import React, { Suspense } from 'react';

// Utilisation de React.lazy pour charger les pages asynchrones
const Homee = React.lazy(() => import('./pages/Homee'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <ErrorBoundary fallback={<p>Une erreur s'est produite. Veuillez réessayer plus tard.</p>}>
          {/* Suspense avec fallback pour afficher un indicateur de chargement */}
          <Suspense fallback={<div>Chargement...</div>}>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path="/" element={<Homee />} />
              <Route path='/projects/:id' element={<ProjectPage />} />
              <Route path='/searchProject?' element={<SearchProject />} />
              <Route path='/apropos' element={<About />} />
              <Route path='/contact' element={<Contact />} />

              <Route element={<PrivateRoute />}>
                <Route path='/profile' element={<Profile />} />
                <Route path='/create_project' element={<CreateProject />} />
                <Route path='/update_project/:id' element={<UpdateProject />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
