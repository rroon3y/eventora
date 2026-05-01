const events = [
  {
    id: 1,
    title: "Summer Beats Concert",
    date: "Nov 30, 2025",
    time: "7:00 PM",
    location: "Nairobi, Kenya",
    venue: "Kasarani Stadium",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1459749411177-0473ef716175?w=400&h=300&fit=crop"
    ],
    status: "upcoming",
    price: 2500,
    currency: "KES",
    category: "Music",
    attendees: 1240,
    description: "Experience the biggest summer music festival featuring top Kenyan and international artists. An unforgettable night of live performances, food, and fun.",
    featured: true
  },
  {
    id: 2,
    title: "Tech Innovators Meetup",
    date: "Dec 5, 2025",
    time: "2:00 PM",
    location: "Mombasa, Kenya",
    venue: "Swahili Beach Resort",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
    ],
    status: "upcoming",
    price: 1500,
    currency: "KES",
    category: "Tech",
    attendees: 340,
    description: "Connect with fellow tech enthusiasts, developers, and entrepreneurs. Keynote speeches, networking sessions, and startup pitches await.",
    featured: true
  },
  {
    id: 3,
    title: "Comedy Night Live",
    date: "Dec 10, 2025",
    time: "8:00 PM",
    location: "Nairobi, Kenya",
    venue: "Carnivore Grounds",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=400&h=300&fit=crop"
    ],
    status: "upcoming",
    price: 1000,
    currency: "KES",
    category: "Comedy",
    attendees: 560,
    description: "Laugh until it hurts with Kenya's finest comedians. A night of stand-up, improv, and pure entertainment.",
    featured: true
  },
  {
    id: 4,
    title: "Nairobi Marathon 2025",
    date: "Oct 15, 2025",
    time: "6:00 AM",
    location: "Nairobi, Kenya",
    venue: "Uhuru Gardens",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop"
    ],
    status: "past",
    price: 800,
    currency: "KES",
    category: "Sports",
    attendees: 5000,
    description: "The annual Nairobi Marathon brought together thousands of runners across 42KM, 21KM, and 10KM races through the scenic city routes.",
    featured: false
  },
  {
    id: 5,
    title: "Afrobeats Festival",
    date: "Nov 20, 2025",
    time: "6:00 PM",
    location: "Kisumu, Kenya",
    venue: "Kisumu Impala Grounds",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=300&fit=crop"
    ],
    status: "ongoing",
    price: 3000,
    currency: "KES",
    category: "Music",
    attendees: 2100,
    description: "The biggest Afrobeats celebration in East Africa is happening right now! Live performances, dance battles, and cultural showcases.",
    featured: true
  },
  {
    id: 6,
    title: "DevOps Workshop",
    date: "Dec 12, 2025",
    time: "9:00 AM",
    location: "Nairobi, Kenya",
    venue: "iHub Nairobi",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
    ],
    status: "upcoming",
    price: 500,
    currency: "KES",
    category: "Tech",
    attendees: 80,
    description: "Hands-on workshop covering CI/CD pipelines, Kubernetes, and cloud infrastructure. Perfect for developers looking to level up.",
    featured: false
  },
  {
    id: 7,
    title: "Art & Wine Evening",
    date: "Sep 28, 2025",
    time: "5:00 PM",
    location: "Mombasa, Kenya",
    venue: "Tamarind Restaurant",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop"
    ],
    status: "past",
    price: 2000,
    currency: "KES",
    category: "Arts",
    attendees: 150,
    description: "An elegant evening of fine art exhibitions paired with premium wine tasting. Local artists showcased their best works.",
    featured: false
  },
  {
    id: 8,
    title: "Startup Pitch Night",
    date: "Jan 15, 2026",
    time: "5:30 PM",
    location: "Nairobi, Kenya",
    venue: "Sankara Hotel",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
    ],
    status: "upcoming",
    price: 0,
    currency: "KES",
    category: "Tech",
    attendees: 200,
    description: "Watch early-stage startups pitch to investors for funding. Free entry for spectators. Networking cocktail follows.",
    featured: false
  }
];

export default events;

