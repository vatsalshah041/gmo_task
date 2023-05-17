import Page1 from './components/Page1'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page2 from './components/Page2';

function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path='/' element={<Page1></Page1>}></Route>
        <Route path='/page2' element={<Page2></Page2>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
