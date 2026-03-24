import React, { useEffect, useState } from "react";

function API() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:5000/market-turnover"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>NSE Market Turnover</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default API;