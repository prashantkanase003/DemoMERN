import axios from "axios"
import {useState} from "react"
import toast from "react-hot-toast"
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [roll, setRoll] = useState(null);

  const submitHandle= async(event)=>{
    event.preventDefault();

    const {res} = axios.post("/api/user/create", {name, roll})

    if(res){
      toast.success(res.message)
    }else{
      toast.error("not created")
    }
  }
  return (
    <div className="App">
      <form onSubmit={submitHandle}>
          <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
          <input type="number" name="roll" value={roll} onChange={(e)=> setRoll(e.target.value)}/>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
