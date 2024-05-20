import React, { Suspense, useEffect } from "react";
// import { Counter } from './features/counter/Counter';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";
import { useAppDispatch } from "./app/hooks";
import { loadAction } from "./features/camper/camperSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAction());
  });

  return (
    <div className="mainPage">
      <nav>
        <NavLink className="navLink" to="/" end>
          Home
        </NavLink>
        <NavLink className="navLink" to="/catalog">
          Catalog
        </NavLink>
        <NavLink className="navLink" to="/favorites">
          Favorites ♥
        </NavLink>
      </nav>

      <Suspense fallback={<Loader hide={false} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />}>
            <Route path=":camperId" element={<Catalog />} />
          </Route>
          <Route path="favorites" element={<Favorites />}>
            <Route path="camperId" element={<Favorites />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
