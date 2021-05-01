/*
  Ably Realtime
  https://ably.com/

  https://codepen.io/ablyrealtime/pen/LYZmJpQ
*/

let svg;
let timer;
let uuid;
let clamp;
let ably;
let channel;
let meta;

const NAME = "codepen-coord";
const CHANNEL = "cyberspace";

// Publish a message to the avtive channel
window.addEventListener("message", handleMessage);
window.addEventListener("resize", initialize);
window.addEventListener("click", handleEvent("render"));

initialize(DEMO_API_KEY_ENDPOINT);

async function handleMessage(event) {
  let { cmd, x, y, id, t, n = 0, shiftKey, metrics } = event.data || {
    cmd: "none",
  };
  const { current, statusCode, message, name } = event || {};
  const self = id === uuid;
  const m = n ? n : random(5, 2) >> 0;
  let attr, msg;

  let action = statusCode ? "status" : cmd;
  if (shiftKey) action = "noise";
  if (name === "[meta]occupancy") action = "occupancy";

  switch (action) {
    case "noise":
      // generate some background noise (shift+click)
      // (these are NOT sockets but will appear to active users)
      // window.postMessage({cmd: "noise", n: 5})

      console.log("Generate noise", n, m);
      [...Array(m)].forEach((_, i) => {
        // bypass stack event limit
        setTimeout(() => {
          const char = String.fromCharCode(65 + (i % 26));
          const id = getUUID(char + i);
          msg = { cmd: "render", id };
          console.log("Emit shape", i, m, msg);
          channel.publish(NAME, msg);
        }, i * 200);
      });
      break;

    case "render":
      const b = self ? 14 : 3;
      const color = self ? null : "00000044";
      attr = attributes({ xx: x, yy: y, id, t, b, color });

      showShape(attr);
      if (!self) dialog("render " + shapeTypeName(t), self);
      refresh();
      break;

    case "occupancy":
      dialog("Connections: " + metrics.connections);
      break;

    case "status":
    default:
      console.warn("switch default", name, event, message);
      dialog("channel " + (message || current || ""));
      break;
  }
}

function shapeTypeName(n = null) {
  if (typeof n !== "number") return;
  const shapes = ["circle", "square", "triangle"];
  return shapes[n % shapes.length];
}

let diag;
function dialog(html, local = true, ms = 2000) {
  const d = document.querySelector("dialog");
  d.setAttribute("open", true);
  d.className = local ? "local" : "remote";
  d.innerHTML = html;
  if (diag) clearTimeout(diag);
  diag = setTimeout(() => {
    d.removeAttribute("open");
  }, ms);
}

function handleEvent(key = "unknown") {
  return function (e) {
    const { xx, yy } = normalizeCoords(e);
    const { shiftKey = false } = e;
    const t = random(3) >> 0;
    const msg = { x: xx, y: yy, cmd: key, t, id: uuid, shiftKey };
    broadcast(msg);
  };
}

async function broadcast(msg, ms = 50) {
  if (!ably) {
    console.error("No realtime channel");
    return;
  }
  if (clamp) clearTimeout(clamp);
  clamp = setTimeout(() => channel.publish(NAME, msg), ms);
}

function refresh() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(randomRender, 10000);
}

function setupRealtime(key) {
  if (!key) return;
  ably = new Ably.Realtime(key);
  const options = { params: { rewind: "15", occupancy: "metrics" } };
  channel = ably.channels.get(CHANNEL, options);
  channel.subscribe(stack(handleMessage));
  channel.on(handleMessage);
}

function stack(callback) {
  let timer = null;
  let events = {};
  let count = 0; // eslint-disable-line

  return function (e) {
    if (timer) clearTimeout(timer);
    events[e.connectionId] = { ...e };
    count += 1;

    timer = setTimeout(() => {
      Object.entries(events).forEach(([_, v]) => callback(v));
      timer = null;
      events = {};
      count = 0;
    }, 150);
  };
}

function cache(key, value, ns = CHANNEL) {
  // usage:
  // cache(); // returns all localStorage data
  // cache("key"); // returns only the persisted value for "key"
  // cache("key", {value: 123}); // updates localStorage

  // Catch errors caused by incognito restriction
  try {
    localStorage[ns];
  } catch (e) {
    console.warn("Can't read localStorage.");
    return value;
  }

  const string = localStorage[ns] || "";
  let json = string ? JSON.parse(string) : {};

  if (key === undefined) return json;
  if (value === undefined && json[key]) return json[key];

  json = { ...json, ...{ [key]: value } };
  localStorage[ns] = JSON.stringify(json);

  return json[key];
}

function fetchDemoApiKey(url) {
  // attempt to use a cached API key.
  // Remmember the endpoint has usage restrictions
  // and Ably public key expires unexpectantly (~2ish hours)

  const { apikey = null, ttl = 0 } = cache("lastFetch") || {};
  const now = new Date().valueOf();
  const millisecs = 2 * 60 * 60 * 1000; // 2 hours as msec
  const expiredCache = now - ttl;
  const timeToLive = now + millisecs;

  if (expiredCache > 0) {
    return fetch(url)
      .then((r) => r.json())
      .then(({ key }) => cache("lastFetch", { apikey: key, ttl: timeToLive }))
      .then(({ apikey }) => setupRealtime(apikey))
      .catch((e) => {
        console.warn("Error happened try again later", e);
      });
  }

  const css = "padding:3px 6px;background:black;color:white;font-weight:900;";
  console.log(
    "%cUsing cache",
    css,
    apikey,
    ttl,
    (expiredCache / 60000) >> 0,
    "minutes"
  );
  return setupRealtime(apikey);
}

function initialize(url = null) {
  if (url && !ably) {
    fetchDemoApiKey(url);
  }

  uuid = uuid || getUUID();
  const { innerWidth, innerHeight } = window;

  svg = svg || createSvgElement("svg");
  svg.setAttribute("id", uuid);
  svg.setAttributeNS(null, "width", "100%");
  svg.setAttributeNS(null, "height", "100%");
  svg.setAttributeNS(null, "viewBox", `0 0 ${innerWidth} ${innerHeight}`);

  document.body.appendChild(svg);

  randomRender();
}

function attributes(props) {
  const { xx, yy, z, d, n, t, id, b, fwd, color } = props;
  const cx = xx || random(1);
  const cy = yy || random(1);
  let size = z || random(60, 20);
  const deg = d || random(360) >> 0;
  const count = n || random(8, 5) >> 0;
  const type = typeof t === "number" ? t : (random(3) >> 0) % 3;
  const hex = id === uuid ? "FF5416" : color || "222222";
  const border = b || 8;

  // rotation (clockwise or anticlockwise)
  const forward = typeof fwd === "number" ? fwd : Math.random() * 10;
  const cw = (Number(forward) >> 0) % 2;

  // circle size needs to be halved
  size = type === 0 ? size / 2 : size;

  return { cx, cy, size, deg, count, type, hex, border, id, cw };
}

function randomRender(e = null) {
  const { clientX, clientY } = e || {};
  const { xx, yy } = normalizeCoords({ clientX, clientY });
  const props = attributes({ xx, yy, id: uuid });
  window.postMessage({ ...props, cmd: "render" });
}

function normalizeCoords({ clientX, clientY }) {
  // returns the X:Y coordinates as percentage of window position (float)
  if (!clientX || !clientY) return {};

  const { width, height } = svg.getBoundingClientRect();
  const xx = clientX / width;
  const yy = clientY / height;

  return { xx, yy };
}

function createSvgElement(elementName) {
  const ns = "http://www.w3.org/2000/svg";
  return document.createElementNS(ns, elementName);
}

function showShape(attr, solid) {
  const { cx, cy, size, count, type, hex, border, id, cw } = attr;

  const g = createGroup(cx, cy, type, cw, id);

  const generators = [makeCircle, makeRect, makeTriangle];
  const makeShape = generators[type];
  const power = [1.8, 2.8, 3.2][type];

  [...Array(count)]
    .map((_, i) => {
      const n = gradient(size, i, power);
      const absX = cx * window.innerWidth;
      const absY = cy * window.innerHeight;
      const obj = makeShape(absX, absY, n);
      return stroke(obj, hex, border, solid);
    })
    .forEach((el, i) => injectShape(el, g, 90 * i));

  drawGroup(g, id === uuid);
}

function drawGroup(g, focus) {
  // the svg group arrangment:
  // active (window has focus) append (foreground) or
  // passive (channel msg) prepend (background)

  // SVG does not support prependChild() method
  return focus //
    ? svg.appendChild(g)
    : svg.insertBefore(g, svg.firstElementChild);
}

function gradient(size = 1, i = 0, power = 2.5) {
  // exponential curve gradient to space radial lines
  return size * (i + 1) ** power;
}

function stroke(obj, hex = "FFFFFF", border = 3, solid = false) {
  const fill = solid ? `#${hex}` : `none`;
  obj.setAttributeNS(null, "stroke", `#${hex}`);
  obj.setAttributeNS(null, "stroke-width", border);
  obj.setAttributeNS(null, "fill", fill);
  return obj;
}

function createGroup(cx, cy, type, cw = true, id, duration = 25000) {
  const g = createSvgElement("g");

  const x = cx * window.innerWidth;
  const y = cy * window.innerHeight;

  const direction = 360 * (cw > 0.5 ? 1 : -1);
  const offset = [1.2, 1.01, 1.05][type];
  const offsetX = (x * offset) >> 0;

  const frames = [{ transform: `rotate(${direction}deg)` }];
  const iterations = Infinity;

  // cleanup previous groups
  Array.from(svg.querySelectorAll(`.${id}`)).forEach((el) => el.remove());

  // center and rotate shape group (offcenter)
  g.style.transformOrigin = `${offsetX}px ${y}px`;
  g.animate(frames, { duration, iterations });

  g.classList.add(id);
  return g;
}

function injectShape(el, group, ms = 150) {
  setTimeout(() => group.appendChild(el), ms);
}

function makeRect(x, y, size) {
  var rect = createSvgElement("rect");
  rect.setAttributeNS(null, "x", x - size / 2);
  rect.setAttributeNS(null, "y", y - size / 2);
  rect.setAttributeNS(null, "height", size);
  rect.setAttributeNS(null, "width", size);
  return rect;
}

function makeCircle(x, y, size) {
  var circle = createSvgElement("circle");
  circle.setAttributeNS(null, "cx", x);
  circle.setAttributeNS(null, "cy", y);
  circle.setAttributeNS(null, "r", size);
  return circle;
}

function makeTriangle(x, y, size) {
  const { PI, cos, tan } = Math;
  const half = size / 2;
  const hypotenuse = y - half * (1 / cos((30 * PI) / 180));
  const opposite = y + half * (1 / tan((60 * PI) / 180));
  const points = [
    [x - half, opposite].join(","), // left
    [x + half, opposite].join(","), // right
    [x, hypotenuse].join(","), // top
  ].join(" ");

  const poly = createSvgElement("polygon");
  poly.setAttribute("points", points);
  return poly;
}

function random(n, min = 0) {
  return Math.random() * n + min;
}

function getUUID(prefix = "x") {
  return [
    prefix,
    Number((new Date().valueOf() / 10000) >> 0).toString(36),
    Number(100 + ((Math.random() * 100) >> 0)).toString(36),
  ].join("");
}
