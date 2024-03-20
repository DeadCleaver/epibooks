import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav/MyNav";
import scifi from "./books/scifi.json";
import AllTheBooks from "./AllTheBooks/AllTheBooks";
import MyFooter from "./MyFooter/MyFooter";
import Wellcome from "./Wellcome/Wellcome";
import { useEffect, useState } from "react";
import ThemeContextProvider from "./ThemeContexProvider/ThemeContextProvider";

function App() {
  
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(scifi);
  }, []);

  function searchBook(title) {
    const filteredBooks = bookList.filter((el) =>
      el.title.toLowerCase().includes(title.toLowerCase())
    );
    setBookList(filteredBooks);
  }

  function clearSearch() {
    setBookList(scifi);
  }

  return (
    <>
      <main>
        <ThemeContextProvider>
          <MyNav onSearchBook={searchBook} onClearSearch={clearSearch}></MyNav>
          <Wellcome></Wellcome>
          <AllTheBooks books={bookList}></AllTheBooks>
          <MyFooter></MyFooter>
        </ThemeContextProvider>
      </main>
    </>
  );
}

export default App;
