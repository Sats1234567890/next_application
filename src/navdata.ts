
export const navLinks = [
  {
    name: "Home",
    href: "/",
    type: "link",
  },
  {
    name: "Product Category",
    type: "dropdown", // grid-style dropdown
    dropdownType: "grid", // specify type explicitly
    sections: [
      {
        title: "Organic Foods & Beverage",
        links: [
          { name: "Spices", href: "/category/spices" },
          { name: "Tea", href: "/category/tea" },
          { name: "Honey", href: "/category/honey" },
          { name: "Rice", href: "/category/rice" },
          { name: "Oil", href: "/category/oil" },
          { name: "Coffee", href: "/category/coffee" },
          { name: "Fruits & Vegetable (Dried)", href: "/category/fruits-vegetable-dried" },
        ],
      },
      {
        title: "Organic Herbs & Medicinal Plant",
        links: [
          { name: "Yarsagumba (Himalayan Gold)", href: "/category/yarsagumba" },
          { name: "Jatamasi", href: "/category/jatamasi" },
          { name: "Kutki", href: "/category/kutki" },
          { name: "Padamchal (Himalayan Rhubarb)", href: "/category/padamchal" },
          { name: "Tulsi (Holy Basil)", href: "/category/tulsi" },
          { name: "Chiraito", href: "/category/chiraito" },
          { name: "Ashwagandha", href: "/category/ashwagandha" },
        ],
      },
      {
        title: "Organic Body Care & Cosmetics",
        links: [
          { name: "Oil (Mustard, Sesame, Sea Buckthorn, Jatamasi)", href: "/category/oil-body-care" },
          { name: "Soaps", href: "/category/soaps" },
          { name: "Face Mask & Scrubs", href: "/category/face-mask-scrubs" },
          { name: "Lip Balms", href: "/category/lip-balms" },
        ],
      },
    ],
  },
  {
    name: "About Us",
    type: "dropdown", // simple classic dropdown
    dropdownType: "simple",
    links: [
      { name: "About Chino Organica", href: "/about" },
      { name: "Our Teams", href: "/teams" },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    type: "link",
  },
];
