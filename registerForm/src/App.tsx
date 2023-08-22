import Global from "./styles/global"
import { RoutesComponent as Routes } from "./routes"
import RegisterProvider from "./contexts/registerContext"

export const App = () => {
  return (
    <>
      <Global />

      <RegisterProvider>
        <Routes />
      </RegisterProvider>
    </>
  )
}
