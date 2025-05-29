import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Страницы
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Meetings from "./pages/Meetings";
import Filials from "./pages/Filials";
import LibraryFilial from "./pages/LibraryFilial";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import Settings from "./pages/Settings";
import BookBooking from "./pages/BookBooking";

// Компоненты
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/filials" element={<Filials />} />
        <Route path="/filials/:id" element={<LibraryFilial />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recovery" element={<Recovery />} />

        {/* Защищённые маршруты */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books/:id/book"
          element={
            <ProtectedRoute>
              <BookBooking />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
