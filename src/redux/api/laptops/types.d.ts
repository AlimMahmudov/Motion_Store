  export type Photo = {
    url: string;
  };

  export type GetResponse = {
    isHit: unknown;
    id: number;
    photos: { image: string }[];
    brand: string;
    model: string;
    processor: string;
    ram_size: number;
    storage_size: number;
    price: string;
    description: string;
  }[];

