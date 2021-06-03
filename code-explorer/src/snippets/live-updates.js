const id = "liveupdates";
const name = "Live Updates";
const screenshot = "images/live-updates.svg";
const github = null;
const current = [0, 0];

const publish = [
  {
    lang: "javascript",
    name: "JavaScript",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "android",
    name: "Android",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "obj-c",
    name: "Obj-C",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "swift",
    name: "Swift",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "net",
    name: ".NET",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "ruby",
    name: "Ruby",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "go",
    name: "Go",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "python",
    name: "Python",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "php",
    name: "Laravel",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
];

const subscribe = [
  {
    lang: "javascript",
    name: "JavaScript",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "android",
    name: "Android",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "java",
    name: "Java",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "obj-c",
    name: "Obj-C",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "swift",
    name: "Swift",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "net",
    name: ".NET",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
  {
    lang: "flutter",
    name: "Flutter",
    code: "var ably = new Ably.Realtime('{{API_KEY}}');\nvar channel = ably.channels.get('{{CHANNEL_NAME}}');\n\n// Publish a message to the {{CHANNEL_NAME}} channel\nchannel.publish('greeting', 'hello');",
  },
];

const component = {
  id,
  name,
  github,
  current,
  screenshot,
  data: { publish, subscribe },
};
export default component;
