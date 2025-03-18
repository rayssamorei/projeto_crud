package br.com.anm.produtos.projetocrud.controle;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import br.com.anm.produtos.projetocrud.servico.ProdutoServico;
import br.com.anm.produtos.projetocrud.modelo.ProdutoModelo;

@RestController
public class ProdutoControle {

    @Autowired
    private ProdutoServico ps;

    @GetMapping("/listar") public Iterable<ProdutoModelo> listar() {
        return ps.listar();
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModelo pm){
        return ps.cadastrarAlterar(pm, "cadastrar");
    }
    
    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody ProdutoModelo pm){
        return ps.cadastrarAlterar(pm, "alterar");
    }

    @GetMapping("/")
    public String rota() {
        return "A API está funcionando!";
    }
}