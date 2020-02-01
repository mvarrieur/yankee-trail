import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AttractionsPagePreview from "./preview-templates/AttractionsPagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

window.CMS_MANUAL_INIT = true; // this doesn't do anything, at least in my testing

// You will have to do some work to set some env variable (like BRANCH)
// with the current git branch for local development. Netlify will automatically
// populate this variable for you when doing CI builds.
const { BRANCH } = process.env;

const config = {
  load_config_file: false,
  backend: {
    name: "git-gateway",
    // repo: "repo/name",
    // prefer the set BRANCH if available, or fallback to `master`
    branch: BRANCH || "master",
    commit_messages: {
      create: "Create {{collection}} “{{slug}}”",
      update: "Update {{collection}} “{{slug}}”",
      delete: "Delete {{collection}} “{{slug}}”",
      uploadMedia: "[skip ci] Upload “{{path}}”",
      deleteMedia: "[skip ci] Delete “{{path}}”"
    }
  },
  media_folder: "static/img",
  public_folder: "/img",
  collections: [
    {
      name: "pages",
      label: "pages",
      files: [
        {
          file: "src/pages/index.md",
          label: "Landing Page",
          name: "index",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "index-page"
            },
            { label: "Title", name: "title", widget: "'string'" },
            {
              label: "Hero Image",
              name: "hero",
              widget: "object",
              fields: [
                { label: "Image", name: "image", widget: "image" },
                { label: "Title", name: "title", widget: "string" },
                { label: "Link", name: "link", widget: "string" },
                { label: "Artist", name: "artist", widget: "string" },
                {
                  label: "Modifications",
                  name: "modifications",
                  widget: "string"
                },
                {
                  label: "License",
                  name: "license",
                  widget: "object",
                  fields: [
                    { label: "Name", name: "name", widget: "string" },
                    { label: "Link", name: "link", widget: "string" }
                  ]
                }
              ]
            },
            { label: "Heading", name: "heading", widget: "string" },
            { label: "Description", name: "description", widget: "string" },
            {
              label: "Intro",
              name: "intro",
              widget: "object",
              fields: [
                { label: "Heading", name: "heading", widget: "string" },
                { label: "Description", name: "description", widget: "text" },
                {
                  label: "Blurbs",
                  name: "blurbs",
                  widget: "list",
                  fields: [
                    { label: "Image", name: "image", widget: "image" },
                    { label: "Text", name: "text", widget: "text" }
                  ]
                }
              ]
            },
            {
              label: "Main",
              name: "main",
              widget: "object",
              fields: [
                { label: "Heading", name: "heading", widget: "string" },
                { label: "Description", name: "description", widget: "text" },
                {
                  label: "Image1",
                  name: "image1",
                  widget: "object",
                  fields: [
                    { label: "Image", name: "image", widget: "image" },
                    { label: "Alt", name: "alt", widget: "string" }
                  ]
                },
                {
                  label: "Image2",
                  name: "image2",
                  widget: "object",
                  fields: [
                    { label: "Image", name: "image", widget: "image" },
                    { label: "Alt", name: "alt", widget: "string" }
                  ]
                },
                {
                  label: "Image3",
                  name: "image3",
                  widget: "object",
                  fields: [
                    { label: "Image", name: "image", widget: "image" },
                    { label: "Alt", name: "alt", widget: "string" }
                  ]
                }
              ]
            }
          ]
        },
        {
          file: "src/pages/attractions/index.md",
          label: "Attractions",
          name: "attractions",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "attractions-page"
            },
            { label: "Title", name: "title", widget: "string" },
            { label: "Body", name: "body", widget: "markdown" }
          ]
        },
        {
          file: "src/pages/about/index.md",
          label: "About Page",
          name: "about",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "about-page"
            },
            { label: "Title", name: "title", widget: "string" },
            {
              label: "Hero Image",
              name: "hero",
              widget: "object",
              fields: [
                { label: "Image", name: "image", widget: "image" },
                { label: "Title", name: "title", widget: "string" },
                { label: "Link", name: "link", widget: "string" },
                { label: "Artist", name: "artist", widget: "string" },
                {
                  label: "Modifications",
                  name: "modifications",
                  widget: "string"
                },
                {
                  label: "License",
                  name: "license",
                  widget: "object",
                  fields: [
                    { label: "Name", name: "name", widget: "string" },
                    { label: "Link", name: "link", widget: "string" }
                  ]
                }
              ]
            },
            { label: "Heading", name: "heading", widget: "string" },
            { label: "Description", name: "description", widget: "string" },
            {
              label: "Intro",
              name: "intro",
              widget: "object",
              fields: [
                { label: "Heading", name: "heading", widget: "string" },
                { label: "Description", name: "description", widget: "text" },
                {
                  label: "Blurbs",
                  name: "blurbs",
                  widget: "list",
                  fields: [
                    { label: "Image", name: "image", widget: "image" },
                    { label: "Text", name: "text", widget: "text" }
                  ]
                }
              ]
            },
            {
              label: "Main",
              name: "main",
              widget: "object",
              fields: [
                { label: "Heading", name: "heading", widget: "string" },
                { label: "Description", name: "description", widget: "text" },
                {
                  label: "Image1",
                  name: "image1",
                  widget: "object",
                  fields: [
                    { label: "Image", name: "image", widget: "image" },
                    { label: "Alt", name: "alt", widget: "string" }
                  ]
                },
                {
                  label: "Image2",
                  name: "image2",
                  widget: "object",
                  fields: [
                    { label: "Image", name: "image", widget: "image" },
                    { label: "Alt", name: "alt", widget: "string" }
                  ]
                },
                {
                  label: "Image3",
                  name: "image3",
                  widget: "object",
                  fields: [
                    { label: "Image", name: "image", widget: "image" },
                    { label: "Alt", name: "alt", widget: "string" }
                  ]
                }
              ]
            },
            {
              label: "Testimonials",
              name: "testimonials",
              widget: "list",
              fields: [
                { label: "Quote", name: "quote", widget: "string" },
                { label: "Author", name: "author", widget: "string" }
              ]
            },
            { label: "Full_image", name: "full_image", widget: "image" },
            {
              label: "Pricing",
              name: "pricing",
              widget: "object",
              fields: [
                { label: "Heading", name: "heading", widget: "string" },
                { label: "Description", name: "description", widget: "string" },
                {
                  label: "Plans",
                  name: "plans",
                  widget: "list",
                  fields: [
                    { label: "Plan", name: "plan", widget: "string" },
                    { label: "Price", name: "price", widget: "string" },
                    {
                      label: "Description",
                      name: "description",
                      widget: "string"
                    },
                    { label: "Items", name: "items", widget: "list" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("attractions", AttractionsPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);

CMS.init({ config });
