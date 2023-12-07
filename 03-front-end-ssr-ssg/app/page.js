// SSR (Back-end) - Server-side rendering
// SPA (Front-end) - Single page application
// SSR (Front-end) - Browser + Node.js
// SSG (Front-end) - Static Side Generation (cache)

// Único carregamento principal

// Problemas: CEO (indexação), performance, cache ...

async function getUsers() {
  const headers = new Headers()

  headers.append('Accept', 'application/json')

  const response = await fetch('http://localhost:3333/users', { headers, next: { revalidate: 5000 } })

  if (!response.ok) {
    throw new Error('Falha ao buscar dados')
  }

  const { data } = await response.json()
 
  return data
}

export default async function Home() {
  const users = await getUsers()

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}
