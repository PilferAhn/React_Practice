
import React, {useState} from 'react'; 
import Twit from './Twit';
import './App.css';

function App(){

  const [users,setUsers] = useState([
    {name : "JIMIN", message: "Training"},
    {name : "JiSU", message: "Almost done"},
    {name : "Not You", message: "Plz Stop"}
  ])

  // const sayHello = () =>  {
  //   console.log("hello");
  // };

  // boolean , number, string 
  // make a text
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1);
    setRed(!isRed);
  }
  return (
    <div className = 'app'>


      {users.map(user => (
        <Twit name = {user.name} message = {user.message} />
      ))}
      {/* <h1 className={isRed ? 'red' : ""}> change my Color</h1>
      <br/>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}

{/*       
      <Twit name = "정수" message = "메세지를 보냅니다"/>
      <Twit name = "동명" message = "뭐라고"/>
      <Twit name = "유훈" message = "나의 강아지들"/>
      <Twit name = "성민" message = "뭐하니?"/>
       */}
    </div>
  );
}

export default App;