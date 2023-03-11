import React from "react";
import { defineConfig, TextField } from "tinacms";
import { ReferenceField } from "tinacms";
import { docusaurusDate, titleFromSlug } from "../util";
import title from "title";

// Your hosting provider likely exposes this as an environment variable
const branch = "main";

// process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF ||

export default defineConfig({
  branch,
  clientId: "7966757d-536e-4c8a-b44e-a957fece462b", // Get this from tina.io
  token: "c3a006681a9d87ff9afa01df62914051c5bc49a1", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "static/img",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "blog/posts",
        format: "mdx",
        ui: {
          defaultItem: {
            date: docusaurusDate(new Date()),
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: 'Authors',
            name: 'authors',
            type: 'string',
            list: true,
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          // Image
          {
            type: "image",
            label: "Image",
            name: "image",
          },
          // Hide TOC False
          {
            type: "boolean",
            name: "hide_table_of_contents",
            label: "Hide TOC",
          },
          // Slug
          {
            type: "string",
            name: "slug",
            label: "Slug"
          },
          // comments: true
          {
            type: "boolean",
            name: "comments",
            label: "Comments",
          },
          // {
          //   name: "date",
          //   label: "Date",
          //   type: "string",
          //   required: true,
          //   ui: {
          //     dateFormat: "MMM D, yyyy",
          //     component: "date",
          //     parse: (val) => {
          //       docusaurusDate(val);
          //     },
          //   },
          // },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            // templates: [...MDXTemplates],
          },
        ],
      },
      {
        name: "doc",
        label: "Docs",
        path: "docs",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            // templates: [...MDXTemplates],
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "src/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
