import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState();
useEffect(() => {

  const fetchData = async () => {

try {

  const response = await fetch('/api/data')
  setData(response.data)
} catch(error) {

  console.error(error)
}

fetchData()

  }
  
  


})




  return (
    <> <h2>Project</h2>
     <ul><li>1.backend with node.js and express</li>
     <li>2.frontend with javascript react and vite</li>
     <li>3. combined we connect our React frontend with our express backend by making API calls from our react components, fetchData async response</li>
     </ul>

     <div>{data ? (<p>{data.message}</p>) :  (<p>Loading data...</p>)}</div>
    </>
  )
}

export default App
