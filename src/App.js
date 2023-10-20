
import Header from'./views/shared/Header.js'
import Home from './views/Home'
import Tasks from './views/tasks'

//dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      </Routes>
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
