package com.cgi.chatapp.entity;

import com.cgi.chatapp.constants.AppConstants;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;

/**
 * Entity class for the Message
 * @author Tayab Hussain
 */
@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
public class Message {
    @Id
    @GeneratedValue
    private Long id;
    private String content;
    private String sender;
    private Timestamp timestamp;
    private AppConstants.MessageType type;
}
