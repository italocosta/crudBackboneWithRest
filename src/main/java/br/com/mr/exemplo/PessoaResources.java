package br.com.mr.exemplo;

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

@Path("/pessoas")
public class PessoaResources {

	private static List<Pessoa> PESSOAS = new ArrayList<Pessoa>();//
	private static Integer idPessoas = 4;
	static {
		PESSOAS.add(new Pessoa(1, "1234567896", "Robson"));
		PESSOAS.add(new Pessoa(2, "2234567892", "Marcio"));
		PESSOAS.add(new Pessoa(3, "3234567896", "Silva"));
		PESSOAS.add(new Pessoa(4, "4234567896", "Penha"));
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response get() {
		return Response.ok().entity(PESSOAS).build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response salva(Pessoa pessoa) {
		pessoa.setId(++idPessoas);
		return Response.ok().entity(PESSOAS.add(pessoa)).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Response get(@PathParam("id") Integer id) {
		for (Pessoa p : PESSOAS) {
			if (p.getId().equals(id)) {
				return Response.ok().entity(p).build();
			}
		}
		return Response.noContent().build();
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Response update(@PathParam("id") Integer id, Pessoa pessoa) {

		for (Pessoa p : PESSOAS) {
			if (p.getId().equals(id)) {
				p.setNome(pessoa.getNome());
				p.setDataNascimento(pessoa.getDataNascimento());
				p.setCpf(pessoa.getCpf());
				return Response.ok().entity(p).build();
			}
		}
		return null;
	}

	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Response delete(@PathParam("id") Integer id) {

		Pessoa toRemove = null;
		for (Pessoa p : PESSOAS) {
			if (p.getId().equals(id)) {
				toRemove = p;
				break;
			}
		}
		boolean remove = PESSOAS.remove(toRemove);
		return Response.ok().entity(remove).build();

	}
}
