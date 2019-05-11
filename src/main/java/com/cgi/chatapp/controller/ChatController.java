package com.cgi.chatapp.controller;

import com.cgi.chatapp.data.ChatHistoryMessageDTO;
import com.cgi.chatapp.data.ChatMessage;
import com.cgi.chatapp.service.MessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * The controller for the application
 * @author Tayab Hussain
 */
@Controller
@Slf4j
public class ChatController {
    @Autowired
    MessageService messageService;

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {
        log.info("message sent by "+chatMessage.getSender());
        messageService.saveMessage(chatMessage.getSender(), chatMessage.getContent(), chatMessage.getType());
        return chatMessage;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public ChatMessage addUser(@Payload ChatMessage chatMessage,
                               SimpMessageHeaderAccessor headerAccessor) {
        // Add username in web socket session
        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        return chatMessage;
    }

    @CrossOrigin
    @GetMapping("messagehistory")
    public ResponseEntity getAllMessages() {
        List<ChatHistoryMessageDTO> listMessage =  messageService.getAllMessages();
        return new ResponseEntity(listMessage, HttpStatus.OK);
    }
}
