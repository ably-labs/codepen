
import liveUpdates from "./live-updates";
import iot from "./iot";
import multiUser from "./multi-user";
import chat from "./chat";
import gps from "./gps";

export default [
  { ...liveUpdates },
  { ...gps },
  { ...multiUser },
  { ...chat },
  { ...iot },
];
