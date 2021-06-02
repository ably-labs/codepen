import React from "react";

export default function LanguageNavigation({ collection, current, handleClick }) {
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
  return <ul className="Language-navigation">{items}</ul>;
}
