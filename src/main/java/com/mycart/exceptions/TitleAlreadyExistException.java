package com.mycart.exceptions;

public class TitleAlreadyExistException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	private String userMessage;
	public TitleAlreadyExistException(String message) {
		this.userMessage = message;
	}

	public String getUserMessage() {
		return userMessage;
	}
}
