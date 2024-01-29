import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-XD56D6VD61");
};

export const trackPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const trackLinkClick = (label) => {
  ReactGA.event({
    category: "Project Link Click",
    action: `User clicked the project link: ${label}`,
  });
};
