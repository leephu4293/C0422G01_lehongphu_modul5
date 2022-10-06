package com.example.databasemodule5.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Car {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY )
    private Integer id ;

    private String carNumber;
    private String typeCar;
    private String nameCar;
    private String phone;
    private String email;
    private String timeGoOut;
    private String timeGoCome;
    private int status;

   @ManyToOne
    @JoinColumn(name="starGo", referencedColumnName = "id")
    private LocationCar starGo;

    @ManyToOne
    @JoinColumn(name="endCome", referencedColumnName = "id")
    private LocationCar endCome;
}
