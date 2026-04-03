import { Property, ApiResponse } from '@/types';

const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury Penthouse Suite',
    location: 'Nairobi, Westlands',
    price: 45000000,
    image: '/api/placeholder/400/300',
    type: 'penthouse',
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    description: 'Stunning penthouse with panoramic city views'
  },
  {
    id: '2',
    title: 'Modern Villa Estate',
    location: 'Karen, Nairobi',
    price: 38000000,
    image: '/api/placeholder/400/300',
    type: 'villa',
    bedrooms: 5,
    bathrooms: 4,
    area: 520,
    description: 'Exclusive villa with private garden and pool'
  },
  {
    id: '3',
    title: 'Contemporary Apartment',
    location: 'Kilimani, Nairobi',
    price: 12000000,
    image: '/api/placeholder/400/300',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    description: 'Modern living in the heart of the city'
  },
  {
    id: '4',
    title: 'Executive Family Home',
    location: 'Runda, Nairobi',
    price: 28000000,
    image: '/api/placeholder/400/300',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    description: 'Perfect family home in gated community'
  },
  {
    id: '5',
    title: 'Skyline Apartment',
    location: 'Upper Hill, Nairobi',
    price: 18500000,
    image: '/api/placeholder/400/300',
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    description: 'Breathtaking views from this high-rise apartment'
  },
  {
    id: '6',
    title: 'Garden Villa',
    location: 'Muthaiga, Nairobi',
    price: 52000000,
    image: '/api/placeholder/400/300',
    type: 'villa',
    bedrooms: 6,
    bathrooms: 5,
    area: 650,
    description: 'Luxurious villa with expansive gardens'
  },
  {
    id: '7',
    title: 'Studio Loft',
    location: 'CBD, Nairobi',
    price: 6500000,
    image: '/api/placeholder/400/300',
    type: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    description: 'Chic studio perfect for professionals'
  },
  {
    id: '8',
    title: 'Duplex House',
    location: 'Lavington, Nairobi',
    price: 22000000,
    image: '/api/placeholder/400/300',
    type: 'house',
    bedrooms: 3,
    bathrooms: 3,
    area: 240,
    description: 'Stylish duplex with modern amenities'
  },
  {
    id: '9',
    title: 'Rooftop Penthouse',
    location: 'Kileleshwa, Nairobi',
    price: 35000000,
    image: '/api/placeholder/400/300',
    type: 'penthouse',
    bedrooms: 3,
    bathrooms: 3,
    area: 280,
    description: 'Exclusive rooftop living with terrace'
  },
  {
    id: '10',
    title: 'Family Townhouse',
    location: 'Kitisuru, Nairobi',
    price: 18000000,
    image: '/api/placeholder/400/300',
    type: 'house',
    bedrooms: 4,
    bathrooms: 2,
    area: 200,
    description: 'Spacious townhouse in quiet neighborhood'
  },
  {
    id: '11',
    title: 'Garden Apartment',
    location: 'Parklands, Nairobi',
    price: 9500000,
    image: '/api/placeholder/400/300',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    description: 'Cozy apartment with garden access'
  },
  {
    id: '12',
    title: 'Estate Villa',
    location: 'Langata, Nairobi',
    price: 42000000,
    image: '/api/placeholder/400/300',
    type: 'villa',
    bedrooms: 5,
    bathrooms: 4,
    area: 480,
    description: 'Magnificent villa in prestigious estate'
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
