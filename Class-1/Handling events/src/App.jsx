import ErrorMessage from "./Components/ErrorMessage";
import ItemList from "./Components/ItemsList";
import Container from "./Components/Container";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let FoodListItems = ["Apple", "Orange", "Kiwi", "Green Apple"];
  // let FoodListItems = [];
  return (
    <>
      <Container>
        <h1>HEALTY FOODS</h1>
        <ErrorMessage items={FoodListItems} />
        <ItemList items={FoodListItems} />
      </Container>
    </>
  );
}
export default App;
