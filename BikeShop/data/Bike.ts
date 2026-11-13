export type Bike = {
  id: string;
  name: string;
  price: number;
  discount: number;
  category: "Roadbike" | "Mountainbike";
  image: string;
  description: string;
};

export const bikes: Bike[] = [
  {
    id: "1",
    name: "Roadster 3000",
    price: 1200,
    discount: 10,
    category: "Roadbike",
    image: "",
    description: "A lightweight road bike for speed enthusiasts.",
  },
  {
    id: "2",
    name: "Mountain King",
    price: 1500,
    discount: 15,
    category: "Mountainbike",
    image: "mountainking.jpg",
    description: "A rugged mountain bike for off-road adventures.",
  },
  {
    id: "3",
    name: "Speedster Pro",
    price: 2000,
    discount: 5,
    category: "Roadbike",
    image: "speedsterpro.jpg",
    description: "A high-performance road bike for competitive racing.",
  },
  {
    id: "4",
    name: "Trail Blazer",
    price: 1800,
    discount: 20,
    category: "Mountainbike",
    image: "trailblazer.jpg",
    description: "A versatile mountain bike for all terrains.",
  },
];
