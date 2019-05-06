package com.cgi.chatapp.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("user/{id}")
    public User geyUser(@PathVariable("id") Long userId) {
        return userService.getUser(userId);
    }
}
