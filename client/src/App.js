import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Routes,Route,
  Navigate,
} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" 
        element={<Navigate from="/" to={`/documents/${uuidv4()}`} replace={true}/>}
      exact />
      <Route path="/documents/:id" element={ <TextEditor/>} />
       
    </Routes>
  </Router>
  )
}

export default App;
