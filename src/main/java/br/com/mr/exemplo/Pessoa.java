package br.com.mr.exemplo;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown=true)
public class Pessoa {
	private Integer id;
	private String cpf;
	private String name;

	private String dateBirthday;

	public Pessoa() {
		// TODO Auto-generated constructor stub
	}

	public Pessoa(Integer id, String cpf, String name) {
		this.id = id;
		this.cpf = cpf;
		this.name = name;
	}

	public Pessoa(Integer id, String cpf, String name, String dateBirthday) {
		this.id = id;
		this.cpf = cpf;
		this.name = name;
		this.dateBirthday = dateBirthday;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDateBirthday() {
		return dateBirthday;
	}

	public void setDateBirthday(String dateBirthday) {
		this.dateBirthday = dateBirthday;
	}

}
