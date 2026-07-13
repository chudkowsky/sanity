export const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tytuł projektu",
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
      name: "category",
      title: "Kategoria",
      description: "Dowolna nazwa kategorii — projekty z tą samą kategorią zostaną automatycznie zgrupowane na /work.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "client",
      title: "Klient",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Data realizacji",
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
      name: "tags",
      title: "Technologie / tagi",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "body",
      title: "Opis projektu",
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
