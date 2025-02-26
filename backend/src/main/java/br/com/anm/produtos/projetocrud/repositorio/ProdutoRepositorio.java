package br.com.anm.produtos.projetocrud.repositorio;
import org.springframework.data.repository.CrudRepository;
import br.com.anm.produtos.projetocrud.modelo.ProdutoModelo;

public interface ProdutoRepositorio extends CrudRepository<ProdutoModelo, Long> {
    
}
