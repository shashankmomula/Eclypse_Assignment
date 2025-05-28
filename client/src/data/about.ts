export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface AboutData {
  company: {
    name: string;
    founded: string;
    mission: string;
    vision: string;
    values: string[];
  };
  story: {
    title: string;
    content: string;
  };
  team: TeamMember[];
  stats: {
    customers: number;
    products: number;
    countries: number;
    years: number;
  };
}

// About section data as its is not dynamic

export const aboutData: AboutData = {
  company: {
    name: "Eclypse",
    founded: "2020",
    mission: "To revolutionize the fashion industry by providing sustainable, high-quality products that empower individuals to express their unique style.",
    vision: "To become the world's most trusted destination for sustainable fashion and lifestyle products.",
    values: [
      "Sustainability",
      "Innovation",
      "Quality",
      "Customer Satisfaction",
      "Social Responsibility"
    ]
  },
  story: {
    title: "Our Journey",
    content: "Founded in 2020, Eclypse began with a simple idea: to create a fashion brand that combines style with sustainability. What started as a small online store has grown into a global platform, serving customers in over 50 countries. Our commitment to quality and ethical practices has helped us build a loyal community of fashion enthusiasts who share our values."
  },
  team: [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1622460240826-7aaf04b78b53?q=80&w=1954&auto=format&fit=crop",
      bio: "With over 15 years of experience in the fashion industry, Sarah leads our company with passion and vision."
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://plus.unsplash.com/premium_photo-1663045511895-e882ddcb7fec?q=80&w=2070&auto=format&fit=crop",
      bio: "Michael brings innovative design concepts and creative direction to our product development."
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      role: "Sustainability Officer",
      image: "https://images.unsplash.com/photo-1598387746216-506f6bd47aad?q=80&w=1974&auto=format&fit=crop",
      bio: "Emma ensures that our environmental and social impact remains positive and sustainable."
    }
  ],
  stats: {
    customers: 100000,
    products: 5000,
    countries: 50,
    years: 4
  }
}; 