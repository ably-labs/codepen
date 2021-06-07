import React, { useState } from "react";

import TabContent from "./content";
import MoreContent from "./MoreContent";
import Screenshot from "./screenshot";

function tabItems(items, index = 0) {
  const current = index || 0;
  return items.map((item, i) => {
    const { id, name } = item;
    const classname = ["thing", i === current ? "selected" : ""].join(" ");
    return (
      <li key={i + "" + id} className={classname.trim()}>
        <a href={"#" + id} data-id={id}>
          {name}
        </a>
      </li>
    );
  });
}

function findTabIndex(e, collection) {
  const { target } = e;
  const id = target.getAttribute("data-id");
  return collection.findIndex((row) => row.id === id);
}

export default function CodeExplorer({ collection }) {
  const [tabIndex, setTabIndex] = useState(0);

  const { data, id, heading, current, screenshot, text, github } =
    collection[tabIndex];

  const updateIndustry = (index, current = [0, 0]) =>
    (collection[index] = { ...collection[index], current });

  const changeParentTab = (e) => setTabIndex(findTabIndex(e, collection));
  const changeInnerTab = (indexes) => updateIndustry(tabIndex, indexes);

  const tabs = tabItems(collection, tabIndex);
  const lastTab = tabIndex === collection.length - 1;
  const innerContent = lastTab ? (
    <MoreContent heading={heading} data={data} />
  ) : (
    <TabContent
      id={id}
      state={current}
      setState={changeInnerTab}
      data={data}
      github={github}
      text={text}
    />
  );

  return (
    <>
      <div className="code-explorer">
        <div className="tabs-inline">
          <ul onClick={changeParentTab}>{tabs}</ul>
        </div>
        {innerContent}
      </div>
      <Screenshot src={screenshot} />
    </>
  );
}
