package br.com.anm.produtos.projetocrud.servico;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import br.com.anm.produtos.projetocrud.repositorio.ProdutoRepositorio;
import br.com.anm.produtos.projetocrud.modelo.ProdutoModelo;

@Service
public class ProdutoServico {
    @Autowired
    private ProdutoRepositorio pr;

    public Iterable<ProdutoModelo> listar(){
        return pr.findAll();
    }
}
