import { useState } from "react";


const Home = () => {

   // const clickMeButton = () =>{

      const [name, setName] = useState('Purity');
      const [ age, setAge ] = useState(23);
    //     console.log('You have clicked me');
    // }

     const clickMeAgain = () =>{
      setName('mike');
      setAge(25);
    //     console.log('Hello ' + name)
    }

  //}
  return (
    <div className="home">
      <h1> This is a home page </h1>
      <p>{ name } is {age} years old</p>
    
      <button onClick={clickMeAgain}>Click me again</button>
    </div>
  );
};

export default Home;
