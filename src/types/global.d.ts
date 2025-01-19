declare interface Trustpilot {
  loadFromElement: (element: HTMLElement, flag: boolean) => void;
}
interface Window {
  Trustpilot?: Trustpilot;
}
