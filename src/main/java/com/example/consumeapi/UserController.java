package com.example.consumeapi;

import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResponseExtractor;
import org.springframework.web.client.RestTemplate;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Welcome
 */
@RestController
@CrossOrigin
public class UserController {

    //declared url
private static final String URL="https://jsonplaceholder.typicode.com/users";
   

    @RequestMapping("/users")
    public String featchUserData() {
        
//this line will use create object for call rest template , this is spring feature for call apis
         RestTemplate restTemplate = new RestTemplate();
         //here i am calling rest api which you provided, and am getting response in string format,
         //instead of string we can put any object but propertis should match to response and given class, string will support for all kind of response
         String output=restTemplate.getForObject(URL,String.class);
         
         //here i am returning output to front end
         return output;
    }
}
