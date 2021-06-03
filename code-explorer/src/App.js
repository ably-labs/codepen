import React, { useState, useEffect } from "react";

import "./App.css";
import shuffle from "./alphabet";

import Content from "./content";
import MoreContent from "./More";

import liveUpdates from "./snippets/live-updates";
import iot from "./snippets/iot";
import multiUser from "./snippets/multi-user";
import chat from "./snippets/chat";
import gps from "./snippets/gps";

const industries = [
  { ...liveUpdates },
  { ...gps },
  { ...multiUser },
  { ...chat },
  { ...iot },
  { ...MoreContent },
];

async function initialize(collection) {
  const demoURL = "https://ably.com/ably-auth/api-key/demos";
  const API_KEY = await fetch(demoURL).then((r) => r.text());
  const CHANNEL_NAME = shuffle(2).join("-");

  // update the code with a Demo key and channel anme
  return collection.map((row) => parseData(row, { API_KEY, CHANNEL_NAME }));
}

function parseData(row, tokens) {
  // replace all mustache variables in the respective code snippets
  let { publish, subscribe } = row.data || {};
  if (!publish || !subscribe) return row;

  publish = publish.map((lang) => replaceTokens(lang, tokens));
  subscribe = subscribe.map((lang) => replaceTokens(lang, tokens));

  return { ...row, data: { publish, subscribe } };
}

function replaceTokens(lang, tokens) {
  if (!lang.code) return lang;

  const token = /{{([A-Z_]+)}}/g;
  const code = lang.code.replace(token, (_, key) => tokens[key]);

  return { ...lang, code };
}

/* test */
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

function findTabIndex(e, collection) {
  const { target } = e;
  const id = target.getAttribute("data-id");
  return collection.findIndex((row) => row.id === id);
}

function CodeExplorer({ collection }) {
  const [tabIndex, setTabIndex] = useState(0);

  const { data, id, More, current, screenshot } = collection[tabIndex];
  const updateIndustry = (index, current) =>
    (collection[index] = { ...collection[index], current });

  const changeParentTab = (e) => setTabIndex(findTabIndex(e, collection));
  const changeInnerTab = (indexes) => updateIndustry(tabIndex, indexes);

  const tabs = tabItems(collection, tabIndex);
  const lastTab = tabIndex === collection.length - 1;
  const innerContent = lastTab ? (
    <More />
  ) : (
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
  const [collection, setCollection] = useState();
  useEffect(
    () =>
      (async () => {
        const data = await initialize(industries);
        setCollection(data);
      })(),
    []
  );

  if (!collection) return null;

  return (
    <div>
      <PageHeading />
      <CodeExplorer collection={collection} />
    </div>
  );
}

/**/
