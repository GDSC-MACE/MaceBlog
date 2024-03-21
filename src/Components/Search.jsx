import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { words } from '../constants/con';

const Searchbar = () => {
  const [activeSearch, setActiveSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredWords = words.filter((w) => w.toLowerCase().includes(term.toLowerCase())).slice(0, 8);
    setActiveSearch(filteredWords);
  };

  const handleWordClick = (word) => {
    setSearchTerm(word);
    setActiveSearch([]);
  };

  return (
    <form className='w-[500px] relative'>
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here"
          className="w-full p-4 rounded-full bg-slate-800 text-white"
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute top-full z-50 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {activeSearch.map((s) => (
            <span
              key={s}
              className="cursor-pointer"
              onClick={() => handleWordClick(s)}
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbar;
