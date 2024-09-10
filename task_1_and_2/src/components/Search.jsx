import { useRef, useState } from "react";
import { items } from "../assets";

const Search = () => {
  const ref = useRef(null);
  const [filteredItems, setFilteredItems] = useState([]);

  function handleSearch(e) {
    e.preventDefault();

    if (ref.current) {
      const searchValue = ref.current.value.toLowerCase();
      const results = items.filter(
        (i) =>
          i.id.toString().includes(searchValue) ||
          i.title.toLowerCase().includes(searchValue)
      );
      console.log(results);
      setFilteredItems(results);
    }
  }

  return (
    <section className="w-full flex flex-col items-center justify-center mt-10 mb-10 text-blue-100">
      <h1 className="text-4xl mb-10 ">Task 1 : Search Item</h1>
      <div className="flex w-full">
        <div className="flex-1 w-full">
          <form
            className="flex flex-col gap-5 justify-center items-center"
            onSubmit={handleSearch}
          >
            <div className="">
              <input
                type="search"
                ref={ref}
                name="search"
                placeholder="Enter id or title to search"
                className="border px-4 py-2 rounded-xl"
              />
            </div>
            <input
              type="submit"
              className="bg-green-400 rounded-2xl text-lg text-center w-fit text-white cursor-pointer px-4 py-2"
              value="Search"
            />
          </form>
          <div className="">
            {filteredItems.length > 0 ? (
              filteredItems.map(({ id, title }) => (
                <div
                  className="flex flex-col text-lg text-center font-bold mt-12"
                  key={id}
                >
                  <span>Id: {id}</span>
                  <span>Title: {title}</span>
                </div>
              ))
            ) : (
              <div className="text-center text-lg mt-12 text-gray-500">
                No items found.
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 w-full ">
          <h2 className="text-2xl my-5">Item List:</h2>

          <table className="">
            <tbody>
              <tr>
                <th>Id</th>
                <th>Title</th>
              </tr>
              {items.map(({ id, title }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white w-full h-[2px] my-10 " />
    </section>
  );
};

export default Search;
