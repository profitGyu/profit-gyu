import { create } from 'zustand';

export type ModalType = 'MESSAGE' | 'DATE_PICKER' | 'TIME_PICKER';

interface ModalData {
  message?: string;
  type?: 'success' | 'error' | 'info';
  onConfirm?: () => void;
  onSelect?: (...args: any[]) => void;
}

interface ModalStore {
  isOpen: boolean;
  modalType: ModalType | null;
  modalProps: ModalData;
  openModal: (type: ModalType, props?: ModalData) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  modalType: null,
  modalProps: {},
  openModal: (type, props = {}) =>
    set({ isOpen: true, modalType: type, modalProps: props }),
  closeModal: () => set({ isOpen: false, modalType: null, modalProps: {} }),
}));
