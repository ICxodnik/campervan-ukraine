import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, NavLink, Navigate, Link } from "react-router-dom";
import Loader from "./components/Loader";
import { useAppDispatch } from "./app/hooks";
import { loadAction } from "./app/camperSlice";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  const Home = lazy(() => import("./pages/Home"));
  const Catalog = lazy(() => import("./pages/Catalog"));
  const Favorites = lazy(() => import("./pages/Favorites"));

  useEffect(() => {
    dispatch(loadAction());
  });

  return (
    <div className="mainPage">
      <nav>
        <Link className="navLink" to="/">
          <span className="secondWordLogo">Campervan</span>
        </Link>
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/catalog">
          Catalog
        </NavLink>
        <NavLink className="navLink" to="/favorites">
          Favorites
        </NavLink>
      </nav>

      <Suspense fallback={<Loader hide={false} />}>
        <Routes>
          <Route path="catalog" element={<Catalog />}>
            <Route path=":camperId" element={<Catalog />} />
          </Route>
          <Route path="favorites" element={<Favorites />}>
            <Route path="camperId" element={<Favorites />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
