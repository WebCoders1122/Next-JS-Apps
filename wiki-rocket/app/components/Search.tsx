"use client";
import { useState } from "react";
//import from 'next/navigation' instead of 'next/router'
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  //this is used in place of react router
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("submitted");
    e.preventDefault();
    //to insert new dynamic route
    router.push(`/${search}/`);
    setSearch("");
  };
  return (
    <form
      className='w-[350px]'
      onSubmit={handleSubmit}>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'></div>
        <input
          type='search'
          id='default-search'
          className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
          placeholder='Search here'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          required
        />
        <button
          type='submit'
          className='text-white absolute end-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg px-3 py-1.5 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800'>
          🚀
        </button>
      </div>
    </form>
  );
};
export default Search;
