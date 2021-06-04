export default function MoreContent({data, heading}) {
  const { industries } = data;

  return (
    <div className="use-cases bg-white p-32 m-0">
      <h3 className="text-left text-cool-black uppercase text-overline2 font-medium">
        {heading}
      </h3>
      <ul className="m-0 p-0 list-none">
        {industries.map((row, index) => {
          const { heading, description, href } = row;
          return (
            <li key={index} className="block w-full text-left">
              <a
                href={href}
                className="block no-underline text-cool-black mt-8 mb-8"
              >
                <p className="text-menu3 font-medium">{heading}</p>
                <p className="text-p3 text-dark-grey">{description}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
