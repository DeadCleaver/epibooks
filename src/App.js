import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav/MyNav";
import fantasy from "./books/fantasy.json"
import AllTheBooks from "./AllTheBooks/AllTheBooks";

function App() {
  const fantasyBooks = fantasy;
  console.log(fantasyBooks);

  return (
    <>
     <MyNav></MyNav>
     <AllTheBooks books={fantasyBooks}></AllTheBooks>
    </>
  );
}

export default App;
