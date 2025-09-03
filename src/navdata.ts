
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
  title: "Organic Herbs & Medicinal Plants",
  href: "/product-category/organic-herbs",
  products: [
    {
      title: "Yarsagumba (Himalayan Gold)",
      href: "/category/yarsagumba",
      image: "/assets/products/herbs/herb5.jpg",
      description: "A rare and precious medicinal fungus found in the Himalayas, known for its energy-boosting properties.",
    },
    {
      title: "Jatamasi",
      href: "/category/jatamasi",
      image: "/assets/products/herbs/herb4.jpg",
      description: "An aromatic herb traditionally used to promote mental health and relaxation.",
    },
    {
      title: "Kutki",
      href: "/category/kutki",
      image: "/assets/products/herbs/herb6.jpg",
      description: "A bitter herb used to support liver function and detoxification.",
    },
    {
      title: "Padamchal (Himalayan Rhubarb)",
      href: "/category/padamchal",
      image: "/assets/products/herbs/herb7.jpg",
      description: "A medicinal plant used for digestive and liver health in traditional medicine.",
    },
    {
      title: "Tulsi (Holy Basil)",
      href: "/category/tulsi",
      image: "/assets/products/herbs/herb8.jpg",
      description: "An adaptogenic herb known for immunity support and stress reduction.",
    },
    {
      title: "Chiraito",
      href: "/category/chiraito",
      image: "/assets/products/herbs/herb1.jpg",
      description: "A bitter herb used for liver and blood purification.",
    },
    {
      title: "Ashwagandha",
      href: "/category/ashwagandha",
      image: "/assets/products/herbs/herb9.jpg",
      description: "A powerful adaptogen known to improve stamina, reduce stress, and support overall health.",
    },
    {
      title: "Brahmi",
      href: "/category/brahmi",
      image: "/assets/products/herbs/herb2.jpg",
      description: "Herb traditionally used to improve memory, concentration, and mental clarity.",
    },
    {
      title: "Shatavari",
      href: "/category/shatavari",
      image: "/assets/products/herbs/herb10.jpg",
      description: "A rejuvenating herb for female reproductive health and hormonal balance.",
    },
    {
      title: "Ginger",
      href: "/category/ginger",
      image: "/assets/products/herbs/herb8.jpg",
      description: "A warming root that aids digestion, circulation, and immune support.",
    },
    {
      title: "Licorice (Mulethi)",
      href: "/category/licorice",
      image: "/assets/products/herbs/herb11.jpg",
      description: "Herb used for respiratory health and soothing the digestive tract.",
    },
    {
      title: "Fenugreek (Methi)",
      href: "/category/fenugreek",
      image: "/assets/products/herbs/herb12.jpg",
      description: "A herb that supports metabolism, lactation, and overall wellness.",
    },
  ],
}
,


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
