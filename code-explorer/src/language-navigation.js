import React from "react";

export default function LanguageNavigation(props) {
  const { id, collection, current, handleClick } = props;
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

  return (
    <div className="language-tab-container" data-id={id}>
      <ul className="language-navigation">{items}</ul>
      <div className="navigation-overflow"></div>
    </div>
  );
}
