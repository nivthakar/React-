export default function Props() {

    function greet(name) {
      alert(`Hello, ${name}!`);
    }

  return (
    <div className="props">
      <h1>This is the Props Component</h1>
        <button onClick={() => greet('welcome React')}>Greet Nirav</button> 
    </div>
  );
}