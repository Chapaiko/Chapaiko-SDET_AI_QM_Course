// path: src/test-data/productData.ts
/**
 * Represents reusable cart product data for storefront scenarios.
 */
export interface CartProduct {
  description: string;
  name: string;
  price: string;
  productIndex: number;
  quantity: string;
  total: string;
}

/**
 * Provides reusable storefront products for cart assertions.
 */
export const cartProducts = {
  blueTop: {
    description: 'Women > Tops',
    name: 'Blue Top',
    price: 'Rs. 500',
    productIndex: 0,
    quantity: '1',
    total: 'Rs. 500'
  },
  menTshirt: {
    description: 'Men > Tshirts',
    name: 'Men Tshirt',
    price: 'Rs. 400',
    productIndex: 1,
    quantity: '1',
    total: 'Rs. 400'
  }
} as const satisfies Record<string, CartProduct>;