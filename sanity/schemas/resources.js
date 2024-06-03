export default {
  name: "resources",
  title: "Resources",
  type: "document",
  fields: [
    {
      name: "socialMedia",
      title: "IQ on Social Media",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "headline",
              title: "Headline",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },

            {
              name: "link",
              title: "Link",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "insights",
      title: "IQ Insights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "headline",
              title: "Headline",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },

            {
              name: "link",
              title: "Link",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
