import { Property, ApiResponse } from '@/types';

const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Sky-High Luxury Penthouse',
    location: 'Nairobi, Westlands',
    price: 45000000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    type: 'penthouse',
    bedrooms: 4,
    bathrooms: 4,
    area: 320,
    description: 'Panoramic city views from a sky-high luxury penthouse with private rooftop terrace and smart home automation.'
  },
  {
    id: '2',
    title: 'Serene Karen Villa',
    location: 'Karen, Nairobi',
    price: 38000000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    type: 'villa',
    bedrooms: 5,
    bathrooms: 4,
    area: 480,
    description: 'Serene 0.75-acre walled compound with lush garden, swimming pool and staff quarters in prestigious Karen.'
  },
  {
    id: '3',
    title: 'Modern Ngong Hills Apartment',
    location: 'Kilimani, Nairobi',
    price: 12000000,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: 145,
    description: 'Modern 3-bedroom apartment with open-plan living, designer kitchen and breathtaking Ngong Hills views.'
  },
  {
    id: '4',
    title: 'Ocean Front Luxury Villa',
    location: 'Mombasa, Nyali',
    price: 28000000,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
    type: 'villa',
    bedrooms: 6,
    bathrooms: 5,
    area: 550,
    description: 'Unrivalled Indian Ocean frontage — a six-bedroom luxury villa with direct beach access and infinity pool.'
  },
  {
    id: '5',
    title: 'Executive Townhouse',
    location: 'Runda, Nairobi',
    price: 18500000,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80',
    type: 'townhouse',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    description: 'Elegant townhouse in a boutique gated development with communal pool, gym and secure parking.'
  },
  {
    id: '6',
    title: 'Grand Diplomatic Estate',
    location: 'Muthaiga, Nairobi',
    price: 52000000,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    type: 'estate',
    bedrooms: 7,
    bathrooms: 6,
    area: 720,
    description: 'Grand diplomatic-grade estate on 2 acres with guest wing, fully equipped home office suite and staff cottage.'
  },
  {
    id: '7',
    title: 'Lake Victoria View Condo',
    location: 'Kisumu, Milimani',
    price: 6500000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    area: 105,
    description: 'Contemporary Lake Victoria-view condo with balcony perfect for sundowners, in a secure low-density complex.'
  },
  {
    id: '8',
    title: 'Smart IoT Townhouse',
    location: 'Kitisuru, Nairobi',
    price: 22000000,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    type: 'townhouse',
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    description: 'Affordable luxury townhouse with IoT smart controls, solar panels and only 8 minutes from JKIA.'
  },
  {
    id: '9',
    title: 'Dual-Aspect Penthouse',
    location: 'Kileleshwa, Nairobi',
    price: 35000000,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
    type: 'penthouse',
    bedrooms: 3,
    bathrooms: 3,
    area: 260,
    description: 'Dual-aspect penthouse with private wrap-around terrace, bespoke Italian finishes and 24/7 concierge service.'
  },
  {
    id: '10',
    title: 'UN Complex Family Home',
    location: 'Gigiri, Nairobi',
    price: 18000000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    type: 'villa',
    bedrooms: 5,
    bathrooms: 4,
    area: 420,
    description: 'Sought-after family home within walking distance of UN complex, top international schools and boutique shopping.'
  },
  {
    id: '11',
    title: 'Rift Valley Panorama Villa',
    location: 'Nakuru, Milimani',
    price: 9500000,
    image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600&q=80',
    type: 'villa',
    bedrooms: 4,
    bathrooms: 3,
    area: 300,
    description: 'Architecturally designed home perched above Nakuru town with sweeping Great Rift Valley panoramas.'
  },
  {
    id: '12',
    title: 'Beachside Tropical Villa',
    location: 'Diani Beach',
    price: 42000000,
    image: 'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=600&q=80',
    type: 'villa',
    bedrooms: 3,
    bathrooms: 3,
    area: 220,
    description: 'Sun-drenched beachside villa with makuti thatched roof, private courtyard plunge pool and lush tropical garden.'
  }
];

export const fetchProperties = async (): Promise<ApiResponse<Property>> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    data: mockProperties,
    success: true,
    message: 'Properties fetched successfully'
  };
};

export const fetchPropertyById = async (id: string): Promise<ApiResponse<Property>> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const property = mockProperties.find(p => p.id === id);
  
  if (!property) {
    return {
      data: [],
      success: false,
      message: 'Property not found'
    };
  }
  
  return {
    data: [property],
    success: true,
    message: 'Property fetched successfully'
  };
};
