import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  productId: string
  productTitle: string
  productSlug: string
  variationId: string
  variationSize: number
  quantity: number
  priceCents: number
  imageUrl?: string
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  
  // Actions
  addItem: (item: Omit<CartItem, 'id'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  
  // Computed
  totalItems: () => number
  subtotalCents: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        const existingItem = get().items.find(
          (i) => i.variationId === item.variationId
        )

        if (existingItem) {
          // Update quantity if item already in cart
          set({
            items: get().items.map((i) =>
              i.id === existingItem.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          })
        } else {
          // Add new item
          const newItem: CartItem = {
            ...item,
            id: `cart-${Date.now()}-${Math.random()}`,
          }
          set({ items: [...get().items, newItem] })
        }

        // Open cart widget
        set({ isOpen: true })
      },

      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) })
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
        } else {
          set({
            items: get().items.map((i) =>
              i.id === id ? { ...i, quantity } : i
            ),
          })
        }
      },

      clearCart: () => {
        set({ items: [] })
      },

      openCart: () => {
        set({ isOpen: true })
      },

      closeCart: () => {
        set({ isOpen: false })
      },

      totalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0)
      },

      subtotalCents: () => {
        return get().items.reduce(
          (sum, item) => sum + item.priceCents * item.quantity,
          0
        )
      },
    }),
    {
      name: 'pure-performance-cart',
    }
  )
)
