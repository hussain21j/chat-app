package com.cgi.chatapp.data;

import com.cgi.chatapp.constants.AppConstants;
import lombok.Getter;
import lombok.Setter;

/**
 * DTO class for receiving the JSON request for the API
 * @author Tayab Hussain
 */
@Getter
@Setter
public class ChatMessage {
    private AppConstants.MessageType type;
    private String content;
    private String sender;
}
