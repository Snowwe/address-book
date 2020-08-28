export interface IContact {
  id: number;
  surname: string;
  name?: string;
  patronym?: string;
  phone: string;
  isFavorite: boolean;
}
