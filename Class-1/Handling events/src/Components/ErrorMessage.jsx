function ErrorMessage({ items }) {
  return <>{items.length === 0 && <h2>No New Stocks</h2>}</>;
}
export default ErrorMessage;
