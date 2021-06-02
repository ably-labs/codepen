import React, { useState } from "react";
import "./App.css";
import Content from "./content";
import liveUpdates from "./live-updates";
import MoreContent from "./More";

const industries = [
  { ...liveUpdates },
  { ...liveUpdates, id: "gps", name: "GPS", current: [0, 0] },
  { ...liveUpdates, id: "multiuser", name: "Multi-user", current: [0, 0] },
  { ...liveUpdates, id: "chat", name: "Chat", current: [0, 0] },
  { ...liveUpdates, id: "iot", name: "IoT", current: [0, 0] },
  { ...MoreContent },
];

function PageHeading() {
  return (
    <div className="App">
      <h1>heading</h1>
      <button>Strart with a free account</button>
      <button>Explore our documentation</button>
    </div>
  );
}

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

function Screenshot({ src }) {
  return (
    <div className="screenshot">
      <img src={src} alt="" />
    </div>
  );
}

function updateIndustry(index, current) {
    industries[index] = {...industries[index], current};
}

function findTabIndex(e) {
  const { target } = e;
  const id = target.getAttribute("data-id");
  return industries.findIndex((row) => row.id === id);
}

function CodeExplorer() {
  const [tabIndex, setTabIndex] = useState(0);
  const { data, id, More, current, screenshot } = industries[tabIndex];

  const tabs = tabItems(industries, tabIndex);
  const lastTab = tabIndex === industries.length - 1;
  const changeInnerTab = (indexes) => updateIndustry(tabIndex, indexes);
  const changeParentTab = (e) => setTabIndex(findTabIndex(e));

  const innerContent = (lastTab && <More />) || (
    <Content id={id} state={current} setState={changeInnerTab} data={data} />
  );

  return (
    <div className="App">
      <div className="code-explorer">
        <div className="tabs-inline">
          <ul onClick={changeParentTab}>{tabs}</ul>
        </div>
        {innerContent}
      </div>
      <Screenshot src={screenshot} />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <PageHeading />
      <CodeExplorer />
    </div>
  );
}
