import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "../model/car";
import {LocationCar} from "../model/location-car";


@Injectable({
  providedIn: 'root'
})
export class FinalService {

  constructor(private httpClient: HttpClient) { }
  getAllCrud(){
    return this.httpClient.get<Car[]>('http://localhost:8080/restController/list')
  }

  findByIdFinal(id: string ){
    return this.httpClient.get<Car>('http://localhost:8080/restController/find/'+ id)
  }

  updateFinal(carUp:Car){
    console.log(carUp)
    return this.httpClient.patch('http://localhost:8080/restController/update/'+ carUp.id, carUp)
  }
  deleteFinal(id: string){
    return this.httpClient.delete('http://localhost:8080/restController/delete/'+ id);
  }

  getLocationList(){
    return this.httpClient.get<LocationCar[]>("http://localhost:8080/location/list");
  }

  createdCar(carCre: Car){
    return this.httpClient.post('http://localhost:8080/restController/create', carCre )
  }
}
