package com.cgi.chatapp.service;

import com.cgi.chatapp.data.User;
import com.cgi.chatapp.entity.UserRepository;
import com.cgi.chatapp.exceptions.ResourceAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Transactional(readOnly = true)
    public User getUser(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Resource not found"));
    }

    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public User createUser(User user) {
        userRepository.findByName(user.getName().toUpperCase()).ifPresent(e -> {
            throw new ResourceAlreadyExistsException("user with name "
                    +user.getName()
                    +" already exists");
        });
        user.setName(user.getName().toUpperCase());
        User newCreatedUser = userRepository.save(user);
        return newCreatedUser;
    }

}
