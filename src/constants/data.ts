export const formStages: number[] = [1, 2, 3, 4];

export const monthlyPlans = [
  {
    id: "arcade",
    groupName: "monthly",
    name: "Arcade",
    price: 9,
    icon: new URL("../assets/images/icon-arcade.svg", import.meta.url).href,
  },

  {
    id: "advanced",
    groupName: "monthly",
    name: "Advanced",
    price: 12,
    icon: new URL("../assets/images/icon-advanced.svg", import.meta.url).href,
  },
  {
    id: "pro",
    groupName: "monthly",
    name: "Pro",
    price: 15,
    icon: new URL("../assets/images/icon-pro.svg", import.meta.url).href,
  },
];

export const yearlyPlans = [
  {
    id: "arcade",
    groupName: "yearly",
    name: "Arcade",
    price: 90,
    icon: new URL("../assets/images/icon-arcade.svg", import.meta.url).href,
    warrenty: "2 months free",
  },
  {
    id: "advanced",
    groupName: "yearly",
    name: "Advanced",
    price: 120,
    icon: new URL("../assets/images/icon-advanced.svg", import.meta.url).href,
    warrenty: "2 months free",
  },
  {
    id: "pro",
    groupName: "yearly",
    name: "Pro",
    price: 150,
    icon: new URL("../assets/images/icon-pro.svg", import.meta.url).href,
    warrenty: "2 months free",
  },
];

export const monthlyAddOns = [
  {
    id: "1",
    name: "Online service",
    desc: "Access to multiplayer games",
    price: 1,
  },
  {
    id: "2",
    name: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    id: "3",
    name: "Customizable profile",
    desc: "Custom theme on your profile",
    price: 2,
  },
];


export const yearlyAddOns = [
  {
    id: "1",
    name: "Online service",
    desc: "Access to multiplayer games",
    price: 10,
  },
  {
    id: "2",
    name: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: 20,
  },
  {
    id: "3",
    name: "Customizable profile",
    desc: "Custom theme on your profile",
    price: 20,
  },
];