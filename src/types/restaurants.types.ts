export type Restaurant = {
  id: number;
  title: string;
  latitude: string;
  longitude: string;
  rating: number;
};

export type RestaurantState = {
  restaurants: Restaurant[];
  loading: boolean;
};
