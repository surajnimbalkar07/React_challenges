import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);

 const me= useEffect(() => {
    const interval = setInterval(() => {
      setNum((currentNum) => {
        if (currentNum > 0) {
          return currentNum - 1;
        }else {

          // Stop the interval when num reaches 0
          clearInterval(interval);//used closure concept here, get access of parent variable
          return 0;
        }
      });
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  
  const handleSubmit = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <p>time left: {num}</p>
      <button onClick={handleSubmit}>+</button>
    </div>
  );
}
