import { useEffect, useState } from "react"

// SSR (Back-end) - Server-side rendering
// SPA (Front-end) - Single page application

// Único carregamento principal

// Problemas: CEO (indexação), performance, cache ...

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const headers = new Headers()

    headers.append('Accept', 'application/json')
    
    fetch('http://localhost:3333/users', { headers })
      .then(response => response.json())
      .then(({data}) => setUsers(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

export default App
