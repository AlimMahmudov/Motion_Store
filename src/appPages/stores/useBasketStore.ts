import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ITODOLIST {
    isHit: unknown;
    id: number;
    photos: { image: string }[];
    brand: string;
    model: string;
    processor: string;
    ram_size: number;
    storage_size: number;
    price: string;
    description: string;
  };
  
  
interface BasketState {
  basket: (ITODOLIST & { quantity: number })[];
  addToBasket: (item: ITODOLIST) => void;
  removeFromBasket: (item: ITODOLIST) => void;
  clearBasket: () => void;
  deleteOneBasket: (item: ITODOLIST) => void;
  isInBasket: (id: number) => boolean;
}

const useBasketStore = create<BasketState>()(
    persist(
      (set, get) => ({
        basket: [],
  
        addToBasket: (item) =>
          set((state) => {
            const existingItem = state.basket.find((i) => i.id === item.id);
            if (existingItem) {
              return {
                basket: state.basket.map((i) =>
                  i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                ),
              };
            } else {
              return {
                basket: [
                  ...state.basket,
                  { ...item, quantity: 1, addedAt: new Date().toISOString() }, // Добавляем дату
                ],
              };
            }
          }),
  
        deleteOneBasket: (item) =>
          set((state) => {
            const existingItem = state.basket.find((i) => i.id === item.id);
  
            if (existingItem && existingItem.quantity > 1) {
              return {
                basket: state.basket.map((i) =>
                  i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
                ),
              };
            } else {
              return {
                basket: state.basket.filter((i) => i.id !== item.id),
              };
            }
          }),
  
        removeFromBasket: (item) =>
          set((state) => ({
            basket: state.basket.filter((i) => i.id !== item.id),
          })),
  
        clearBasket: () => set({ basket: [] }),
  
        isInBasket: (id: number) => {
          return get().basket.some((item) => item.id === id);
        },
      }),
      {
        name: "basket-storage",
      }
    )
  );
  
export default useBasketStore;
