package com.cgi.chatapp.entity;

import com.cgi.chatapp.data.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import javax.jws.soap.SOAPBinding;
import java.util.Optional;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByName(String name);
}
