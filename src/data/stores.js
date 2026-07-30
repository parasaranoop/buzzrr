import services from "./services";

const stores = [
       {
              id: 1,
              name: "Cool Breeze AC Service",
              area: "Beltola",
              rating: 4.8,
              image: "https://placehold.co/600x400",
              services: ["AC Service", "RO Service"],
              open: true,
       },
       {
              id: 2,
              name: "Power Electric Works",
              area: "Ganeshguri",
              rating: 4.7,
              image: "https://placehold.co/600x400",
              services: ["Electrician"],
              open: true,
       },
       {
              id: 3,
              name: "Aqua Plumbing",
              area: "Six Mile",
              rating: 4.9,
              image: "https://placehold.co/600x400",
              services: ["Plumbing"],
              open: false,
       },
       {
              id: 4,
              name: "Spark Home Care",
              area: "Dispur",
              rating: 4.6,
              image: "https://placehold.co/600x400",
              services: ["Cleaning", "Appliance Repair"],
              open: true,
       },

]

export default stores;