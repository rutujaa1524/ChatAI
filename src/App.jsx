import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer]=useState("")
  async function generateAnswer(){
    setAnswer("loading..");
    const response =await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAQkvoWwNe7Yk_GXKu9rsaWWrcNNwCzZ8o",
      method:"post",
      data:{"contents":[{"parts":[{"text":question}]},
          ],
        },
    });
   
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
    
    
    ;
  }

  return (
    <>
     <h1 className="bg-red-300">Chat AI</h1>
     <textarea value={question} onChange={(e)=> setQuestion(e.target.value)}
      cols="130" rows="10" ></textarea>
     <br />
     <button onClick={generateAnswer}>Generate answer</button>
     <div>{answer}</div>
    </>
  );
}

export default App
