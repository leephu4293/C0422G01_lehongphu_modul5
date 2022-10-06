export interface Car {
  id?: string,
  carNumber?: string,
  typeCar?: string,
  nameCar?: string,
  phone?: string,
  email?: string,
  timeGoOut?: string,
  timeGoCome?: string,
  starGo:{
    id: string,
    name: string
  },
  endCome:{
    id: string,
    name: string
}

}
