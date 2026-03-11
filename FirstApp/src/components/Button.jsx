function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
export default function Button() {
  return (
    <div className="button">
      <h1>This is the Button Component</h1>
      <MyButton />  
    </div>
  );
}