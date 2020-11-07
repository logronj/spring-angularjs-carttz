package com.mycart.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="PRODUCT")
public class Product extends BaseModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="PRODUCT_ID",nullable=false,updatable=false)
	private Long productId;
	@Column(name="TITLE",columnDefinition="VARCHAR(20)")
	private String title;
	@Column(name="DESCRIPTION",columnDefinition="VARCHAR(250)")
	private String description;
	@Column(name="PHOTO",columnDefinition="BLOB")
	private byte[] photo;
	@Column(name="PRICE",columnDefinition="NUMERIC(19,2)")
	private double price;
	@Column(name="QUANTITY",columnDefinition="NUMERIC(10,2)")
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name="CATEGORY_ID",foreignKey=@ForeignKey(name="FK_PRODUCT_CATEGORY_01"))
	private Category category;

	public Product() {
		super();
	}

	public Product(String title, String description, double price, int quantity,
			Category category) {
		super();
		this.title = title;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.category = category;
	}

	public Product(Long productId, String title, String description, double price,
			int quantity, Category category) {
		super();
		this.productId = productId;
		this.title = title;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.category = category;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getPhoto() {
		return photo;
	}

	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Product [productId=");
		builder.append(productId);
		builder.append(", title=");
		builder.append(title);
		builder.append(", description=");
		builder.append(description);
		builder.append(", price=");
		builder.append(price);
		builder.append(", quantity=");
		builder.append(quantity);
		builder.append(", category=");
		builder.append(category);
		builder.append("]");
		return builder.toString();
	}
	
	
}
