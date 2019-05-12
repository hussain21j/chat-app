package com.cgi.chatapp.exceptions;

/**
 * Generic Exception for the resource already exists exception
 *
 * @author Tayab Hussain
 */
public class ResourceAlreadyExistsException extends RuntimeException {
    public ResourceAlreadyExistsException(String messsage) {
        super(messsage);
    }
}
