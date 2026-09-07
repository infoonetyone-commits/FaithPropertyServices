import ValuePropsScroll from "@/components/ValuePropsScroll";

const props = [
  {
    title: "Affordable Prices",
    text: "Fair, transparent rates with no hidden costs.",
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  },
  {
    title: "Experienced Team",
    text: "Trained and insured professionals you can rely on.",
    icon: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13A4 4 0 0116 11",
  },
  {
    title: "Sustainable Solutions",
    text: "Eco-friendly products for a cleaner, safer environment.",
    icon: "M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6",
  },
  {
    title: "Client Focus",
    text: "Flexible, responsive service built around your needs.",
    icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  },
];

export default function ValueProps() {
  return <ValuePropsScroll props={props} />;
}
