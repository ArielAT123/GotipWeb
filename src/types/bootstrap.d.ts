declare module 'bootstrap' {
    class Tooltip {
      constructor(element: HTMLElement, options?: any);
      show(): void;
      hide(): void;
      toggle(): void;
      dispose(): void;
    }
    
    // Añade otras clases de Bootstrap que necesites
    export class Popover {}
    export class Modal {}
    export class Dropdown {}
    // ...
  }