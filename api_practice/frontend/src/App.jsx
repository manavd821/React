import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const deBounce = (func, delay) => {
      let timerId;
      return (...args) => {
        clearTimeout(timerId); // cancel the last call
        timerId = setTimeout(() => {
          func(...args);
        }, delay)
      }
  }
  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        const res = await axios.get(
            `/api/products?q=${query}`,
            {
              signal: controller.signal,
            },
        );
        console.log(res.data);
        setData(res.data);
        setError(false);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Canceled: ", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [query]);

  const debouncedChange = useCallback(deBounce((inputVal) => setQuery(inputVal), 700),[]); 

  // if (error) return (<p>Something went wrong</p>)
  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            debouncedChange(e.target.value);
          }}
        />
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong</p>}
        <p>Your data: {data.length}</p>
        <div>
          {
            data.map(product => (
              <span key={product.id}>{product.id}. {product.name} </span>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
