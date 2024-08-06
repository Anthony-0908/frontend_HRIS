import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Routes from './Router/Routes';
import './index.css';

const App: React.FC = () => {
  // const [theme, setTheme] = useState<string>(() => {
  //   // Get theme from local storage or default to 'light'
  //   const savedTheme = localStorage.getItem('theme');
  //   return savedTheme ? savedTheme : 'light';
  // });

  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme);
  //   localStorage.setItem('theme', theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };

  return (
    // <div className="App min-h-screen flex items-center justify-center">
    //   <button className="btn btn-primary" onClick={toggleTheme}>
    //     Toggle Dark Mode
    //   </button>
    // </div>

    <>
      <div className="App">
        <RouterProvider router={Routes} />
      </div>
    </>
  );
};

export default App;
