package com.cgi.chatapp.service;

import com.cgi.chatapp.data.Message;
import com.cgi.chatapp.entity.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    MessageRepository messageRepository;

    @Override
    public List<Message> getMessageHistory(String receiverId, String senderId) {
        return null;
    }

    @Override
    public List<Message> getUnreadMessages(String receiverId, String senderId) {
        return null;
    }

    @Override
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    @Override
    @Transactional
    public Message postMessage(Message message) {
        return messageRepository.save(message);
    }
}
