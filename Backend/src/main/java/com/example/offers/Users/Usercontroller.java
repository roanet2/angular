package com.example.offers.Users;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class Usercontroller {

    @Autowired
    private UserService userService;
    private PersonJPARepostistory personJPARepostistory;


    @GetMapping("/test/{id}")
    User test(@PathVariable("id") int param){
        return  personJPARepostistory.findById(param);
    }
//    @GetMapping("/hallo/{id}")
//    User hallo(@PathVariable("id") String param){
//        return  userService.getUserByName(param);
//    }



}
