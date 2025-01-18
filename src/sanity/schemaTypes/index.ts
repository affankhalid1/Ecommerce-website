import { type SchemaTypeDefinition } from 'sanity'
import products from '@/sanity/products'
import categories from '@/sanity/categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,categories],
}
