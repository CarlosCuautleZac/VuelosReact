import { useFetch } from './useFetch'
import{Container} from './container' 
import Modal from './components/modal'
import './App.css'

function App() {

const {data, loading, error} = useFetch("https://aerolineatec.sistemas19.com/api/vuelos");

  return (
   <>
    <div>
    <Container data={data} loading={loading} error={error}></Container>
    <Modal></Modal>
    </div>
    
   </>
    

  )
}

export default App
