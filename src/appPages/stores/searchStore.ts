import { create } from "zustand";

interface FilterStore {
  selectedType: string;
  selectedCategory: string;
  setSelectedType: (type: string) => void;
  setSelectedCategory: (category: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  selectedType: "",
  selectedCategory: "",
  setSelectedType: (type: string) => set({ selectedType: type }),
  setSelectedCategory: (category: string) => set({ selectedCategory: category }),
  resetFilters: () => set({ selectedType: "", selectedCategory: "" }),
}));
