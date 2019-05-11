package com.cgi.chatapp.entity;

import com.cgi.chatapp.constants.AppConstants;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Timestamp;
import java.util.List;

/**
 * Test class for the {MessageRepository}
 * @author Tayab Hussain
 */
@RunWith(SpringRunner.class)
@DataJpaTest
@EnableJpaRepositories(basePackageClasses = MessageRepository.class)
@EntityScan(basePackageClasses = Message.class)
public class MessageRepositoryTest {
    @Autowired
    MessageRepository messageRepository;

    @Test
    public void testSaveMessage() {
        //Given
        Message message = getMessageObject("name", "Test Message", AppConstants.MessageType.CHAT, getCurrentTimestamp());
        //When
        Message savedMessage = messageRepository.save(message);
        //Then
        Assertions.assertThat(savedMessage).isNotNull();
        Assertions.assertThat(savedMessage.getSender()).isEqualToIgnoringCase("name");
    }

    @Test
    public void testFindAllByOrderByTimestampAsc() {
        //Given
        Message message1 = getMessageObject("Tom", "Hello TOM", AppConstants.MessageType.CHAT, Timestamp.valueOf("2019-10-02 18:48:05.123456"));
        Message message2 = getMessageObject("Alice", "Hello Alice", AppConstants.MessageType.CHAT, Timestamp.valueOf("2019-10-02 18:48:06.123456"));
        Message message3 = getMessageObject("BOB", "Hello BOB", AppConstants.MessageType.CHAT, Timestamp.valueOf("2019-10-03 18:48:05.123456"));
        messageRepository.save(message1);
        messageRepository.save(message2);
        messageRepository.save(message3);
        //when
        List<Message> listMessage =  messageRepository.findAllByOrderByTimestampAsc();
        //Then
        Assertions.assertThat(listMessage).hasSize(3);
        Assertions.assertThat(listMessage.get(0).getSender()).isEqualToIgnoringCase("Tom");
        Assertions.assertThat(listMessage.get(1).getSender()).isEqualToIgnoringCase("Alice");
        Assertions.assertThat(listMessage.get(2).getSender()).isEqualToIgnoringCase("Bob");
    }

    private Timestamp getCurrentTimestamp() {
        return new Timestamp(System.currentTimeMillis());
    }

    private Message getMessageObject(String sender, String content, AppConstants.MessageType type, Timestamp timestamp) {
        Message message = new Message();
        message.setSender(sender);
        message.setContent(content);
        message.setType(type);
        message.setTimestamp(timestamp);
        return message;
    }

}