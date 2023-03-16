import Data from "./components/Data";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <div> <Data/> </div> 
      <div> <Error/> </div>
      <div> <Loading/> </div>
    </div>
  )
}

export default App
