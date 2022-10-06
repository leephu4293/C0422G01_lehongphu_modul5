export interface Products {
  id?: number
  name?: string,
  price?: string,
  note?: string,
  category?:{
    id: string,
    name: string
  }
}
