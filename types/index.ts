export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  type: 'apartment' | 'house' | 'villa' | 'penthouse' | 'townhouse' | 'estate';
  bedrooms: number;
  bathrooms: number;
  area: number;
  description?: string;
}

export interface ApiResponse<T> {
  data: T[];
  success: boolean;
  message?: string;
}

export type PropertyType = Property['type'];
export type SortOption = 'price-asc' | 'price-desc' | 'newest' | 'oldest';
export type FilterOptions = {
  type?: PropertyType;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
};
