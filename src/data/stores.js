import services from "./services";
import tags from "./tags";

// const stores = [
//        {
//               id: 1,
//               name: "Cool Breeze AC Service",
//               area: "Beltola",
//               rating: 4.8,
//               //image: "https://placehold.co/600x400",
//               //image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=600&q=80",
//               //image: "https://www.coolservice.co.in/images/ac_repair.jpeg",
//                image: "https://www.servis-klima-beograd.com/images/artikli/servis_klima_beograd.jpg",
//               services: ["AC Service", "RO Service"],
//               open: true,
//        },
//        {
//               id: 2,
//               name: "Power Electric Works",
//               area: "Ganeshguri",
//               rating: 4.7,
//               //image: "https://placehold.co/600x400",
//               //image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
//               image: "https://comunilog.com/sites/default/files/tecnico_instalador_eletricista.jpeg",
//               services: ["Electrician"],
//               open: true,
//        },
//        {
//               id: 3,
//               name: "Aqua Plumbing",
//               area: "Six Mile",
//               rating: 4.9,
//               //image: "https://placehold.co/600x400",
//               //image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
//               //"https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80",
//               image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80",
//               services: ["Plumbing"],
//               open: false,
//        },
//        {
//               id: 4,
//               name: "Laptop Repair",
//               area: "Dispur",
//               rating: 4.6,
//               //image: "https://placehold.co/600x400",
//               //image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
//               //"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
//               image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
//               services: ["Repair", "Exchange"],
//               open: true,
//        },

// ]

const stores = [
       {
              id: 1,
              name: "Next Digital Home",
              area: "Ganeshpuri",
              rating: "4.6",
              //image: "https://media.istockphoto.com/id/515443264/photo/home-appliance-in-the-store.jpg?s=612x612&w=0&k=20&c=Zi69da3N5D31WXba7U9H2Rw4jWt_5IngnZAeZ3Kzix8=",
              image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmn9OSGIiHYmQx0NKwKxLS0mTPXg3YfbBCofbNyLK9smRZTXIk3LsSTtXI27ipHKm3fBCdarwEaOHXJ4HOvBccITNn9yKYeevgA0Tqnq37uWX0-V0CH8qYJUSdxjhbgRpZ4hpBwyQ=s1360-w1360-h1020-rw",
              services: ["Electronic Retail", "Repair Shop"],
              tags: ["Same-day Delivery"],
              open: "true"
       },
       {
              id: 2,
              name: "AC World Guwahati",
              area: "Ganeshpuri",
              rating: "4.7",
              image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnA94ALZ0X1gnLWuZ48wojJsWcps3Vo225HfiuNKAqRoz9iqYf5wMXFdjATWKtkcongiycZBFD5dv8PkJVbWvNzkrd0fSBpQ3hrmnGBal4RBNDfQJSWeTDh_5v5Br5PxcoUwoKB5A=s1360-w1360-h1020-rw",
              services: ["EMI", "Exchange", "AC Shop"],
              tags: ["Buyback"],
              open: "true"
       },
       {
              id: 3,
              name: "Next Electronics(Sky Vision)",
              area: "Bhubaneswar Baruah Road",
              rating: "4.2",
              image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlKRTVTTxX_ROnJiWTc797gnvOC9UhHQJLt2-1qFNDRKc0M5QmCtaAE3nGXksfcJYQdLSUpnLne4YMFMczfmwkRI2nGKXr0sUaN2JWw138MI5FQfS70XDcvWncRzlcoE_Qz5TAq=s1360-w1360-h1020-rw",
              services: ["Electronic Retail", "Repair Shop"],
              tags: ["Same day", "Emi Exchange"],
              open: "true"
       },
       {
              id: 4,
              name: "Bambino Electronics Saibal Das",
              area: "G.S Road,Dispur",
              rating: "4.2",
              //image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkR3ZpRUylSgeP5K6EMVvojCzNw6l9Gd5asRIPQq5KfJGx6IwGf3Bdo6dFRvYRxMWevzG5xP6ux4UlkLoWeiaToJ9vkuvjoW1rkBwFAEkTNwW8Ae3uar-TZ5VUNQ_U-ImfRF1VDCw=s1360-w1360-h1020-rw",
              image: "https://lh3.googleusercontent.com/grass-cs/ACvplmOMjVhfp8ytT5OMAxO_QklWg7KDokIEt6p-7nlUkdbYYMH67Db2xiHrCctwbMU3W57eBIzR5tk3qCeAh6lEVWC_wTfxHm4hs2O7gHtKG5wuKnd3Lz5zIEGZqtYlIzQeMcO3roMYYA=s1360-w1360-h1020-rw",
              services: ["Electronic Shop"],
              tags: ["Buyback"],
              open: "true",
       }
]

export default stores;