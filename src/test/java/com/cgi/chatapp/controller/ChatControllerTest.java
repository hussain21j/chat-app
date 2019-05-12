package com.cgi.chatapp.controller;

import com.cgi.chatapp.ChatAppApplication;
import org.json.JSONException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Integration test for the @Link{ChatController}
 *
 * @author Tayab Hussain
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = ChatAppApplication.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ChatControllerTest {
    @LocalServerPort
    private int port;

    TestRestTemplate restTemplate = new TestRestTemplate();
    HttpHeaders headers = new HttpHeaders();

    @Test
    public void testMessageHistory() throws JSONException {
        //Given
        HttpEntity<String> entity = new HttpEntity<String>(null, headers);
        //When
        ResponseEntity<String> response = restTemplate.exchange(
                createURLWithPort("/chat/history"),
                HttpMethod.GET, entity, String.class);
        String expectedResponseString = "[]";
        //Then
        JSONAssert.assertEquals(expectedResponseString, response.getBody(), false);
    }

    private String createURLWithPort(String uri) {
        return "http://localhost:" + port + uri;
    }


}