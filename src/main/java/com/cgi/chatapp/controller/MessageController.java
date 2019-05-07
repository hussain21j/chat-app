package com.cgi.chatapp.controller;

import com.cgi.chatapp.data.Message;
import com.cgi.chatapp.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MessageController {
    @Autowired
    MessageService messageService;

    @GetMapping("messages")
    public ResponseEntity getAllMessaes() {
        List<Message> listMessage = messageService.getAllMessages();
        return new ResponseEntity(listMessage, HttpStatus.OK);
    }

    @PostMapping("message")
    public ResponseEntity postMessage(@RequestBody Message message) {
        message = messageService.postMessage(message);
        return new ResponseEntity(message, HttpStatus.OK);
    }
}
