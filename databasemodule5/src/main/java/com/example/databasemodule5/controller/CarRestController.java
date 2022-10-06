package com.example.databasemodule5.controller;

import com.example.databasemodule5.model.Car;
import com.example.databasemodule5.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/restController")
public class CarRestController {
    @Autowired
    private ICarService iCarService;

    @GetMapping("/list")
    public ResponseEntity<List<Car>> getList(){
        List<Car> carList =this.iCarService.findAll();
        if (carList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(carList,HttpStatus.OK);
        }
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Car> findId(@PathVariable int id){
        Car carUp= this.iCarService.findById(id);
        if (carUp == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } return new ResponseEntity<>(carUp,HttpStatus.OK);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<Void> updateCar (@RequestBody Car car, @PathVariable Integer id){
        this.iCarService.updateCar(car.getCarNumber(),car.getNameCar(),car.getEmail(),car.getPhone(),
                car.getTimeGoCome(),car.getTimeGoOut(),car.getTypeCar(),car.getEndCome().getId(),
               car.getStarGo().getId(),id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<Void> createCar( @RequestBody Car car){
     this.iCarService.createCar(car);
     return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Integer id ){
        this.iCarService.deleteCar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}



