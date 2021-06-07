import React, { useState, useEffect } from "react";

function animate() {
  const classNames = ["next", "previous"];
  document.querySelectorAll(".screenshot").forEach((e, i) => {
    e.classList.add(classNames[i]);
  });
}

export default function Screenshot({ src }) {
  const [state, setState] = useState();
  const now = performance.now();

  useEffect(() => {
    const current = state ? state[0] : null;
    setState([src, current]);
    setTimeout(animate, 30);
  }, [src]);

  if (!state) return null;

  const [next, prev = null] = state;

  const nextImage = (
    <div key={now + 1} className="screenshot">
      <img src={next} alt="" />
    </div>
  );

  const prevImage = (
    <div key={now + 2} className="screenshot">
      <img src={prev} alt="" />
    </div>
  );

  return (
    <div className="screenshots">
      {nextImage}
      {prevImage}
    </div>
  );
}
