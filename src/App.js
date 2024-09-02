import './App.css';
import { useEffect, useState } from 'react';
import { api } from './utils.js/constant';

function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    try{
      const res = await fetch(api);
      const json = await res.json();
      setData(json)
      console.log(json)
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div className="App">
      {data.map((item,index)=>{
        return <p key={index}>{item.email}</p>
      })}
    </div>
  );
}

export default App;
