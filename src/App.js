

import TaskManager from './app/TaskManager';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import Home from "./app/Home";
import NoPage from "./app/NoPage";
import OfferPrice from "./app/OfferPrice";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/home" element={<Home />} />
        
          <Route exact path="/task" element={<TaskManager />} />
          <Route exact path="/nopage" element={<NoPage />} />
          <Route exact path="*"element={<NoPage />}/>
          <Route exact path="/offer1"  element={<OfferPrice />} />
          <Route exact path="/offer2" element={<OfferPrice />} />
          <Route exact path="/offer3"element={<OfferPrice />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
