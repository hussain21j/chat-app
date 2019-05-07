package com.cgi.chatapp.data;

import com.cgi.chatapp.constants.AppConstants;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

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
    private Long senderId;
    private Long receiverId;
    private LocalDateTime timestamp;
    private AppConstants.MessageStatus status;
}
