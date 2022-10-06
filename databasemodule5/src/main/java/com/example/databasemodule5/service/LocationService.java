package com.example.databasemodule5.service;

import com.example.databasemodule5.model.LocationCar;
import com.example.databasemodule5.repository.ILocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService implements ILocationService {
    @Autowired
    private ILocationRepository iLocationRepository;


    @Override
    public List<LocationCar> getLocationAll() {
        return this.iLocationRepository.getLocationAll();
    }
}
