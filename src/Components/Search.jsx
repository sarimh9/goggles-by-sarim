import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";
import Links from "./Links";

export default function Search() {
  const [text, setText] = useState("Aligarh Muslim University");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 750);
  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-36 md:ml-56 sm:-mt-2">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-auto h-10 dark:bg-gray-200 border rounded-full
            shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Look through Goggles"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-xl text-gray-500 mt-1"
          onClick={() => setText("")}
        >
          ❌
        </button>
      )}
      <Links />
    </div>
  );
}
