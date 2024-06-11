export default {
  name: "privacy",
  title: "Privacy Policy",
  type: "document",
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
};
