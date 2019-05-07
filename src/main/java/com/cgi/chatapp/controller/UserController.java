package com.cgi.chatapp.controller;

import com.cgi.chatapp.data.User;
import com.cgi.chatapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("user/{id}")
    public ResponseEntity getUser(@PathVariable("id") Long userId) {
        User user = userService.getUser(userId);
        return new ResponseEntity(user, HttpStatus.OK);
    }

    @GetMapping("users")
    public ResponseEntity getAllUsers() {
        List<User> listUser = userService.getAllUsers();
        return new ResponseEntity(listUser, HttpStatus.OK);
    }

    @PostMapping("user")
    public ResponseEntity registerUser(@RequestBody User user) {
        user = userService.createUser(user);
        return new ResponseEntity(user, HttpStatus.OK);
    }


}
