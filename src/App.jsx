import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import LocationInfo from "./components/LocationInfo"
import FoodInfo from "./components/FoodInfo"
import Ticket from "./components/Ticket"
import Guest from "./components/utils/Guest"
import Biograph from "./components/Biograph"
import Schedule from "./components/Schedule"
import ErrorPage from "./components/ErrorPage"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<LocationInfo />} />
      <Route path="/food" element={<FoodInfo />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/guest">
        <Route index element={<Guest />} />
        <Route path=":id" element={<Biograph />} />
      </Route>
      <Route path="/schedule" element={<Schedule />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  )
}

export default App
