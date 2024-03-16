import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav/MyNav";
import scifi from "./books/scifi.json";
import AllTheBooks from "./AllTheBooks/AllTheBooks";
import MyFooter from "./MyFooter/MyFooter";
import Wellcome from "./Wellcome/Wellcome";

function App() {
  const books = scifi;

  return (
    <>
      <main>
        <MyNav></MyNav>
        <Wellcome></Wellcome>
        <AllTheBooks books={books}></AllTheBooks>
        <MyFooter></MyFooter>
      </main>
    </>
  );
}

export default App;
