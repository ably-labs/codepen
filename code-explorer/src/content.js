import React, { useState, useEffect } from "react";
import ContentSection from "./content-section";

function ExternalLink({ href, text }) {
  if (!href || !text) return null;

  return (
    <div className="tab-external-link">
      <a
        className="font-medium bg-white text-cool-black py-8 px-16 rounded-lg no-underline block"
        href={href || "#"}
      >
        {text}
      </a>
    </div>
  );
}

export default function Content({ state, setState, data, github, text }) {
  const { publish, subscribe } = data;
  const [indexes, setIndexes] = useState([0, 0]);
  const [pubTabIndex, subTabIndex] = indexes;

  useEffect(() => setIndexes(state), [state]);

  const updateIndexValue = (index) => (value) => {
    indexes[index] = value;
    const next = [...indexes];

    setIndexes(next);
    setState(next);
  };

  return (
    <div className="tab-content">
      <ContentSection
        title="publish"
        setState={updateIndexValue(0)}
        languages={publish}
        index={pubTabIndex}
      />
      <ContentSection
        title="subscribe"
        setState={updateIndexValue(1)}
        languages={subscribe}
        index={subTabIndex}
      />
      <ExternalLink href={github} text={text} />
    </div>
  );
}
