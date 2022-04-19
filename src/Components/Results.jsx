import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

export default function Results() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation(); // this will give the url

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else if (location.pathname === "/search") {
        getResults(`/search/q=${searchTerm}&num=11`);
      } else if (location.pathname === "/news") {
        getResults(`/news/q=${searchTerm}`);
      } else {
        // getResults(`${location.pathname}/q=${searchTerm}&num=10`);
        // console.log(`${location.pathname}/q=${searchTerm}&num=10`);
        // console.log(`/images/q=${searchTerm}&num=10`);
        // getResults("/image/q=AMU");
        getResults(`/image/q=${searchTerm}&num=10`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  //   console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                href={href}
                className="sm:p-3 p-5"
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img src={image.src} alt={title} loading="lazy" />
                <p className="w-36 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </div>
      );

    case "/news":
      let tempArr = Array.from(results);
      // console.log(tempArr);
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center box-border">
          {/* {results?.map(({ links, id, source, title }, index) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
            </div>
          ))} */}

          {/* {console.log(results)} */}

          {tempArr.map((resultItem, index) => {
            return (
              <div key={index} className="md:w-2/5 w-full">
                <a
                  href={resultItem?.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {resultItem?.title}
                  </p>
                </a>
                <div className="flex gap-4">
                  <a
                    href={resultItem.source?.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {resultItem.source?.href}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      );

    case "/videos":
      return (
        <div className="flex flex-wrap ">
          {results?.results?.map((video, index) => (
            <div className="p-2" key={index}>
              {console.log(video.additional_links?.[0].href)}
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            </div>
          ))}
        </div>
      );

    default:
      return "Error!";
  }
}
