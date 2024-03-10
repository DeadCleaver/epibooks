import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav/MyNav";
import fantasy from "./books/fantasy.json";
import AllTheBooks from "./AllTheBooks/AllTheBooks";
import MyFooter from "./MyFooter/MyFooter";
import Wellcome from "./Wellcome/Wellcome";

function App() {
  const fantasyBooks = fantasy;
  console.log(fantasyBooks);

  return (
    <>
      <main>
        <MyNav></MyNav>
        <Wellcome></Wellcome>
        <AllTheBooks books={fantasyBooks}></AllTheBooks>
        <MyFooter></MyFooter>
      </main>
    </>
  );
}

export default App;
