const DEMO_API_KEY_ENDPOINT = "https://demokey-ow7y8lsypzxi.runkit.sh/";
const ABLY_ORIGIN = "https://ably.com";

function ablyAscii() {
    const ascii = [
          "",
          "  ______  __       ___",
          " /+  _  +/+ +     /+_ +",
          " + + +L+ + + +____+//+ +    __  __",
          "  + +  __ + + '__ + + + +  /+ +/+ +",
          "   + + +/+ + + +L+ + +_+ +_+ + +_+ +",
          "    + +_+ +_+ +_,__/ /+____++/+____ +",
          "     +/_/+/_/+/___/  +/____/ +/___/> +",
          "                                /+___/",
          "                                +/__/",
          "",
          "Seriously dependable realtime infrastructure",
          "",
          "Interested in solving hard distributed and realtime problems, at scale?",
          `We're looking for great people to join us. See ${ABLY_ORIGIN}/careers`,
          `And we're looking for expert freelancers. See ${ABLY_ORIGIN}/experts-network`
        ]
      .join("\n")
      .replace(/\+/g, "\\");
    console.log(ascii);
}

function insertLogo () {
    const body = document.body;
    const footer = document.createElement("footer");
    const a = document.createElement("a");
    const { origin } = window.location;
    const {content} = ablyMetadata();

    const UTM = [
          "utm_source=codepen",
          "utm_medium=ably-link",
          `utm_campaign=${content}`
        ].join("&");

    a.href = `${ABLY_ORIGIN}/?${UTM}`;
    a.innerHTML = "ably.com";
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
    a.onclick = (e) => console.log(e);

    footer.append(a);
    body.append(footer);
}

function ablyMetadata() {
    const meta = document.querySelector("meta[name='ably-pen']");
    const {name = "ably-pen", content = "unknown"} = meta || {};
    return {name, content}
}

ablyAscii();
insertLogo();
