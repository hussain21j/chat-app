package com.cgi.chatapp.service;

import com.cgi.chatapp.constants.AppConstants;
import com.cgi.chatapp.data.ChatHistoryMessageDTO;
import com.cgi.chatapp.entity.Message;
import com.cgi.chatapp.entity.MessageRepository;
import com.cgi.chatapp.util.TestUtil;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

/**
 * Unit Test class for @Link{MessageServiceImpl}
 * @author Tayab Hussain
 */
@RunWith(MockitoJUnitRunner.class)
public class MessageServiceImplTest {

    @InjectMocks
    MessageServiceImpl messageService;
    @Mock
    MessageRepository messageRepository;

    @Test
    public void testGetAllMessages() {
        //Given
        Mockito.when(messageRepository.findAllByOrderByTimestampAsc()).thenReturn(getMessageObjects());
        //When
        List<ChatHistoryMessageDTO> listChatHistoryMessageDTO =  messageService.getAllMessages();
        //Then
        Assertions.assertThat(listChatHistoryMessageDTO).hasSize(2);
        Assertions.assertThat(listChatHistoryMessageDTO.get(0).getTimestamp()).isInstanceOf(String.class);
        Assertions.assertThat(listChatHistoryMessageDTO.get(1).getContent()).isEqualToIgnoringCase("Test 2 Content");
    }

    @Test
    public void testSaveMessage() {
        //Given
        Message message = new Message();
        Mockito.when(messageRepository.save(ArgumentMatchers.any())).thenReturn(message);
        //When
        Boolean saveStatus = messageService.saveMessage("sender", "content", AppConstants.MessageType.CHAT);
        //Then
        Assertions.assertThat(saveStatus).isTrue();
    }

    @Test
    public void shouldNotSaveNonChatTypeMessage() {
        //Given
        Message message = new Message();
        Mockito.when(messageRepository.save(ArgumentMatchers.any())).thenReturn(message);
        //When
        Boolean saveStatus = messageService.saveMessage("sender", "content", AppConstants.MessageType.JOIN);
        //Then
        Assertions.assertThat(saveStatus).isFalse();
    }



    @Test
    public void happyFlowGetFormattedTimeStamp() {
        //Given
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        //When
        String formatterTime = messageService.getFormattedTimeStamp(timestamp);
        //Then
        Assertions.assertThat(formatterTime).isNotEmpty();
    }

    private List<Message> getMessageObjects() {
        Message message1 = new Message();
        Message message2 = new Message();
        List<Message> listMessage = new ArrayList();

        message1.setId(1L);
        message1.setSender("sender-1");
        message1.setContent("Test 1 Content");
        message1.setType(AppConstants.MessageType.CHAT);
        message1.setTimestamp(TestUtil.getCurrentTimestamp());
        listMessage.add(message1);

        message2.setId(1L);
        message2.setSender("sender-2");
        message2.setContent("Test 2 Content");
        message2.setType(AppConstants.MessageType.CHAT);
        message2.setTimestamp(TestUtil.getCurrentTimestamp());
        listMessage.add(message2);

        return listMessage;
    }





}