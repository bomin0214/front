import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import Counter from './components/Counter';
// import Timer from './components/Timer.jsx';

createRoot(document.getElementById('root')).render(<Counter />, <App />)
