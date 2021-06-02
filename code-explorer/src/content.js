import React, { useState, useEffect } from "react";
import ContentSection from "./content-section";

export default function Content({ state, setState, data }) {
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
    </div>
  );
}
