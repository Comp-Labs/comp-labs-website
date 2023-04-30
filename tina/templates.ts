import type { TinaField } from "tinacms";
export function blog_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "authors",
      label: "Authors",
      list: true,
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "boolean",
      name: "hide_table_of_contents",
      label: "Hide TOC",
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
    },
    {
      type: "boolean",
      name: "comments",
      label: "Comments",
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
  ] as TinaField[];
}
export function docsFields() {
  return [
    {
      type: "number",
      name: "sidebar_position",
      label: "sidebar_position",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
  ] as TinaField[];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "boolean",
      name: "hide_table_of_contents",
      label: "hide_table_of_contents",
    },
  ] as TinaField[];
}
