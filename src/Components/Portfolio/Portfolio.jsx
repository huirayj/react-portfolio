import { useEffect, useState } from "react";
import List from "./List/List";
import "./portfolio.scss";
import {
  javascript,
  styling,
  database,
  server,
  cli
} from "../../data";

export const Portfolio = () => {
  const [selected, setSelected] = useState("javascript");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "javascript",
      title: "Javascript",
    },
    {
      id: "styling",
      title: "HTML/CSS",
    },
    {
      id: "database",
      title: "Database",
    },
    {
      id: "server",
      title: "Server",
    },
    {
      id: "cli",
      title: "CLI",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "javascript":
        setData(javascript);
        break;
      case "styling":
        setData(styling);
        break;
      case "database":
        setData(database);
        break;
      case "server":
        setData(server);
        break;
      case "cli":
        setData(cli);
        break;
      default:
        setData(javascript);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="listContainer">
        <ul>
          {list.map((item) => (
            <List
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              key={item.id}
            />
          ))}
        </ul>
      </div>
      <div className="container">
        {data.map((d) => (
          <a href={d.deployed} target="_blank" rel="noopener noreferrer">
            <div className="item" key={d.id}>
              <img
                src={d.img}
                alt={d.alt}
              />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;