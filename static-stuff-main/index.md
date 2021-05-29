---
layout: main.liquid
title: Codepen
templateUrl: 067347aeffe2bd47722a26c5f42b2bdc
---

# {{title}}

The three principle ways to present code snippets using the CodePen service. This page is an interactive demonstration to support that discovery documentation. It is not an exhaustive list of all permutations but rather a highlight of select combinations of features.

> **IMPORTANT** at the time of writing this demo, the CodePen PRO features are not active (these are pending purchase order), so the output panels are read only. With an active PRO account the user would be able to interact with the code and see live changes an updates.

# **Embed a hosted pen (a static asset, similar to what JSBin does)**

The Pen is [created and hosted](https://codepen.io/ablyrealtime/pen/{{templateUrl}}?editors=0010) on the CodePen platform, and referenced by website. Notice the nested SPAN tag, this is a fall-back in the event JavaScript is unavailable, and potentially another SEO opportunity.

### source

```html
<p
  class="codepen"
  data-height="265"
  data-theme-id="light"
  data-default-tab="result"
  data-user="ablyrealtime"
  data-slug-hash="{{templateUrl}}"
  style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
  data-pen-title="Primatives"
>
  <span>
    See the Pen
    <a href="https://codepen.io/ablyrealtime/pen/{{templateUrl}}"> Primatives</a> by
    Bruce Thomas (<a href="https://codepen.io/ablyrealtime">@ablyrealtime</a>)
    on <a href="https://codepen.io">CodePen</a>.</span
  >
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
```

### output

<p
  class="codepen"
  data-height="365"
  data-theme-id="light"
  data-default-tab="js,result"
  data-user="ablyrealtime"
  data-slug-hash="LYZBMKm"
  style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
  data-pen-title="Primatives"
>
  <span>
    See the Pen
    <a href="https://codepen.io/ablyrealtime/pen/{{templateUrl}}"> Primatives</a> by
    Bruce Thomas (<a href="https://codepen.io/ablyrealtime">@ablyrealtime</a>)
    on <a href="https://codepen.io">CodePen</a>.</span
  >
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# **Runtime prefilled emdeds**

To enhance code that you are already displaying on your own website and transform it into an interactive environment, this method allows the localhost to inject dynamically calculated values at runtime. In this output we have excluded the dual panel editor to concentrate the users attention specifically on the result of our code.

Notice that `source` is very long, and there are `PRE` blocks for `CSS`, `HTML` and `JS`, or to be specifically correct `SASS` and `ES6 (via Babel)`. These are a very handy feature when writing examples that require pre-processors. The output in the pane can be toggled to show the source or the processed output, for example the `CSS` generated by `SCSS`.

### source

```html
<div
  class="codepen"
  data-height="265"
  data-theme-id="light"
  data-default-tab="result"
  data-user="ablyrealtime"
  data-slug-hash="LYZBMKm"
  data-prefill='{"title":"Primatives","tags":[],"scripts":[],"stylesheets":[]}'
>
  <pre data-lang="html">
&lt;svg width="489" height="150" viewBox="0 0 489 150" fill="none" xmlns="http://www.w3.org/2000/svg">
&lt;path d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z" fill="#FF0000" />
&lt;path d="M157.894 0H307.894V150H157.894V0Z" fill="#00FF00" />
&lt;path d="M402.382 0L488.977 150H315.787L402.382 0Z" fill="#0000FF" />
&lt;/svg></pre
  >
  <pre data-lang="scss">
html {
height: 100%;
}
body {
display: flex;
height: 100%;
width: 100%;
}
svg {
width: 50%;
height: auto;
margin: auto;
}
</pre
  >
  <pre data-lang="babel">
const svg = document.querySelector("svg");
const { body } = document;
window.onmousedown = (e) => {
const fill = e.target.getAttribute("fill") || "";
const hex = fill.replace(/(^$|none)/, "white");
body.style.backgroundColor = `${hex}`;
};
</pre
  >
</div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
```

### output

<div class="codepen" data-height="465" data-theme-id="light" data-default-tab="result" data-user="ablyrealtime" data-slug-hash="LYZBMKm" data-prefill='{"title":"Primatives","tags":[],"scripts":[],"stylesheets":[]}'>
<pre data-lang="html">
&lt;svg width="489" height="150" viewBox="0 0 489 150" fill="none" xmlns="http://www.w3.org/2000/svg">
&lt;path d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z" fill="#FF0000" />
&lt;path d="M157.894 0H307.894V150H157.894V0Z" fill="#00FF00" />
&lt;path d="M402.382 0L488.977 150H315.787L402.382 0Z" fill="#0000FF" />
&lt;/svg></pre>
<pre data-lang="scss">html {
height: 100%;
}
body {
display: flex;
height: 100%;
width: 100%;
}
svg {
width: 50%;
height: auto;
margin: auto;
}
</pre>
<pre data-lang="babel">const svg = document.querySelector("svg");
const { body } = document;
window.onmousedown = (e) => {
const fill = e.target.getAttribute("fill") || "";
const hex = fill.replace(/(^$|none)/, "white");
body.style.backgroundColor = `${hex}`;
};
</pre></div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# **POST to prefill an editor**

You can start a new Pen with code and settings that you send across programatically, please notice the **css_external** and **js_external** values, these are referring to a parent resource.
What this allows us to do is define additional CSS and JS includes, which will render in addition to the payload.

An template has been created to apply some corporate styling, insert an Ably logo, and inject a JavaScript module that uses the console.log to output the Ably ASCII banner.
None of this is carried by the payload.

The template CSS and JS is absent from the IDE view port on the hosted CodePen, which keeps the interactive area unpolluted with corporate fixtures.

<div class="template-url"></div>


### source

```html
<form action="https://codepen.io/pen/define" method="POST" target="_blank">
  <input
    type="hidden"
    name="data"
    value='{
        "title": "New Pen!",
        "html": "<div>Hello, World!</div>",
        "css_external": "{{templateUrl}}",
        "js_external": "{{templateUrl}}"
    }'
  />
  <input type="submit" />
</form>
```

<form action="https://codepen.io/pen/define" method="POST" target="_blank" id="payloader">
  <input
    type="hidden"
    name="data"
    value='{"title": "New Pen!", "html": "<div>Hello, World!</div>", "css_external": "https://codepen.io/ablyrealtime/pen/{{templateUrl}}", "js_external": "https://codepen.io/ablyrealtime/pen/{{templateUrl}}"}'
  />
  <input type="submit" />
</form>
