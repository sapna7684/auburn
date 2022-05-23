import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Layout } from './layout/Layout';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/*' element={<Layout/>} />
      </Routes>
    </Router>
  );
}

export default App;
