// import {
//        FaSnowflake,
//        FaBolt,
//        FaFaucet,
//        FaTools,
//        FaBroom,
//        FaTint,
//        FaLaptopMedical
// } from "react-icons/fa";

// const services = [
//        {
//               name: "AC Service",
//               icon: FaSnowflake,
//        },
//        {
//               name: "Electrician",
//               icon: FaBolt,
//        },
//        {
//               name: "Plumbing",
//               icon: FaFaucet,
//        },
//        {
//               name: "Appliance Repair",
//               icon: FaTools,
//        },
//        {
//               name: "Laptop Repair",
//               icon: FaLaptopMedical,
//        },
//        {
//               name: "RO Service",
//               icon: FaTint,
//        },
// ];

// export default services;



import {
       FaSnowflake,
       FaBolt,
       FaFaucet,
       FaTools,
       FaBroom,
       FaTint,
} from "react-icons/fa";

const services = [
       {
              id: 1,
              name: "AC Service",
              shortName: "AC",
              question: "AC isn’t cooling?",
              description: "Get it diagnosed & fixed.",
              price: 299,
              details: "Service • Repair",
              subDetails: "Installation",
              icon: FaSnowflake,
              iconColor: "text-blue-600",
              bg: "bg-blue-50",
              image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
       },

       {
              id: 2,
              name: "Electrician",
              shortName: "Electrician",
              question: "Something’s wrong with the power?",
              description: "Safe. Quick. Reliable.",
              price: 199,
              details: "Fixing • Wiring",
              subDetails: "Switches & more",
              icon: FaBolt,
              iconColor: "text-yellow-500",
              bg: "bg-yellow-50",
              image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
       },

       {
              id: 3,
              name: "Plumbing",
              shortName: "Plumbing",
              question: "There’s a water leak?",
              description: "Find the source & fix it.",
              price: 199,
              details: "Leak • Pipe • Tap",
              subDetails: "Toilet & more",
              icon: FaFaucet,
              iconColor: "text-blue-500",
              bg: "bg-cyan-50",
              image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80",
       },

       {
              id: 4,
              name: "Appliance Repair",
              shortName: "Appliance Repair",
              question: "Your appliance isn’t working?",
              description: "We’ll get it running again.",
              price: 299,
              details: "Fridge • Washing Machine",
              subDetails: "Microwave & more",
              icon: FaTools,
              iconColor: "text-blue-600",
              bg: "bg-indigo-50",
              image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80",
       },

       {
              id: 5,
              name: "Home Cleaning",
              shortName: "Home Cleaning",
              question: "Your home needs a deep clean?",
              description: "A cleaner, healthier home.",
              price: 499,
              details: "Sofa • Kitchen • Bathroom",
              subDetails: "Full Home & more",
              icon: FaBroom,
              iconColor: "text-pink-500",
              bg: "bg-pink-50",
              image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
       },

       {
              id: 6,
              name: "RO Service",
              shortName: "RO Service",
              question: "Your RO isn’t working properly?",
              description: "Get pure & safe water again.",
              price: 299,
              details: "Service • Repair",
              subDetails: "Filter Replacement",
              icon: FaTint,
              iconColor: "text-blue-600",
              bg: "bg-cyan-50",
              //image: "https://images.unsplash.com/photo-1585687433149-2c5b9b0e3d5b?auto=format&fit=crop&w=900&q=80",
              //image: "https://images.unsplash.com/photo-1585687433146-0e9a7f1f2d1e?auto=format&fit=crop&w=800&q=80",
              // image: "https://images.unsplash.com/photo-1585687433146-0e9a7f1f2d1e?auto=format&fit=crop&w=800&q=80"
              image: "https://upload.wikimedia.org/wikipedia/commons/6/63/RO_SYSTEM.jpg",
       },
];

export default services;