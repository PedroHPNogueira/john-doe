import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { RegisterPage } from "../pages/registerPage"
import { CustomerInfo } from "../components/registerSteps/CustomerInfo"
import { FavoriteColorForm } from "../components/registerSteps/FavoriteColor"
import { NotesForm } from "../components/registerSteps/NotesForm"

/* import { AnimatePresence } from "framer-motion" */

export const RoutesComponent = () => {
  const location = useLocation()

  return (
    /* <AnimatePresence mode="wait"> */
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<Navigate to="/register/identify" />} />
      <Route path="/register" element={<RegisterPage />}>
        <Route path="/register/identify" element={<CustomerInfo />} />
        <Route path="/register/favoriteColor" element={<FavoriteColorForm />} />
        <Route path="/register/notes" element={<NotesForm />} />
      </Route>
    </Routes>
    /* </AnimatePresence> */
  )
}
