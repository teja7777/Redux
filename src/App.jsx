import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './pages/Dashoard';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={<Dashboard />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
