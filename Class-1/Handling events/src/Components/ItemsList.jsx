import List from "./List";

function ItemList({ items }) {
  return (
    <>
      <ul class="list-group">
        {items.map((item) => (
          <List key={item} items={item} />
        ))}
      </ul>
    </>
  );
}

export default ItemList;
