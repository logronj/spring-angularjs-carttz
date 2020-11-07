package com.mycart.exceptions;

public class AlreadyExistException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	private String userMessage;

	public AlreadyExistException(String message) {
		this.userMessage = message;
	}

	public String getUserMessage() {
		return userMessage;
	}
}
