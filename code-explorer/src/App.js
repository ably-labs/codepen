import React, { useState, useEffect } from "react";

import "./App.css";

import shuffle from "./alphabet";
import CodeExplorer from "./code-explorer";

import snippetsData from "./snippets/";
import industryData from "./industy-data";

const contentData = [...snippetsData, industryData];

function replaceTokens(lang, tokens) {
  if (!lang.code) return lang;

  const token = /{{([A-Z_]+)}}/g;
  const code = lang.code.replace(token, (_, key) => tokens[key]);

  return { ...lang, code };
}

function parseData(row, tokens) {
  // replace all mustache variables in the respective code snippets
  let { publish, subscribe } = row.data || {};
  if (!publish || !subscribe) return row;

  publish = publish.map((lang) => replaceTokens(lang, tokens));
  subscribe = subscribe.map((lang) => replaceTokens(lang, tokens));

  return { ...row, data: { publish, subscribe } };
}

async function initialize(collection) {
  const demoURL = "https://ably.com/ably-auth/api-key/demos";
  const API_KEY = await fetch(demoURL).then((r) => r.text());
  const CHANNEL_NAME = shuffle(2).join("-");

  // update the code with a Demo key and channel anme
  return collection.map((row) => parseData(row, { API_KEY, CHANNEL_NAME }));
}

export default function App() {
  const [collection, setCollection] = useState();
  useEffect(
    () =>
      (async () => {
        const data = await initialize(contentData);
        setCollection(data);
      })(),
    []
  );

  if (!collection) return null;

  return (
    <div className="ui-module">
      <CodeExplorer collection={collection} />
    </div>
  );
}
