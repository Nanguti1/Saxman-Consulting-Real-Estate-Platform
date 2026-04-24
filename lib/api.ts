import { Property, ApiResponse } from '@/types';

// Helper function to get random house image
const getRandomHouseImage = (index: number): string => {
  const houseImages = [
    '/houses-images/saxman-consulting-real-estate-house-1.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-2.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-3.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-4.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-5.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-6.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-7.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-8.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-9.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-11.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-12.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-13.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-14.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-15.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-16.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-17.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-18.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-19.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-20.jpeg',
    '/houses-images/saxman-consulting-real-estate-house-21.jpeg',
  ];
  return houseImages[index % houseImages.length];
};

const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury Riverside Villa',
    location: 'Riverside, Westlands',
    price: 80000000,
    image: getRandomHouseImage(0),
    type: 'villa',
    bedrooms: 5,
    bathrooms: 5,
    area: 160,
    description: 'These modern and spacious luxury villas are located in the prestigious Grevillea Grove, one of the city\'s premier residential areas. Nestled in a tranquil environment where high-rise buildings are prohibited, these villas offer proximity to international schools, hospitals, shopping centres and some of Nairobi\'s finest restaurants. Features include 3 floors, 5 spacious en-suite bedrooms with walk-in closets, 5.5 bathrooms with premium European sanitary ware, large living area with floating fireplace, 2 modern kitchens, 3-car garage, DSQs, indoor entertainment area, elevator, air-conditioning, home automation, and RO system.'
  },
  {
    id: '2',
    title: 'Modern Kileleshwa Apartment',
    location: 'Kileleshwa, Nairobi',
    price: 15000000,
    image: getRandomHouseImage(1),
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: 145,
    description: 'Contemporary 3-bedroom apartment in the heart of Kileleshwa. Features modern open-plan living, designer kitchen with state-of-the-art appliances, floor-to-ceiling windows, premium wooden flooring, and breathtaking city views. Perfect for professionals seeking luxury urban living.'
  },
  {
    id: '3',
    title: 'Exclusive Lavington Townhouse',
    location: 'Lavington, Nairobi',
    price: 45000000,
    image: getRandomHouseImage(2),
    type: 'townhouse',
    bedrooms: 4,
    bathrooms: 4,
    area: 280,
    description: 'Elegant townhouse in prestigious Lavington. Features 4 spacious bedrooms, modern European kitchen, dining area, family room, DSQ, landscaped garden, and secure parking. Close to international schools and shopping centers.'
  },
  {
    id: '4',
    title: 'Prime Kilimani Penthouse',
    location: 'Kilimani, Nairobi',
    price: 35000000,
    image: getRandomHouseImage(3),
    type: 'penthouse',
    bedrooms: 3,
    bathrooms: 3,
    area: 260,
    description: 'Luxurious penthouse with panoramic city views. Features private rooftop terrace, smart home automation, premium Italian finishes, 3 en-suite bedrooms, modern kitchen, and 24/7 concierge service.'
  },
  {
    id: '5',
    title: 'Westlands Garden Estate',
    location: 'Westlands, Nairobi',
    price: 120000000,
    image: getRandomHouseImage(4),
    type: 'estate',
    bedrooms: 7,
    bathrooms: 6,
    area: 720,
    description: 'Grand estate on 2 acres with guest wing, fully equipped home office suite, staff cottage, swimming pool, tennis court, and expansive gardens. Perfect for diplomatic or executive living.'
  },
  {
    id: '6',
    title: 'Riverside Executive Villa',
    location: 'Riverside, Westlands',
    price: 65000000,
    image: getRandomHouseImage(5),
    type: 'villa',
    bedrooms: 5,
    bathrooms: 5,
    area: 380,
    description: 'Executive villa in prestigious Riverside. Features 5 en-suite bedrooms with walk-in closets, home office, entertainment area, swimming pool, landscaped garden, and 3-car garage. Proximity to international schools and fine dining.'
  },
  {
    id: '7',
    title: 'Kileleshwa Family Home',
    location: 'Kileleshwa, Nairobi',
    price: 25000000,
    image: getRandomHouseImage(6),
    type: 'villa',
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    description: 'Spacious family home in leafy Kileleshwa. Features 4 bedrooms, modern kitchen, living and dining areas, family room, DSQ, garden, and secure parking. Walking distance to schools and shopping.'
  },
  {
    id: '8',
    title: 'Lavington Luxury Apartment',
    location: 'Lavington, Nairobi',
    price: 18000000,
    image: getRandomHouseImage(7),
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    description: 'Modern 2-bedroom apartment in upscale Lavington. Features open-plan living, designer kitchen, premium finishes, balcony, and secure parking. Close to shopping malls and restaurants.'
  },
  {
    id: '9',
    title: 'Kilimani Modern Townhouse',
    location: 'Kilimani, Nairobi',
    price: 32000000,
    image: getRandomHouseImage(8),
    type: 'townhouse',
    bedrooms: 4,
    bathrooms: 3,
    area: 240,
    description: 'Contemporary townhouse in vibrant Kilimani. Features 4 bedrooms, modern kitchen, living area, DSQ, small garden, and parking. Close to Yaya Centre and international schools.'
  },
  {
    id: '10',
    title: 'Westlands Commercial Space',
    location: 'Westlands, Nairobi',
    price: 45000000,
    image: getRandomHouseImage(9),
    type: 'villa',
    bedrooms: 5,
    bathrooms: 4,
    area: 400,
    description: 'Versatile property suitable for residential or commercial use in prime Westlands. Features 5 bedrooms, multiple living areas, kitchen, parking, and excellent accessibility to business districts.'
  },
  {
    id: '11',
    title: 'Riverside Rental Villa',
    location: 'Riverside, Westlands',
    price: 780000,
    image: getRandomHouseImage(10),
    type: 'villa',
    bedrooms: 4,
    bathrooms: 4,
    area: 280,
    description: 'Premium rental villa in prestigious Riverside. Features 4 en-suite bedrooms, modern kitchen, living areas, DSQ, garden, and parking. Ideal for expatriates or executives seeking luxury rental living.'
  },
  {
    id: '12',
    title: 'Kileleshwa Starter Apartment',
    location: 'Kileleshwa, Nairobi',
    price: 10000000,
    image: getRandomHouseImage(11),
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    area: 90,
    description: 'Affordable luxury apartment in desirable Kileleshwa. Features 2 bedrooms, modern kitchen, living area, balcony, and secure parking. Perfect for young professionals or small families.'
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
