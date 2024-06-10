export default {
  name: "work",
  title: "Work with us",
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "opportunities",
      title: "Opportunities with IQ",
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
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};
