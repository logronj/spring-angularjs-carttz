package com.mycart.exceptions;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonFormat;

public class ApiErrorDetail {

	private HttpStatus status;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
	private LocalDateTime timestamp;
	private String message;
	private String debugMessage;
	
		
	public ApiErrorDetail() {
		timestamp = LocalDateTime.now();
	}
	
	public ApiErrorDetail(String message) {
		super();
		this.message = message;
	}



	public ApiErrorDetail(HttpStatus status, String message) {
		super();
		this.status = status;
		this.message = "Unexpected Error";
	}

	public ApiErrorDetail(HttpStatus status, LocalDateTime timestamp, String message, Throwable ex) {
		super();
		this.status = status;
		this.timestamp = timestamp;
		this.message = message;
		this.debugMessage = ex.getLocalizedMessage();
	}

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getDebugMessage() {
		return debugMessage;
	}

	public void setDebugMessage(String debugMessage) {
		this.debugMessage = debugMessage;
	}
	
	
	
	
	

}
