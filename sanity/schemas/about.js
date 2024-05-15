export default {
  name: "about",
  title: "About",
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
      name: "ourStory",
      title: "Our Story",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
    {
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "advantageInno",
      title: "Advantage Innoquest",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
    {
      name: "advantageImage",
      title: "Advantage Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "industries",
      title: "Industries",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "industryDesc",
              title: "Industry Description",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "clientele",
      title: "Clientele",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "clientDesc",
              title: "Client Description",
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
      name: "leadership",
      title: "Leadership",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "name",
              type: "string",
            },
            {
              name: "description",
              title: "description",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "link",
              title: "Linkedin Url",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "teamImage",
      title: "Team Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "teamDescription",
      title: "Team Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "ourValues",
      title: "Our Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "description",
              title: "description",
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
      name: "valueImage",
      title: "Value Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
