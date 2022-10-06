package com.example.databasemodule5.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LocationCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @OneToMany(mappedBy = "starGo", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Car> carList;

    @OneToMany(mappedBy = "endCome", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Car> carList1;

}
