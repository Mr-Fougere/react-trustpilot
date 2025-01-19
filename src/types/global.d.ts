declare interface Trustpilot {
  loadFromElement: (element: HTMLElement, flag: boolean) => void;
}
interface Window {
  Trustpilot?: Trustpilot;
}

export const Trustpilot: Trustpilot = window.Trustpilot;
