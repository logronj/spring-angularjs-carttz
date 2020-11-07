package com.mycart.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(AlreadyExistException.class)
	public ResponseEntity<Object> handleTitleAlreadyExistException(AlreadyExistException ex) {
		ApiErrorDetail apiErrorDetail = new ApiErrorDetail();
		apiErrorDetail.setMessage(ex.getUserMessage());
		apiErrorDetail.setStatus(HttpStatus.UNPROCESSABLE_ENTITY);
		return new ResponseEntity<>(apiErrorDetail,HttpStatus.UNPROCESSABLE_ENTITY);
	}
}
