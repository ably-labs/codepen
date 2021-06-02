const name = "Live Updates";
const id = "liveupdates";
const screenshot = "images/screenshot-01.png";
const current = [0, 0];

const publish = [
  {
    lang: "javascript",
    name: "JavaScript",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "android",
    name: "Android",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "obj-c",
    name: "iOS Obj-C",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "swift",
    name: "iOS Swift",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "net",
    name: ".NET",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "node",
    name: "NodeJS",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "php",
    name: "PHP",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "java",
    name: "Java",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
];

const subscribe = [
  {
    lang: "javascript",
    name: "JavaScript",
    code: "/// var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "android",
    name: "Android",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "obj-c",
    name: "iOS Obj-C",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "swift",
    name: "iOS Swift",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "net",
    name: ".NET",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "node",
    name: "NodeJS",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "php",
    name: "PHP",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "java",
    name: "Java",
    code: "var ably = new Ably.Realtime('[API_KEY]');\nvar channel = ably.channels.get('dad-map');\n\n// Publish a message to the dad-map channel\nchannel.publish('greeting', 'hello');",
  },
];

const component = {
  screenshot,
  name,
  id,
  current,
  data: { publish, subscribe },
};
export default component;
