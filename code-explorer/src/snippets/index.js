
import liveUpdates from "./live-updates";
import iot from "./iot";
import multiUser from "./multi-user";
import chat from "./chat";
import gps from "./gps";

const array = [
  { ...liveUpdates, current: [0,0] },
  { ...gps, current: [0,0] },
  { ...multiUser, current: [0,0] },
  { ...chat, current: [0,0] },
  { ...iot, current: [0,0] },
];

export default array;
