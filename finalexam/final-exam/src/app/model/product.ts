export interface Product {
  id?: number
  name?: string,
  price?: string,
  note?: string,
  category?:{
    id: string,
    name: string
  }
}
