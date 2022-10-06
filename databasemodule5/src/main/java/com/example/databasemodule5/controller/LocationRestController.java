package com.example.databasemodule5.controller;

import com.example.databasemodule5.model.LocationCar;
import com.example.databasemodule5.service.ILocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/location")
public class LocationRestController {

    @Autowired
    private ILocationService iLocationService;

    @GetMapping("/list")
    public ResponseEntity<List<LocationCar>> getList(){
        List<LocationCar> list = this.iLocationService.getLocationAll();
        if (list.isEmpty()){
            return new  ResponseEntity<> (HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(list,HttpStatus.OK);
        }
    }
}
