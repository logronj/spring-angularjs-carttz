package com.mycart.utils;

public class CommonUtils {
	
	 private static final long  MEGABYTE = 1024L * 1024L;

	 public static long bytesToMeg(long bytes) {
	  return bytes / MEGABYTE ;
	 }

}
