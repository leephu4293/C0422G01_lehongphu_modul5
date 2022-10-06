package com.example.databasemodule5.service;

import com.example.databasemodule5.model.Car;

import java.util.List;

public interface ICarService {
    List<Car> findAll();
    Car findById(int id);
    void updateCar(String number, String name, String email, String phone,
                   String goCome, String goOut, String type, Integer endCome, Integer starGo, Integer id);
    void createCar(Car car);
    void deleteCar(Integer id);

}
