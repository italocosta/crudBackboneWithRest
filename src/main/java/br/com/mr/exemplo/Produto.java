package br.com.mr.exemplo;

import java.math.BigDecimal;

public class Produto {

	private Integer id;
	private String description;
	private String category;
	private BigDecimal price;
	private Integer quantity;

	public Produto() {

	}

	public Produto(Integer id, String description, String category,
			BigDecimal price, Integer quantity) {
		super();
		this.id = id;
		this.description = description;
		this.category = category;
		this.price = price;
		this.quantity = quantity;
	}

	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	

}
