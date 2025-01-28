export default {
    name: "beds",
    title: "Beds",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Product Title",
        type: "string",
      },
      {
        name: "color",
        title: "Color",
        type: "string",
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
            input.toLowerCase().replace(/\s+/g, "-").replace('"', "-inch-").replace("''", "-inch-").slice(0, 200),
        },
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        title: "Price without Discount",
        name: "priceWithoutDiscount",
        type: "number",
      },
      {
        name: "rating",
        type: "number",
        title: "Rating",
        description: "Rating of the product",
      },
      {
        name: "ratingCount",
        type: "number",
        title: "Rating Count",
        description: "Number of ratings",
      },
      
      {
        name: "image",
        title: "Product Image",
        type: "image",
      },
      {
        name: "image2",
        title: "Product Image on hover",
        type: "image",
      },
      {
        name: "images",
        title: "Product Images",
        type: "array",
        of: [{ type: "image" }],
        options: {
          hotspot: true,
        },
      },
      {
        name: 'videoFile',
        type: 'file',
        title: 'Upload Video',
        options: {
          accept: 'video/*', // Accepts video files only
        },
      },
      {
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: "categories" }],
      },
      {
        name: "vendor",
        title: "Vendor",
        type: "reference",
        to: [{ type: "vendors" }],
      },
      //   Description Rich Text
      {
        name: "description",
        title: "Product Description",
        type: "array",
        of: [
          {
            type: "block",
          },
          {
            type: "image",
            fields: [
              {
                type: "text",
                name: "alt",
                title: "Alternative text",
                description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                options: {
                  isHighlighted: true,
                },
              },
            ],
          },
        ],
      },
      {
        name: "inventory",
        title: "Inventory Management",
        type: "number",
      },
      {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "string" }],
        options: {
          list: [
            { title: "Featured", value: "featured" },
            {
              title: "Follow products and discounts on Instagram",
              value: "instagram",
            },
            { title: "Gallery", value: "gallery" },
          ],
        },
      },
      // Full Details
      {
        name: "otherDimensions",
        title: "Other Dimensions",
        type: "object",
        fields: [
          {
            name: "overall",
            title: "Overall",
            type: "string",
          },
        ],
      },
      {
        name: "details",
        title: "Details",
        type: "object",
        fields: [
          { name: "mattresssize", title: "Mattress Size", type: "string" },
          { name: "bedframematerial", title: "Bed Frame Material", type: "string" },
          { name: "boxspringrequired", title: "Box Spring Required", type: "boolean" },
          {
            name: "weightcapacity",
            title: "Weight Capacity",
            type: "string",
          },
          { name: "headboard", title: "Headboard Included", type: "boolean" },
          { name: "footboard", title: "Footboard  Included", type: "boolean" },
          {
            name: "typesofstorage",
            title: "Type of Storage Included",
            type: "array",
            of: [{ type: "string" }],
            options: {
              layout: "tags",
            },
          },
          { name: "drawers", title: "Drawers Included", type: "boolean" },
          { name: "woodspecies", title: "Wood Species", type: "string" },
          { name: "manufacturedwoodtype", title: "Manufactured Wood Type", type: "string" },
        ],
      },
      {
        name: "assembly",
        title: "Assembly",
        type: "object",
        fields: [
          {
            name: "assemblyRequired",
            title: "Assembly Required",
            type: "boolean",
          },
        ],
      },
      {
        name: "warranty",
        title: "Warranty",
        type: "object",
        fields: [
          {
            name: "commercialWarranty",
            title: "Commercial Warranty",
            type: "boolean",
          },
          {
            name: "commercialWarrantyLength",
            title: "Commercial Warranty Length",
            type: "string",
          },
          { name: "productWarranty", title: "Product Warranty", type: "boolean" },
          { name: "warrantyLength", title: "Warranty Length", type: "string" },
          {
            name: "fullOrLimitedWarranty",
            title: "Full or Limited Warranty",
            type: "string",
          },
        ],
      },
    ],
  };
  