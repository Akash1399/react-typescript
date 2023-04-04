import "./App.css";
// import Oscar from "./components/Oscar";
// import OscarSecond from "./components/OscarSecond";
// import Status from './components/Status';
import Greet from "./components/Greet";
import User from "./components/state/User";
// import Button from "./components/Button";
// import Input from "./components/Input";
// import PersonList from './components/PersonList';

function App() {
  const personsList = [
    {
      firstName: "Bruce",
      lastName: "Wayne",
    },
    {
      firstName: "Clark",
      lastName: "Kent",
    },
    {
      firstName: "Princess",
      lastName: "Diana",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet name="Akash" isLoggedIn={true} /> */}
        <User />
        {/* <PersonList personsList={personsList}/> */}
        {/* ADVANCE PROPS */}
        {/* <Status status='error'/> */}
        {/* <Oscar>
        "Nato Nato wins the Oscar"
      </Oscar>
      <OscarSecond>
        <h3>Speed is Funny Youtuber</h3>
      </OscarSecond> */}
        {/* <Button handleClick={(event,id)=>{console.log('ButtonClicked',event,id)}}/> */}
        {/* <Input value='' handlChange={(event)=>console.log(event.target.value)}/> */}
      </header>
    </div>
  );
}

export default App;
