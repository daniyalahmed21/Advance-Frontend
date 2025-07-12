import { useEffect, useState } from "react";

function SearchBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {

    if (!input.trim()) {
      setResults([]);
      return;
    }

    if (input === cache[input]) {
      console.log(cache[input]);
      console.log();
      setResults(cache[input]);
      return;
    }

    const res = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    console.log("data fetched")
    const json = await res.json();
    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };

  useEffect(() => {
    const Timer = setTimeout(() => fetchData(), 300);
    return () => clearInterval(Timer);
  }, [input]);

  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="flex  flex-col h-auto">
        <h1 className="text-3xl font-medium mb-6">Auto Complete Search Bar</h1>
        <div className="h-96 ">
          <input
            className=" border-3 text-lg font-medium border-black/60 p-2 w-full"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
          />
          <div className="h-full overflow-auto">
            {showResults &&
              results.map((recipe, index) => (
                <div key={index} className="border-2 p-2 text-sm ">
                  <span>{recipe.name}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
