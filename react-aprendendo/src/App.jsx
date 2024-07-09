import "./index.css"
import Card from "./components/card.jsx";
import Estudante from "./components/estudante.jsx"
import UserGreeting from "./components/UserGreeting.jsx";
function App() {
  return (
    <>
     <UserGreeting isLoggedIn={true} username ="Daniel"/>
     <UserGreeting/>
    </>
  );
}

export default App
