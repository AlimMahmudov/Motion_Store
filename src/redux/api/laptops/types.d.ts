  export type Photo = {
    url: string;
  };

  export type GetResponse = {
    id: number;
    photos: { url: string }[];
    brand: string;
    model: string;
    processor: string;
    ram_size: number;
    storage_size: number;
    price: string;
    description: string;
  }[];

