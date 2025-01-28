import { type SchemaTypeDefinition } from 'sanity'
import products from '@/sanity/products'
import beds from '../beds'
import categories from '@/sanity/categories'
import vendor from '@/sanity/vendor'
import cart from '@/sanity/cart'
import popularstyles from '@/sanity/popularstyles'
import popularmain from '@/sanity/popularmain'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cart, products, beds,categories,popularmain,popularstyles,vendor],
}
