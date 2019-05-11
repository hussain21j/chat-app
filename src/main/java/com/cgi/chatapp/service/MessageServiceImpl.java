package com.cgi.chatapp.service;

import com.cgi.chatapp.constants.AppConstants;
import com.cgi.chatapp.data.ChatHistoryMessageDTO;
import com.cgi.chatapp.entity.Message;
import com.cgi.chatapp.entity.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Implementation of {@Link MessageService}
 * @author Tayab Hussain
 */
@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    MessageRepository messageRepository;

    @Override
    public List<ChatHistoryMessageDTO> getAllMessages() {
        List<Message> listMessage = messageRepository.findAllByOrderByTimestampAsc();
        List<ChatHistoryMessageDTO> listChatHistoryMessage = new ArrayList<>();
        listMessage.forEach(message -> {
            listChatHistoryMessage.add(ChatHistoryMessageDTO.builder()
                    .type(message.getType())
                    .sender(message.getSender())
                    .content(message.getContent())
                    .timestamp(getFormattedTimeStamp(message.getTimestamp())).build());
        });
        return listChatHistoryMessage;
    }


    @Override
    @Transactional
    public Boolean saveMessage(String sender, String content, AppConstants.MessageType type) {
        if(type != AppConstants.MessageType.CHAT) {
            return false;
        }

        Message message = new Message();
        Message savedMessage;
        message.setSender(sender);
        message.setContent(content);
        message.setType(type);
        message.setTimestamp(getCurrentTimestamp());

        savedMessage = messageRepository.save(message);
        return Objects.isNull(savedMessage) ? false : true;
    }

    private Timestamp getCurrentTimestamp() {
        return new Timestamp(System.currentTimeMillis());
    }

    public String getFormattedTimeStamp(Timestamp timestamp) {
        return new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(timestamp);
    }

}
