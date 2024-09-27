import { defineField, defineType } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "Contact Information",
  type: "document",
  fields: [
    defineField({
      name: "email",
      type: "string",
      title: "Email Address",
      validation: (Rule) => Rule.email().required(),
    }),
    defineField({
      name: "github",
      type: "url",
      title: "GitHub Profile URL",
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).required(),
    }),
    defineField({
      name: "instagram",
      type: "url",
      title: "Instagram Profile URL",
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).required(),
    }),
    defineField({
      name: "twitter",
      type: "url",
      title: "Twitter Profile URL",
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).required(),
    }),
    defineField({
      name: "linkedin",
      type: "url",
      title: "LinkedIn Profile URL",
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).required(),
    }),
  ],
});
