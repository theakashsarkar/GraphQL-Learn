
import './App.css'
import { useQuery, gql } from '@apollo/client'

const query = gql`
  query GetTodosWithUser {
    getTodos {
      title
      completed
    }
  }

`

function App() {
  const {data, loading} = useQuery(query)
  if(loading) return <h1>loading...</h1>
  console.log(data);
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default App
