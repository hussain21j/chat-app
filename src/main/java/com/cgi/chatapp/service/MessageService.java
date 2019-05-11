package com.cgi.chatapp.service;

import com.cgi.chatapp.constants.AppConstants;
import com.cgi.chatapp.data.ChatHistoryMessageDTO;

import java.util.List;

public interface MessageService {
    List<ChatHistoryMessageDTO> getAllMessages();
    Boolean saveMessage(String sender, String content, AppConstants.MessageType type);
}
