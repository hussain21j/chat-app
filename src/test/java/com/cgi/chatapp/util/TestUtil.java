package com.cgi.chatapp.util;

import java.sql.Timestamp;

/**
 * Utility class for unit test
 *
 * @author Tayab Hussain
 */
public class TestUtil {
    public static Timestamp getCurrentTimestamp() {
        return new Timestamp(System.currentTimeMillis());
    }
}
