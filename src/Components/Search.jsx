import * as React from "react";

function Search() {
  const [searchText, setSearchText] = React.useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFilterClick = () => {
    // Add your filter logic here
    alert("Filter icon clicked!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 text-2xl max-w-[436px] text-white text-opacity-50">
      <div className="flex flex-auto gap-5 items-start px-5 pt-3 pb-1.5 border-2 border-orange-500 border-solid rounded-[46px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0963866a9a110a604590da4b14f7d70d21dee7a0a705c6aec073640dc4fcdd4c?apiKey=5b229308564b44ab834ca717bcf9317c&"
          alt="Decorative icon"
          className="shrink-0 self-start aspect-square w-[60px]"
        />
        <input
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder="Search bloggers..."
          className="flex-auto my-auto bg-transparent border-none outline-none text-white text-opacity-75"
        />
      </div>
      <button
        onClick={handleFilterClick}
        className="shrink-0 my-auto aspect-square w-[60px] focus:outline-none"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1edc13b4e2b4e243f371cacb3d8b840508514ca652d81bf3d3571f7193b900?apiKey=5b229308564b44ab834ca717bcf9317c&"
          alt="Filter icon"
        />
      </button>
    </div>
  );
}

export default Search;  