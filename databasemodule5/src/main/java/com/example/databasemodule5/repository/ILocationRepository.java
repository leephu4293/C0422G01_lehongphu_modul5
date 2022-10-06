package com.example.databasemodule5.repository;

import com.example.databasemodule5.model.LocationCar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ILocationRepository extends JpaRepository<LocationCar, Integer> {

    @Query(value = "select*from location_car", nativeQuery = true)
    List<LocationCar> getLocationAll();
}
