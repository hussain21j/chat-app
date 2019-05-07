package com.cgi.chatapp.entity;

import com.cgi.chatapp.data.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface MessageRepository extends JpaRepository<Message, Long> {

}
