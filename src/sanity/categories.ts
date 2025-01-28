const Category={
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
        },
         // slug
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 200, // will be ignored if slugify is set
          slugify: (input: string) =>
            input.toLowerCase().replace(/\s+/g, "-").replace('"', "-inch-").replace("''", "-inch-").replace("&", "-").slice(0, 200),
        },
      },
        {
            name: 'image',
            title: 'Category Image',
            type: 'image',
        },
        {
            title: 'Number of Products',
            name: 'products',
            type: 'number',
        }
    ],
}
 export default Category