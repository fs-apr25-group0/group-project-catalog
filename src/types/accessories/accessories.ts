export type AccessoriesDescription = {
  title: string;
  text: string[];
};

export type Accessory = {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: AccessoriesDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  cell: string[];
};
