import Global from "./styles/global"
import { RoutesComponent as Routes } from "./routes"
import RegisterProvider from "./contexts/registerContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <Global />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <RegisterProvider>
        <Routes />
      </RegisterProvider>
    </>
  )
}
