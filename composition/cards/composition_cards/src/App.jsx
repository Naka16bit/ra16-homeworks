import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <Card 
        title={"Card title"}
        text={"Some quick example text to build on the card title and make up the bulk of the card's content."}>
        <img src="https://wl-adme.cf.tsp.li/resize/400x400/jpeg/1bf/ffd/9af204526ebc0f2845a4ca03c7.jpeg" class="card-img-top" alt="..."/>
      </Card>
      <br/>
      <Card 
        title={"Special title treatment"}
        text={"With supporting text below as a natural lead-in to additional content."}>
      </Card>
    </div>
  );
}

export default App
