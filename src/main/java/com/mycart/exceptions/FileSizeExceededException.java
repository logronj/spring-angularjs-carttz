package com.mycart.exceptions;


public class FileSizeExceededException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	private ApiErrorDetail apiErrorDetail;

	public FileSizeExceededException(ApiErrorDetail apiErrorDetail) {
		this.apiErrorDetail = apiErrorDetail;
	}

	public ApiErrorDetail getApiErrorDetail() {
		return apiErrorDetail;
	}

	public void setApiErrorDetail(ApiErrorDetail apiErrorDetail) {
		this.apiErrorDetail = apiErrorDetail;
	}
	
}
