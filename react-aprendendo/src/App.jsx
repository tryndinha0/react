import "./index.css"
import Card from "./card";
import Estudante from "./estudante.jsx"
function App() {
  return (
    <>
     <Estudante name="joao paulo" idade="19" kpop={false}/>
     <Estudante/>
    </>
  );
}

export default App
