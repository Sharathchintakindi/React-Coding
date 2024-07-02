import styles from "./List.module.css";

function List({ items }) {
  const handledButtonClicked = (items) => {
    console.log(`${items} added to the cart`);
  };
  return (
    <>
      <li className={`${styles["kg-Item"]} list-group-item`}>
        <span className={styles["kg-span"]}> {items}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={() => {
            handledButtonClicked(items);
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
}
export default List;
