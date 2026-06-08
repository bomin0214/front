import { create } from 'zustand'

const useTogglesStore = create((set) => ({
    isOpen: false,
    toggleModal: () =>
        set((state) => ({
            isOpen: !state.isOpen,
        })),
}));

export default useTogglesStore;
