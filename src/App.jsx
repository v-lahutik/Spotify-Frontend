import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom';
import { Home } from './pages';
import Login from './pages/Login/Login';

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Login />} />
      </Route>
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
