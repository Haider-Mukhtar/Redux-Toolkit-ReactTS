import { Route, Routes } from "react-router"

import Dashboard from "./pages/dashboard"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default App