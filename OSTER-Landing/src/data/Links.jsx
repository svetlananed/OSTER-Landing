export const links = [
  {
    name: "Homepage",
    id: "home",
    type: "page",      // Home page
  },
  {
    name: "About us",
    id: "about",
    type: "page",      // Router page: /about
  },
  {
    name: "Services",
    id: "services",
    type: "page",   // On homepage dropdown 
    dropdown: [
      { name: "Web Development", id: "webdev", type: "section" },
      { name: "Design", id: "design", type: "section" },
      { name: "Marketing", id: "marketing", type: "section" },
    ],
  },
  {
    name: "Pricing",
    id: "pricing",
    type: "page",   // Router page: /pricing
  },
  {
    name: "Projects",
    id: "projects",
    type: "page",      // Router page: /contact
  },
  {
    name: "Blog",
    id: "blog",
    type: "page",      // Router page: /contact
  },
  {
    name: "Tools",
    id: "tools",
    type: "page", 
    dropdown: [
      { name: "Calculator", id: "calculator" },
      { name: "Parser", id: "parser" }, // Router page: /contact
    ]     
  },
];


