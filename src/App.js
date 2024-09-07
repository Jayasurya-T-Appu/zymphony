import './App.css';
import DropArea from './components/DropArea';
import DropitemsOption from './components/DropItemsComponent/DropitemsOption';

function App() {
  return (
    <div className="App">
     <div className="h-screen w-screen p-5 flex justify-items-center items-center">

      <DropArea/>
      <DropitemsOption/>

      
     </div>
    
    
    </div>
  );
}

export default App;
