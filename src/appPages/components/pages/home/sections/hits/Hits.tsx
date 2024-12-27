import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import scss from "./Hits.module.scss";
import test from "@/shared/images/DnI9rquWsAAgfKx-min.png";

const Hits = () => {
  const [data, setData] = useState([
    {
      image: test,
      name: "alim",
      age: "19",
    },
    {
      image: test,
      name: "asim",
      age: "19",
    },
    {
      image: test,
      name: "marlen",
      age: "17",
    },
    {
      image: test,
      name: "salamalik",
      age: "17",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const loadMore = () => {
    setData((prevData) => [...prevData, ...prevData]);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        loadMore();
      }
    }
  };

  const next = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  const prev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div id={scss.Scroll}>
      <div className="container">
        <div className={scss.scroll}>
          <div className={scss.text}>
            <h1>Хиты продаж</h1>
            <div className={scss.buttons}>
              <button onClick={prev}>prev</button>
              <button onClick={next}>next</button>
            </div>
          </div>
          <div className={scss.slider}>
            <div className={scss.block} ref={scrollRef}>
              {data.map((el, index) => (
                <div key={index} className={scss.box}>
                  <Image src={el.image} alt="" />
                  <h1>{el.name}</h1>
                  <p>{el.age}</p>
                </div>
              ))}
            </div>
            <Image src={test} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hits;
