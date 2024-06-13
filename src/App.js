import './App.css';
// import Student from './components/Student';
// import Conditionalstatements from './components/Conditionalstatements';
import UseStatehook from './components/UseStatehook';
import React, {useState} from 'react';

function App() {

  // let login = false;
  // let login = true;

  // if (login == false) {
  //   return <h1> Don't show anything </h1>
  // } else {
  //   return <h1>Showing Movie</h1>
  // }

  // ternary operation
  // let login = false;

  // this if-else generally gives error


  /* React Hooks - useState */
  const [num, setNum] = useState(1);  // initial state

  function increment() {
    setNum(num + 1);
  }
  // function increment(n) {
  //   setNum(num + n);
  // }

  function decrement() {
    setNum(num - 1);
  }
  // function decrement(n) {
  //   setNum(num - n);
  // }

  function multiply() {
    setNum(num * 2);
  }

  function divide() {
    setNum(num / 2);
  }

  function clear() {
    setNum(num * 0);
  }

  
  return (
    <div className="App">

  {/* // ternary operation */}

      {/* {
        login == false ? <h1 style={{color: 'cyan'}}>Don't show anything</h1> : <h1>Showing Movie</h1>
      } */}

      {/* <Student /> */}

      {/* <Conditionalstatements/> */}

      

      {/* useState Hook Explained */}

        <UseStatehook />
        
        <div className='main'>
          <h1 className='heading' > {num} </h1>

          <div className="buttons">

            <button className='btn' onClick={increment} > Increment </button>

            {/* if any parameter is passed */}
            {/* <button className='btn' onClick={() => increment(2)} > Increment </button>        */}

            <button className='btn' onClick={decrement} > Decrement </button>
            
            {/* if any parameter is passed */}
            {/* <button className='btn' onClick={() => decrement(1)} > Increment </button> */}

            <button className='btn' onClick={multiply} > Multiply </button>

            <button className='btn' onClick={divide} > Division </button>


            <button className='btn' onClick={clear} > Clear </button>

          </div>

        </div>
    </div>

    
  );
}

export default App;
