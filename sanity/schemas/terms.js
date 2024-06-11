export default {
  name: "terms",
  title: "Terms and Conditions",
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
