import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import CardsItems from "./Components/CardsItems";
import { Items } from "./Components/DataItems";
import { useState } from "react";

function App() {
  const [itemData, setItemData] = useState(Items);

  // Get Categories
  const allCategory = ["All", ...new Set(Items.map((cate) => cate.category))];

  // Filter Categories
  function filterCategories(cat) {
    if (cat === "All") {
      setItemData(Items);
    } else {
      const filterArr = Items.filter((item) => item.category === cat);
      setItemData(filterArr);
    }
  }
  // Filter Search
  function filterSearch(word) {
    if (word !== "") {
      const filterArr = Items.filter((item) => item.title === word);
      setItemData(filterArr);
    }
  }
  return (
    <div>
      <NavBar filterSearch={filterSearch} />
      <Container>
        <Header />
        <Category
          filterCategories={filterCategories}
          allCategory={allCategory}
        />
        <CardsItems itemData={itemData} />
      </Container>
    </div>
  );
}

export default App;
