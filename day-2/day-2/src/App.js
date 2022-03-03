
import './App.css';

function App() {
  const companies = ["Android", "Blackberry", "iphone", "Windows phone"];
  const manufactures = ["Samsung", "HTC", "Micromax", "Oppo", "Vivo", "Apple"];

  return (
 
    <div>
      <h1 className='heading'>REACT Mobile OS</h1>

      <ul>
        <h2>Mobile Operating System</h2>
        {
          companies.map((el)=>(
            <li>{el}</li>
          ))
        }
      </ul>
      <hr/>
      <ul>
        <h2>Mobile Manufactures</h2>
        {
          manufactures.map((el)=>(
            <li>{el}</li>
          ))


        }
      </ul>
    </div>
  );
}

export default App;
