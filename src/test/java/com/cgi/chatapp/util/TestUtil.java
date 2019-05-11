package com.cgi.chatapp.util;

import java.sql.Timestamp;

public class TestUtil {
    public static Timestamp getCurrentTimestamp() {
        return new Timestamp(System.currentTimeMillis());
    }
}
