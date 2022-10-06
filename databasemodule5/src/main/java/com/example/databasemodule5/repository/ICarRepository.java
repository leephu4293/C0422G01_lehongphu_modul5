package com.example.databasemodule5.repository;


import com.example.databasemodule5.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface ICarRepository extends JpaRepository<Car,Integer> {
    @Query(value = "select * from car", nativeQuery = true)
    List<Car> findAll();

    @Query(value = "select*from car where id=?1", nativeQuery = true)
    Car findById(int id);

    @Modifying
    @Query(value = "UPDATE car AS c  \n" +
            "            SET \n" +
            "                c.car_number = ?1 ,\n" +
            "                c.name_car = ?2, \n" +
            "                c.email = ?3,\n" +
            "                c.phone = ?4, \n" +
            "               c.time_go_come = ?5,\n" +
            "                c.time_go_out = ?6,\n" +
            "               c.type_car = ?7,\n" +
            "                c.end_come = ?8,\n" +
            "               c.star_go = ?9 \n" +
            "            WHERE \n" +
            "       c.id = ?10 ", nativeQuery = true)
   void updateCar(String number, String name, String email, String phone, String goCome,
                  String goOut, String type, Integer endCome, Integer starGo, Integer id);

    @Modifying
    @Query(value = "INSERT INTO car ( car_number, email,name_car,phone, `status`, time_go_come, time_go_out, type_car, end_come, star_go) \n" +
            "VALUES ( ?1,?2,?3,?4,1,?5,?6,?7,?8,?9);", nativeQuery = true)
    void createCar(String number, String email, String name,
                   String phone, String timeGo, String timeOut, String type, Integer endCome,Integer startGo);

    @Modifying
    @Query(value = "delete from car where id=?1", nativeQuery = true)
    void deleteCar(Integer id);
}

