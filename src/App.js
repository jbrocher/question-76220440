import './App.css'
import React,{useState,useEffect} from 'react'
import axios from 'axios'



export default function App() {
  
  const[isLogged,setIsLogged] = useState(false);


  const[csrf,setCsrf] = useState("");

  const url = 'https://mtstorez.000webhostapp.com/app/store/welcome'

  
  //get login status of user
  useEffect(() => {
    axios.post(url, {
      test: "test"
    })
    .then(response => {
      console.log('AJAX request successful');
      //setData(response.data);
    })
    .catch(error => {
      console.log('AJAX request failed');
      //setError(error.message);
    });
  }, []);



  
  return (

    <main>
      {
        isLogged ? <div> Dashboard</div> : <div>Login</div>
      }
    </main>
  )
}

