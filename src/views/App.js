import logo from './logo.svg';
import './App.scss';


import ListTodo from './Todos/ListToDo';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/**
 * 
 * 2 components: class/ function(funtion,arrow) 
 *  
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple TODO Apps with React HoiDanIT</p>

        {/* <MyComponent/> */}
        <ListTodo />
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
