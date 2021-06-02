import React from "react";
import LanguageNavigation from "./language-navigation";
import CodeSnippet from "./code-snippet";

export default function ContentSection({ title, languages, setState, index }) {
  const current = languages[index];
  const handleClick = (e) => {
    const { id } = e.target.dataset;
    const i = languages.findIndex(({ lang }) => lang === id);
    setState(i);
  };

  return (
    <section className="content-section">
      <div className="content-navigation">
        <h4 className="content-heading">{title}</h4>
        <LanguageNavigation
          handleClick={handleClick}
          collection={languages}
          current={current}
        />
      </div>
      <CodeSnippet current={current} />
    </section>
  );
}
