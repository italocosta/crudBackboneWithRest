package br.com.mr.exemplo;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/produtos")
public class ProdutoResources {

	public static List<Produto> PRODUTOS = new ArrayList<Produto>();
	public static Integer IDPRODUTOS = 4;

	static {
		PRODUTOS.add(new Produto(1, "Caderno de Leitura", "Papelaria", new BigDecimal(10.0), 10));
		PRODUTOS.add(new Produto(2, "Procesador Intel Dual Core", "Informática", new BigDecimal(150.55), 15));
		PRODUTOS.add(new Produto(3, "Sabone Palmolivia", "Higiene", new BigDecimal(5.50), 100));
		PRODUTOS.add(new Produto(4, "Notebool LG E500", "Informática", new BigDecimal(1700.50), 5));
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response get() {
		return Response.ok().entity(PRODUTOS).build();
	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response salva(Produto produto) {
		produto.setId(++IDPRODUTOS);
		return Response.ok().entity(PRODUTOS.add(produto)).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Response get(@PathParam("id") Integer id) {
		for (Produto produto : PRODUTOS) {
			if (produto.getId().equals(id)) {
				return Response.ok().entity(produto).build();
			}
		}
		return Response.noContent().build();
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Response update(@PathParam("id") Integer id, Produto produto) {
		for (Produto prod : PRODUTOS) {
			if (prod.getId().equals(produto.getId())) {
				prod.setCategoria(produto.getCategoria());
				prod.setDescricao(produto.getDescricao());
				prod.setPreco(produto.getPreco());
				prod.setQuantidade(produto.getQuantidade());
				return Response.ok().entity(prod).build();
			}
		}
		return null;
	}

	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Response delete(@PathParam("id") Integer id) {
		Produto toRemove = null;
		for (Produto produto : PRODUTOS) {
			if (produto.getId().equals(id)) {
				toRemove = produto;
				break;
			}
		}
		boolean remove = PRODUTOS.remove(toRemove);
		return Response.ok().entity(remove).build();
	}
}
