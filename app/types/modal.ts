export type ModalType = "alert" | "confirm" | "custom";

export interface Modal {
  type: ModalType;
  id?: string;
  content?: string;
  componentName?: string;
}

export interface ModalState {
  modals: Modal[];
}
