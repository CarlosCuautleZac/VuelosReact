import { useFetch } from './useFetch'
import{Container} from './container' 
import './App.css'

function App() {

const {data, loading, error} = useFetch("https://aerolineatec.sistemas19.com/api/vuelos");

  return (
   
    
    <Container data={data} loading={loading} error={error}></Container>

  )
}

export default App
