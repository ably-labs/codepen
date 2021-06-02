const name = "More";
const id = "more";
const screenshot = "images/screenshot-01.png";
const current = [0, 0];

const industries = [
  {
    href: "/solutions/edtech",
    heading: "EdTech",
    description:
      "Deliver interactive learning experiences like multi-user classNamerooms with chat.",
  },
  {
    href: "/solutions/automotive-logistics-and-mobility",
    heading: "Automotive, Logistics, & Mobility",
    description:
      "Power asset tracking, live transit updates, race-critical diagnostics, and more.",
  },
  {
    href: "/solutions/b2b-platforms",
    heading: "B2B Platforms",
    description:
      "Empower customers with realtime technology that gives them a competitive edge.",
  },
  {
    href: "/solutions/healthcare",
    heading: "Healthcare",
    description:
      "Provide HIPAA-compliant realtime apps healthcare professionals can depend on.",
  },
  {
    href: "/solutions/iot-and-connected-devices",
    heading: "IoT & Connected Devices",
    description:
      "Monitor and control global IoT deployments of any kind in realtime.",
  },
  {
    href: "/solutions/sports-and-media",
    heading: "Sports & Media",
    description:
      "Deliver global realtime experiences to keep fans informed, engaged, entertained.",
  },
  {
    href: "/solutions/gaming",
    heading: "Gaming",
    description:
      "Power interactive gaming experiences that are wicked fast and utterly reliable.",
  },
  {
    href: "/solutions/ecommerce-and-retail",
    heading: "eCommerce & Retail",
    description:
      "Enable realtime pricing, inventory, and transactions to enrich user experiences.",
  },
];

function More() {
  return (
    <div className="use-cases">
      <h3>BY INDUSTRY USE CASE</h3>
      <ul>
        {industries.map((row, index) => {
          const { heading, description, href } = row;
          return (
            <li key={index}>
              <a href={href} className="ui-meganav-media group">
                <p className="ui-meganav-media-heading">{heading}</p>
                <p className="ui-meganav-media-copy">{description}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const component = { screenshot, More, name, id, current };
export default component;
