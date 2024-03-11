import Navbar from './components/Navbar';
import './index.css'

function App() {
  return (
    <>
    
      <Navbar/>
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-sky-500">You have a new message!</p>
      </div>
    </div>
    </>
  );
}

export default App

