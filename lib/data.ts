// Centralized Data Structure - Single Source of Truth for all images, services, and projects

// ============================================
// TYPES
// ============================================

export interface ProjectImage {
  id: string;
  url: string;
  projectName: string;
  projectDescription?: string;
  location?: string;
  completedDate?: string;
  services: string[];           // e.g., ["Interior Painting", "Wood Polish"]
  serviceCategories: string[];  // e.g., ["Surface Finishes", "Wood Works"]
  tags: string[];               // Additional tags for filtering
  isFeatured?: boolean;
}

export interface Feedback {
  name: string;
  rating: number;
  comment: string;
}

export interface NestedSubcategory {
  id: string;
  title: string;
  description: string;
  images: string[];
  gallery: string[];
  feedbacks: Feedback[];
}

export interface Subcategory {
  id: string;
  title: string;
  description: string;
  images: string[];
  gallery: string[];
  feedbacks: Feedback[];
  nestedSubcategories?: NestedSubcategory[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  bgGradient: string;
  imagePath: string;
  subcategories: Subcategory[];
}

export interface Project {
  id: number;
  name: string;
  category: string;
  description?: string;
  location?: string;
  completedDate?: string;
  serviceCategory: string;
  serviceSubcategory: string;
  serviceNestedSubcategory: string | null;
  services: string[];           // All service tags used in this project
  previewImages: string[];
  allImages: string[];
  feedbacks: Feedback[];
  isFeatured?: boolean;
}

// ============================================
// SERVICES DATA
// ============================================

export const services: Service[] = [
  {
    id: 1,
    title: "MEP Services",
    description: "Professional Mechanical, Electrical, and Plumbing services for your home and business.",
    bgGradient: "from-blue-100 to-cyan-50",
    imagePath: "/service-1.png",
    subcategories: [
      {
        id: "electric",
        title: "Electric",
        description: "Complete electrical solutions including wiring, installations, repairs, and maintenance services.",
        images: [
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
        ],
        gallery: [
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
        ],
        feedbacks: [
          { name: "Rajesh Kumar", rating: 5, comment: "Excellent electrical work! Professional and safe installation." },
        ],
      },
      {
        id: "plumbing",
        title: "Plumbing",
        description: "Expert plumbing services including installation, repairs, maintenance, and water supply solutions.",
        images: [
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
        ],
        gallery: [
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
        ],
        feedbacks: [
          { name: "Sunita Agarwal", rating: 5, comment: "Great plumbing service. Fixed all our water issues!" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Interior & Furnishing",
    description: "Complete interior solutions including polishing, wood works, and fixed installations.",
    bgGradient: "from-amber-50 to-yellow-50",
    imagePath: "/service-2.png",
    subcategories: [
      {
        id: "polishing-pu-duco",
        title: "Polishing & PU & Duco",
        description: "Professional polishing services including PU coating and Duco finishing for furniture and surfaces.",
        images: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        ],
        gallery: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        ],
        feedbacks: [
          { name: "Amit Patel", rating: 5, comment: "Excellent polishing work. Furniture looks brand new!" },
        ],
        nestedSubcategories: [
          {
            id: "polishing",
            title: "Polishing",
            description: "Professional polishing services for furniture and wooden surfaces.",
            images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Amit Patel", rating: 5, comment: "Excellent polishing work. Furniture looks brand new!" }],
          },
          {
            id: "duco",
            title: "Duco",
            description: "Premium Duco finishing services for a smooth and durable surface.",
            images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Priya Sharma", rating: 5, comment: "Beautiful Duco finish. Very satisfied!" }],
          },
          {
            id: "pu",
            title: "PU",
            description: "High-quality PU coating services for enhanced durability and protection.",
            images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Vikram Singh", rating: 5, comment: "Great PU coating. Very durable!" }],
          },
        ],
      },
      {
        id: "wood-works",
        title: "Wood Works",
        description: "Custom wood work solutions for all your furniture and carpentry needs.",
        images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
        gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
        feedbacks: [],
        nestedSubcategories: [
          {
            id: "modular-furniture",
            title: "Modular Furniture",
            description: "Custom modular furniture solutions tailored to your space and needs.",
            images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Priya Sharma", rating: 5, comment: "Beautiful modular furniture. Perfect fit!" }],
          },
          {
            id: "custom-carpentry",
            title: "Custom Carpentry",
            description: "Expert carpentry services for custom furniture and built-in solutions.",
            images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Vikram Singh", rating: 5, comment: "Amazing custom carpentry work!" }],
          },
          {
            id: "wardrobes",
            title: "Wardrobes",
            description: "Custom wardrobe solutions designed to maximize your storage space.",
            images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Anita Mehta", rating: 5, comment: "Perfect wardrobes. Great storage solutions!" }],
          },
          {
            id: "kitchen-wood",
            title: "Kitchen",
            description: "Custom kitchen cabinets and wood work solutions.",
            images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Rahul Mehta", rating: 5, comment: "Beautiful kitchen cabinets!" }],
          },
        ],
      },
      {
        id: "fixed-installation",
        title: "Fixed Installation",
        description: "Professional fixed installation services for storage units, wall panels, and electrical units.",
        images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
        gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
        feedbacks: [],
        nestedSubcategories: [
          {
            id: "storage-units",
            title: "Storage Units",
            description: "Custom storage unit installations for optimal space utilization.",
            images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Sneha Patel", rating: 5, comment: "Great storage solutions!" }],
          },
          {
            id: "wall-panels",
            title: "Wall Panels",
            description: "Modern wall panel installations for enhanced aesthetics.",
            images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Amit Singh", rating: 5, comment: "Beautiful wall panels!" }],
          },
          {
            id: "electrical-units",
            title: "Electrical Units",
            description: "Fixed electrical unit installations and integrations.",
            images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Rajesh Kumar", rating: 5, comment: "Professional electrical installations!" }],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Surfaces Finishes",
    description: "Premium surface finishing solutions including painting and flooring services.",
    bgGradient: "from-amber-100 to-orange-50",
    imagePath: "/service-3.png",
    subcategories: [
      {
        id: "painting-services",
        title: "Painting Services",
        description: "Comprehensive painting solutions for interior and exterior surfaces.",
        images: ["https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop"],
        gallery: ["https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop"],
        feedbacks: [],
        nestedSubcategories: [
          {
            id: "interior-painting",
            title: "Interior Painting",
            description: "Professional interior painting services for homes and offices.",
            images: ["https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Rahul Mehta", rating: 5, comment: "Beautiful interior paint job!" }],
          },
          {
            id: "exterior-painting",
            title: "Exterior Painting",
            description: "Durable exterior painting solutions for all weather conditions.",
            images: ["https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Sneha Patel", rating: 5, comment: "Great exterior paint work!" }],
          },
          {
            id: "texture-paint",
            title: "Texture Paint",
            description: "Artistic texture painting for unique wall finishes.",
            images: ["https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Vikram Singh", rating: 5, comment: "Amazing texture paint!" }],
          },
          {
            id: "waterproofing",
            title: "Waterproofing",
            description: "Expert waterproofing solutions for protection against moisture.",
            images: ["https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Anita Mehta", rating: 5, comment: "Effective waterproofing!" }],
          },
        ],
      },
      {
        id: "flooring",
        title: "Flooring",
        description: "Premium flooring solutions including tiles, vinyl, and more.",
        images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
        gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
        feedbacks: [],
        nestedSubcategories: [
          {
            id: "tile-flooring",
            title: "Tile Flooring",
            description: "Professional tile installation for floors and walls.",
            images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Amit Patel", rating: 5, comment: "Perfect tile work!" }],
          },
          {
            id: "vinyl-flooring",
            title: "Vinyl Flooring",
            description: "Modern vinyl flooring solutions for a contemporary look.",
            images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Priya Sharma", rating: 5, comment: "Love the vinyl flooring!" }],
          },
          {
            id: "wooden-flooring",
            title: "Wooden Flooring",
            description: "Elegant wooden flooring for a warm and natural feel.",
            images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Rajesh Kumar", rating: 5, comment: "Beautiful wooden floors!" }],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Upgrades & Renovations",
    description: "Complete renovation solutions for homes, offices, and commercial spaces.",
    bgGradient: "from-emerald-50 to-teal-50",
    imagePath: "/service-4.png",
    subcategories: [
      {
        id: "full-home-renovation",
        title: "Full Home Renovation",
        description: "Complete home transformation services from design to execution.",
        images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"],
        gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"],
        feedbacks: [],
        nestedSubcategories: [
          {
            id: "residential-area",
            title: "Residential Area",
            description: "Complete residential renovation services.",
            images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Anita Mehta", rating: 5, comment: "Amazing residential renovation!" }],
          },
          {
            id: "commercial-space",
            title: "Commercial Space",
            description: "Professional commercial space renovations.",
            images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Rajesh Kumar", rating: 5, comment: "Great commercial renovation!" }],
          },
          {
            id: "bars-shops-restaurant",
            title: "Bars & Shops & Restaurant",
            description: "Specialized renovations for hospitality and retail spaces.",
            images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"],
            gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"],
            feedbacks: [{ name: "Sunita Agarwal", rating: 5, comment: "Perfect restaurant renovation!" }],
          },
        ],
      },
      {
        id: "kitchen-renovation",
        title: "Kitchen Renovation",
        description: "Modern kitchen transformation services.",
        images: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"],
        gallery: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"],
        feedbacks: [{ name: "Priya Sharma", rating: 5, comment: "Dream kitchen achieved!" }],
      },
      {
        id: "bathroom-renovation",
        title: "Bathroom Renovation",
        description: "Complete bathroom makeover services.",
        images: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop"],
        gallery: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop"],
        feedbacks: [{ name: "Vikram Singh", rating: 5, comment: "Spa-like bathroom now!" }],
      },
    ],
  },
  {
    id: 5,
    title: "Interior Planning & Design",
    description: "Professional interior planning, furniture design, and 2D/3D visualization services to bring your vision to life.",
    bgGradient: "from-purple-100 to-pink-50",
    imagePath: "https://i.pinimg.com/1200x/2e/ec/16/2eec16de44834f8e460cccbba831ec2f.jpg",
    subcategories: [
      {
        id: "interior-planning",
        title: "Interior Planning",
        description: "Strategic interior planning services to optimize your space layout and functionality.",
        images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
        gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
        feedbacks: [{ name: "Priya Sharma", rating: 5, comment: "Excellent planning! Made our small space feel spacious." }],
      },
      {
        id: "furniture-design",
        title: "Furniture Design",
        description: "Custom furniture design services tailored to your style and space requirements.",
        images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
        gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"],
        feedbacks: [{ name: "Rahul Mehta", rating: 5, comment: "Unique furniture designs that perfectly fit our home!" }],
      },
      {
        id: "2d-plans",
        title: "2D Plans",
        description: "Detailed 2D floor plans and layouts for your interior project.",
        images: ["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop"],
        gallery: ["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop"],
        feedbacks: [{ name: "Amit Singh", rating: 5, comment: "Very detailed and professional 2D plans. Made execution easy!" }],
      },
      {
        id: "space-planning",
        title: "Space Planning",
        description: "Expert space planning and optimization services to maximize functionality and flow.",
        images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
        gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"],
        feedbacks: [{ name: "Anita Mehta", rating: 5, comment: "Perfect space planning! Every inch utilized beautifully." }],
      },
    ],
  },
];

// ============================================
// PROJECTS DATA (Single Source of Truth)
// ============================================

export const projects: Project[] = [
  {
    id: 1,
    name: "Modern 3BHK Apartment",
    category: "Interior Painting",
    description: "Complete interior transformation of a modern 3BHK apartment in South Delhi",
    location: "South Delhi",
    completedDate: "2024",
    serviceCategory: "Surfaces Finishes",
    serviceSubcategory: "Painting Services",
    serviceNestedSubcategory: "Interior Painting",
    services: ["Interior Painting", "Texture Paint", "Wall Panels"],
    previewImages: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Rahul Mehta", rating: 5, comment: "Excellent work! The team was professional and the finish is flawless." },
      { name: "Sneha Patel", rating: 5, comment: "Love the color choices. The painting quality exceeded our expectations." },
    ],
    isFeatured: true,
  },
  {
    id: 2,
    name: "Luxury Villa Renovation",
    category: "Complete Renovation",
    description: "Full villa renovation with modern amenities",
    location: "Gurgaon",
    completedDate: "2024",
    serviceCategory: "Upgrades & Renovations",
    serviceSubcategory: "Full Home Renovation",
    serviceNestedSubcategory: "Residential Area",
    services: ["Full Home Renovation", "Interior Painting", "Modular Furniture", "Flooring"],
    previewImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Anita Mehta", rating: 5, comment: "Excellent residential renovation! The team transformed our villa beautifully." },
    ],
    isFeatured: true,
  },
  {
    id: 3,
    name: "Office Space Design",
    category: "Commercial Interiors",
    description: "Modern office space design and renovation",
    location: "Noida",
    completedDate: "2024",
    serviceCategory: "Upgrades & Renovations",
    serviceSubcategory: "Full Home Renovation",
    serviceNestedSubcategory: "Commercial Space",
    services: ["Commercial Space", "Interior Painting", "Modular Furniture", "Electrical"],
    previewImages: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Rajesh Kumar", rating: 5, comment: "Great commercial renovation! The office space looks modern and professional." },
    ],
    isFeatured: true,
  },
  {
    id: 4,
    name: "Heritage Home Restoration",
    category: "Wood Polish & PU",
    description: "Heritage furniture restoration with premium polish",
    location: "Old Delhi",
    completedDate: "2024",
    serviceCategory: "Interior & Furnishing",
    serviceSubcategory: "Polishing & PU & Duco",
    serviceNestedSubcategory: null,
    services: ["Polishing", "PU", "Wood Works"],
    previewImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Amit Patel", rating: 5, comment: "My old furniture looks brand new after polishing! Excellent work." },
    ],
    isFeatured: true,
  },
  {
    id: 5,
    name: "Contemporary Penthouse",
    category: "Texture Paint & Feature Walls",
    description: "Luxury penthouse with custom texture walls",
    location: "Gurgaon",
    completedDate: "2024",
    serviceCategory: "Surfaces Finishes",
    serviceSubcategory: "Painting Services",
    serviceNestedSubcategory: "Texture Paint",
    services: ["Texture Paint", "Interior Painting", "Wall Panels"],
    previewImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Vikram Singh", rating: 5, comment: "The texture wall in our living room is absolutely stunning!" },
    ],
  },
  {
    id: 6,
    name: "Restaurant Makeover",
    category: "Commercial Renovation",
    description: "Complete restaurant renovation and design",
    location: "Connaught Place, Delhi",
    completedDate: "2024",
    serviceCategory: "Upgrades & Renovations",
    serviceSubcategory: "Full Home Renovation",
    serviceNestedSubcategory: "Bars & Shops & Restaurant",
    services: ["Bars & Shops & Restaurant", "Interior Painting", "Flooring", "Electrical"],
    previewImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    ],
    allImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    feedbacks: [
      { name: "Sunita Agarwal", rating: 5, comment: "Amazing restaurant renovation! Complete transformation." },
    ],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

// Get all service tags (for filtering)
export function getAllServiceTags(): string[] {
  const tags: Set<string> = new Set();
  
  services.forEach(service => {
    tags.add(service.title);
    service.subcategories.forEach(sub => {
      tags.add(sub.title);
      if (sub.nestedSubcategories) {
        sub.nestedSubcategories.forEach(nested => {
          tags.add(nested.title);
        });
      }
    });
  });
  
  return Array.from(tags);
}

// Get projects by service tag
export function getProjectsByService(serviceTag: string): Project[] {
  return projects.filter(project => 
    project.services.includes(serviceTag) ||
    project.serviceCategory === serviceTag ||
    project.serviceSubcategory === serviceTag ||
    project.serviceNestedSubcategory === serviceTag
  );
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.isFeatured);
}

// Get all feedbacks for a service
export function getFeedbacksForService(serviceTag: string): Feedback[] {
  const feedbacks: Feedback[] = [];
  
  // Get feedbacks from services
  services.forEach(service => {
    if (service.title === serviceTag) {
      service.subcategories.forEach(sub => {
        feedbacks.push(...sub.feedbacks);
        if (sub.nestedSubcategories) {
          sub.nestedSubcategories.forEach(nested => {
            feedbacks.push(...nested.feedbacks);
          });
        }
      });
    }
    
    service.subcategories.forEach(sub => {
      if (sub.title === serviceTag) {
        feedbacks.push(...sub.feedbacks);
        if (sub.nestedSubcategories) {
          sub.nestedSubcategories.forEach(nested => {
            feedbacks.push(...nested.feedbacks);
          });
        }
      }
      
      if (sub.nestedSubcategories) {
        sub.nestedSubcategories.forEach(nested => {
          if (nested.title === serviceTag) {
            feedbacks.push(...nested.feedbacks);
          }
        });
      }
    });
  });
  
  // Get feedbacks from projects
  projects.forEach(project => {
    if (project.services.includes(serviceTag) ||
        project.serviceCategory === serviceTag ||
        project.serviceSubcategory === serviceTag ||
        project.serviceNestedSubcategory === serviceTag) {
      feedbacks.push(...project.feedbacks);
    }
  });
  
  return feedbacks;
}

// Get all images for a service (from services and projects)
export function getImagesForService(serviceTag: string): string[] {
  const images: Set<string> = new Set();
  
  // Get images from services
  services.forEach(service => {
    if (service.title === serviceTag) {
      service.subcategories.forEach(sub => {
        sub.images.forEach(img => images.add(img));
        sub.gallery.forEach(img => images.add(img));
        if (sub.nestedSubcategories) {
          sub.nestedSubcategories.forEach(nested => {
            nested.images.forEach(img => images.add(img));
            nested.gallery.forEach(img => images.add(img));
          });
        }
      });
    }
    
    service.subcategories.forEach(sub => {
      if (sub.title === serviceTag) {
        sub.images.forEach(img => images.add(img));
        sub.gallery.forEach(img => images.add(img));
        if (sub.nestedSubcategories) {
          sub.nestedSubcategories.forEach(nested => {
            nested.images.forEach(img => images.add(img));
            nested.gallery.forEach(img => images.add(img));
          });
        }
      }
      
      if (sub.nestedSubcategories) {
        sub.nestedSubcategories.forEach(nested => {
          if (nested.title === serviceTag) {
            nested.images.forEach(img => images.add(img));
            nested.gallery.forEach(img => images.add(img));
          }
        });
      }
    });
  });
  
  // Get images from projects
  projects.forEach(project => {
    if (project.services.includes(serviceTag) ||
        project.serviceCategory === serviceTag ||
        project.serviceSubcategory === serviceTag ||
        project.serviceNestedSubcategory === serviceTag) {
      project.allImages.forEach(img => images.add(img));
    }
  });
  
  return Array.from(images);
}

// Get service by ID
export function getServiceById(id: number): Service | undefined {
  return services.find(service => service.id === id);
}

// Get subcategory by ID
export function getSubcategoryById(serviceId: number, subcategoryId: string): Subcategory | undefined {
  const service = getServiceById(serviceId);
  return service?.subcategories.find(sub => sub.id === subcategoryId);
}

