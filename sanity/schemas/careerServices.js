export default {
  name: "career",
  title: "Career Services",
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
      name: "careerOpp",
      title: "Career Opportunity Headline",
      type: "string",
    },
    {
      name: "careerOppSub",
      title: "Career Opportunity Sub Headline",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "link",
      title: "Career Link",
      type: "string",
    },
    {
      name: "careerCompass",
      title: "Career Compass",
      type: "string",
    },
    {
      name: "compassDesc",
      title: "Career Compass Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "compassImage",
      title: "Compass Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "portfolioCrafting",
      title: "Portfolio Crafting",
      type: "string",
    },
    {
      name: "portfolioDesc",
      title: "Portfolio Crafting Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "portfolioImage",
      title: "Portfolio Crafting Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "careerAccelerator",
      title: "Career Accelerator",
      type: "string",
    },
    {
      name: "acceleratorDesc",
      title: "Career Accelerator Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "acceleratorImage",
      title: "Career Accelerator Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};
