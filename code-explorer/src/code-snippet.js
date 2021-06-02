import React from "react";

export default function CodeSnippet({ current }) {
  const { lang, code } = current;
  return (
    <div className="code-content">
      <pre>
        <code lang={lang}>{code}</code>
      </pre>
    </div>
  );
}
