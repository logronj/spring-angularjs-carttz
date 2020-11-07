package com.mycart.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="USER")
public class User extends BaseModel{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="USER_ID",nullable=false,updatable=false)
	private Long id;
	
	@Column(name="FIRST_NAME",columnDefinition="VARCHAR(20)")
	private String firstName;
	
	@Column(name="LAST_NAME",columnDefinition="VARCHAR(20)")
	private String lastName;
	
	@Column(name="USERNAME",columnDefinition="VARCHAR(10)")
	private String userName;
	
	@Column(name="USER_TYPE",columnDefinition="VARCHAR(50)")
	private String userType;
	
	@Column(name="PHOTO",columnDefinition="BLOB")
	private byte[] photo;
	
	public User() {
		super();
	}

	public User(String firstName, String lastName, String userName, String userType, byte[] photo) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.userType = userType;
		this.photo = photo;
	}

	public User(Long id, String firstName, String lastName, String userName, String userType, byte[] photo) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.userType = userType;
		this.photo = photo;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public byte[] getPhoto() {
		return photo;
	}

	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("User [id=");
		builder.append(id);
		builder.append(", firstName=");
		builder.append(firstName);
		builder.append(", lastName=");
		builder.append(lastName);
		builder.append(", userName=");
		builder.append(userName);
		builder.append(", userType=");
		builder.append(userType);
		builder.append("]");
		return builder.toString();
	}

	
	
}
