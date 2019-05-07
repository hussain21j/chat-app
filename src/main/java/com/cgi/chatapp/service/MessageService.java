package com.cgi.chatapp.service;

import com.cgi.chatapp.data.Message;

import java.util.List;

public interface MessageService {
    List<Message> getMessageHistory(String receiverId, String senderId);
    List<Message> getUnreadMessages(String receiverId, String senderId);
    List<Message> getAllMessages();
    Message postMessage(Message message);
}
