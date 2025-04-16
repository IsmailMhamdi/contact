import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ContactForm from './components/contact/Contact';
import Me from './components/index/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
