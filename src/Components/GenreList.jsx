// GenreList.jsx
import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

// eslint-disable-next-line react/prop-types
export default function GenreList({ setGenresId }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList()
      .then((resp) => {
        console.log(resp.data.results);
        setGenreList(resp.data.results);
      })
      .catch((error) => console.error("Failed to fetch genre list:", error));
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item, index) => (
        <div
          key={index} // Always provide a key when mapping over an array to render a list
          onClick={() => {
            setActiveIndex(index);
            // eslint-disable-next-line no-undef
            setGenresId(index.id);
          }}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group
          rounded-lg hover:dark:bg-gray-600 ${
            activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : ""
          }`}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
              activeIndex === index ? "scale-105" : ""
            }`}
          />
          <h3
            className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
              activeIndex === index ? "font-bold" : ""
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
