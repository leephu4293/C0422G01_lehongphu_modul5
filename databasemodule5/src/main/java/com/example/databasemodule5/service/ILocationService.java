package com.example.databasemodule5.service;

import com.example.databasemodule5.model.LocationCar;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ILocationService {
    @Query(value = "select*from location_car", nativeQuery = true)
    List<LocationCar> getLocationAll();
}
