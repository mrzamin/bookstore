export const menuData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop All",
    href: "/shop",
  },
  {
    label: "Shop by Subject",
    href: "/shopbysubject",
    children: [
      {
        heading: "Personal Growth",
        submenu: [
          { label: "Mindset", href: "shop/mindsetbooks" },
          {
            label: "Goal & Habit Setting",
            href: "shop/goalandhabitbooks",
          },
          {
            label: "Motivation, Inspiration, & Success",
            href: "shop/motivationbooks",
          },
        ],
      },
      {
        heading: "Business & Entrepreneurship",
        submenu: [
          {
            label: "Entrepreneurship",
            href: "shop/entrepreneurshipbooks",
          },
          {
            label: "Leadership",
            href: "shop/leadershipbooks",
          },
          { label: "Communication", href: "shop/communicationbooks" },
        ],
      },
      {
        heading: "Communication & Relationships",
        submenu: [
          {
            label: "Daily Communication",
            href: "shop/dailycommunicationbooks",
          },
          {
            label: "Public Speaking",
            href: "shop/publicspeakingbooks",
          },
        ],
      },

      {
        heading: "Money & Investing",
        submenu: [
          { label: "Financial Freedom", href: "shop/financialfreedombooks" },
          {
            label: "Investing",
            href: "shop/investingbooks",
          },
        ],
      },
    ],
  },
];
