import React from 'react';

export const SearchBox = ({ placeholder, handleChange }) => ( 
    <input                                                    // getting placeholder as an argument 
        type="search"                                         // so it can be reusable
        placeholder={ placeholder } 
        class="w-1/2 my-10 bg-gray-800  rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-gray-900 text-base outline-none text-gray-100 placeholder-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        onChange={handleChange}
    />
)
