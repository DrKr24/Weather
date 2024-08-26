interface backgroundsObject {
  [key: string]: string;
}

const backgrounds: backgroundsObject = {
  empty:
    "linear-gradient(139deg, rgba(244,244,246,1) 0%, rgba(241,241,246,0.9472163865546218) 33%, rgba(232,246,249,1) 92%)",
  sunny:
    "linear-gradient(139deg, rgba(252,252,246,1) 15%, rgba(247,247,221,0.9472163865546218) 40%, rgba(251,254,243,1) 90%)",
  cloudy:
    "linear-gradient(139deg, rgba(239,240,245,1) 15%, rgba(230,232,249,0.9472163865546218) 40%, rgba(240,241,247,1) 90%)",
  rain: "linear-gradient(139deg, rgba(234,236,242,1) 15%, rgba(209,212,233,0.9472163865546218) 40%, rgba(232,235,249,1) 90%)",
  snow: "linear-gradient(139deg, rgba(231,234,245,1) 15%, rgba(230,231,233,0.9472163865546218) 40%, rgba(217,221,238,1) 90%)",
  fog: "linear-gradient(139deg, rgba(233,234,237,1) 15%, rgba(232,234,237,0.9472163865546218) 40%, rgba(219,219,221,1) 90%)",
};

export const getBackground = (condition: string): string => {
  return backgrounds[condition === "" ? "empty" : condition];
};
