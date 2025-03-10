package br.com.anm.produtos.projetocrud.controle;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import br.com.anm.produtos.projetocrud.servico.ProdutoServico;
import br.com.anm.produtos.projetocrud.modelo.ProdutoModelo;

@RestController
public class ProdutoControle {

    @Autowired
    private ProdutoServico ps;

    @GetMapping("/listar")
    public Iterable<ProdutoModelo> listar(){
        return ps.listar();
    }

    @GetMapping("/")
    public String rota(){
        return "A API está funcionando!";
    }
}