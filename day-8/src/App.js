
import './App.css';
import {Button} from "./components/Button"

function App() {
  return (
    <div className="App">
       <Button bg={"#2490fe"} color={"white"} border={" transparent "}>
        Primary Button
      </Button>
      <Button border={" 1px solid gray "}>Default Button</Button>
      <Button border={" 1px dotted gray "}>Dashed Button</Button>
      
    </div>
  );
}

export default App;
