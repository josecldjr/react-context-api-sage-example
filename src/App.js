import React, {useEffect,useState} from 'react';
import Text from './Text'
import './App.css';

const MyContext = React.createContext()

function MyProvider (props) {
  return (
    <MyContext.Provider>
      {props}
    </MyContext.Provider>
  )
}


function App() {

  const [numb, setNumber] = useState(0)
  const [str, setStr] = useState('---')
  const [showPannel, setShowPannel] = useState(false)

  useEffect(() => {
    console.log('NUMBER HAVE CHANGED');
    
  }, [numb,])

  useEffect(() => {
    console.log('SOMETHING CHANGED')
  })

  return (
    <div className="App">
      <label> {numb} </label> <br></br>
      <label> {str} </label> <br></br>

      <button onClick={() => {setNumber(numb + 1)}}>Change number </button>
      <button onClick={() => { setStr(Math.random() * 999999) }}> Change str</button>
      <hr></hr> 
    </div>
  );
}

export default App;
