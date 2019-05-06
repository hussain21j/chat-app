package com.cgi.chatapp.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User getUser(Long userId) {
        //to do handle optional
        return userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Resource not found"));
    }

}
