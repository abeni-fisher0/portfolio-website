import { BrowserRouter as Router } from 'react-router-dom';
import RouterSwitch from './router';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 min-h-screen">
          <RouterSwitch />
        </div>
      </Router>
    </ThemeProvider>
  );
}
