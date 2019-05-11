package com.cgi.chatapp.data;

import com.cgi.chatapp.constants.AppConstants;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * The DTO class to carry chat history response
 * @author Tayab Hussain
 */
@Getter
@Setter
@Builder
public class ChatHistoryMessageDTO {
    private AppConstants.MessageType type;
    private String sender;
    private String content;
    private String timestamp;
}
