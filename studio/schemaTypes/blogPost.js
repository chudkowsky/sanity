export const blogPost = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tytuł",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Data publikacji",
      type: "datetime",
    },
    {
      name: "excerpt",
      title: "Krótki opis",
      type: "text",
      rows: 3,
    },
    {
      name: "coverImage",
      title: "Zdjęcie główne",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "body",
      title: "Treść",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Opis zdjęcia", type: "string" },
            { name: "caption", title: "Podpis", type: "string" },
          ],
        },
        {
          type: "code",
          options: {
            language: "javascript",
            languageAlternatives: [
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "Python", value: "python" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "Bash", value: "bash" },
            ],
          },
        },
      ],
    },
  ],
};
