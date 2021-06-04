import React, { useEffect } from "react";
import overflow from "./resizer";

function listItems(props) {
  const { collection, current, handleClick } = props;
  const items = collection.map((row) => {
    const { lang, name } = row;
    const selected = lang === current.lang ? "selected" : "";
    return (
      <li key={lang} className={selected}>
        <a href={"#" + lang} data-id={lang} onClick={handleClick}>
          {name}
        </a>
      </li>
    );
  });
  return items;
}

export default function LanguageNavigation(props) {
  const { id } = props;
  const items = listItems(props);

  useEffect(() => {
      console.log(221, id);
    const selector = `[data-id=${id}] .language-navigation`;
    const container = document.querySelector(selector);
    const resize = new ResizeObserver((entries) => {
      for (let el of entries) {
          console.log(overflow(el));
      }
    });
    resize.observe(container);
  }, [id]);

  return (
    <div className="language-tab-container" data-id={id}>
      <ul className="language-navigation">{items}</ul>
      <div className="navigation-overflow"></div>
    </div>
  );
}
