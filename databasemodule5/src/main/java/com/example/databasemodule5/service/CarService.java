package com.example.databasemodule5.service;

import com.example.databasemodule5.model.Car;
import com.example.databasemodule5.repository.ICarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService implements ICarService {
    @Autowired
    private ICarRepository iCarRepository;


    @Override
    public List<Car> findAll() {
        return this.iCarRepository.findAll();
    }

    @Override
    public Car findById(int id) {
        return this.iCarRepository.findById(id);
    }

    @Override
    public void updateCar(String number, String name, String email, String phone,
                          String goCome, String goOut, String type, Integer endCome, Integer starGo, Integer id) {
        this.iCarRepository.updateCar(number,name,email,phone,goCome,goOut,type,endCome,starGo,id);

    }

    @Override
    public void createCar(Car car) {
        this.iCarRepository.createCar(car.getCarNumber(),car.getEmail(),car.getNameCar(),car.getPhone(),
                car.getTimeGoCome(),car.getTimeGoOut(),car.getTypeCar(),car.getEndCome().getId(),
                car.getStarGo().getId());
    }

    @Override
    public void deleteCar(Integer id) {
        this.iCarRepository.deleteCar(id);
    }


}
