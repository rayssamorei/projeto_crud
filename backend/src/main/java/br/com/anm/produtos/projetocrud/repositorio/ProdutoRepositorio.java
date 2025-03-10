package br.com.anm.produtos.projetocrud.repositorio;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import br.com.anm.produtos.projetocrud.modelo.ProdutoModelo;

@Repository
public interface ProdutoRepositorio extends CrudRepository<ProdutoModelo, Long> {
    
}
