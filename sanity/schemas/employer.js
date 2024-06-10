export default {
  name: "employer",
  title: "Employer Services",
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
      name: "subHeadline",
      title: "Headline",
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
      name: "executiveSearch",
      title: "Executive Search",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    
    {
      name: "executiveDesc",
      title: "Executive Search Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "executiveImage",
      title: "Executive Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },

    {
      name: "professionalSearch",
      title: "Professional Search",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "professionalDesc",
      title: "Professional Search Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "professionalImage",
      title: "Professional Search Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },

    {
      name: "nicheHiring",
      title: "Niche Hiring",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "nicheDesc",
      title: "Niche Hiring Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "nicheImage",
      title: "Niche Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },

    {
      name: "recruitmentEfficiency",
      title: "Recruitment Efficiency",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "efficiencyDesc",
      title: "Efficiency Solutions Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "efficiencyImage",
      title: "Efficiency Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};
