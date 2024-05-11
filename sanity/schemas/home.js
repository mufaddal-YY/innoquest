export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "metatitle",
      title: "Meta Title",
      type: "string",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    },
    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "subHeadline",
      title: "Sub Headline",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "service1",
      title: "Service 1",
      type: "string",
    },
    {
      name: "serviceDesc",
      title: "Service Description",
      type: "string",
    },
    {
      name: "service2",
      title: "Service 2",
      type: "string",
    },
    {
      name: "serviceDesc1",
      title: "Description",
      type: "string",
    },
    {
      name: "network",
      title: "Professional Network",
      type: "string",
    },
    {
      name: "manYears",
      title: "Man Years",
      type: "string",
    },
    {
      name: "clients",
      title: "Clients Catered",
      type: "string",
    },
    {
      name: "candidates",
      title: "Candidates Recruited",
      type: "string",
    },

    {
      name: "clientAssociated",
      title: "Clients Associated",
      type: "string",
    },
  ],
};
