import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav/MyNav";
import fantasy from "./books/fantasy.json"
import AllTheBooks from "./AllTheBooks/AllTheBooks";
import MyFooter from "./MyFooter/MyFooter";

function App() {
  const fantasyBooks = fantasy;
  console.log(fantasyBooks);

  return (
    <>
     <MyNav></MyNav>
     <AllTheBooks books={fantasyBooks}></AllTheBooks>
    <MyFooter></MyFooter>
    </>
  );
}

export default App;
