import { Toaster } from 'react-hot-toast';
import './App.css';
import Invoice from './Components/Invoice';

function App() {
  return (
    <div className="App">
      <Invoice></Invoice>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
