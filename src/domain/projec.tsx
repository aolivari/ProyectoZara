export interface SmartPhoneDetails {
  brand: string;
  model: string;
  price: number;
  imageSrc: string;
}

export interface SmartPhoneData {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
}

export interface SmartPhoneDetailsResponse {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: Specs;
  colorOptions: ColorOptions[];
  storageOptions: StorageOptions[];
  similarProducts: SmartPhoneData[];
}

export interface StorageOptions {
  capacity: string;
  price: number;
}

export interface ColorOptions {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface Specs {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

export interface ShoppingBagItem {
  model: string;
  brand: string;
  price: number;
  imageSrc: string;
  color: string;
  id: string;
  storage: string;
}
