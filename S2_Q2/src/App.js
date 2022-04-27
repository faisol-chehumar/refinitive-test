import "./App.css";
import axios from "axios";
import { useMemo, useEffect, useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [filterInputValue, setFilterInputValue] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get("https://api.publicapis.org/categories");
    setCategories(data.categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    if (filterInputValue === "") {
      return categories;
    }

    return categories.filter(
      (cat) => cat.toLowerCase().indexOf(filterInputValue.toLowerCase()) !== -1
    );
  }, [filterInputValue, categories]);

  const handleChangeFilterInput = (e) => {
    setFilterInputValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="my-8">
        <div className="pb-6 md:pb-0 flex flex-col">
          <label htmlFor="filter" className="input-label text-base mb-2">
            Filter Categories
          </label>
          <div>
            <input
              id="filter"
              type="text"
              className="input-field inline-flex items-baseline border-none shadow-md bg-white px-6 py-4 placeholder-blue w-full p-0 no-outline text-dusty-blue-darker focus:ring-0 focus:ring-offset-0"
              name="filter-input"
              placeholder="Animals"
              onChange={handleChangeFilterInput}
              value={filterInputValue}
              style={{ width: "200px" }}
            />
          </div>
        </div>
      </div>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              No.
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Categories
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((el, idx) => (
            <tr key={idx}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-left text-gray-900 whitespace-no-wrap">
                  {idx + 1}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-left text-gray-900 whitespace-no-wrap">
                  {el}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
