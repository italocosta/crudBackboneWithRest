package br.com.mr.exemplo;

import java.math.BigDecimal;

public class Produto {

	private Integer id;
	private String descricao;
	private String categoria;
	private BigDecimal preco;
	private Integer quantidade;

	public Produto() {

	}

	public Produto(Integer id, String descricao, String categoria,
			BigDecimal preco, Integer quantidade) {
		super();
		this.id = id;
		this.descricao = descricao;
		this.categoria = categoria;
		this.preco = preco;
		this.quantidade = quantidade;
	}

	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public BigDecimal getPreco() {
		return preco;
	}

	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

}
