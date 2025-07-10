import React, { useEffect, useState } from "react";
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  //Objeto produto
  const produto = {
    codigo: null,
    nome: '',
    marca: '',
    descricao: '',
    preco: '',
    qtdEstoque: '',
    urlImagem: ''
  }

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  //Obter dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  }

  //Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', { //envia uma requisição para o localhost:8080/cadastrar
      method: 'post', //requisição do metodo post
      body: JSON.stringify(objProduto), //converte as informações de objProduto em JSON para o servidor entender
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'

      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => { //retorno convertido
        if (retorno_convertido.mensagem !== undefined) { //se o retorno for indefinido
          alert(retorno_convertido.mensagem); //envia um erro
        } else { // se nao 
          setProdutos([...produtos, retorno_convertido]);// cria um novo produto e adiciona na lista
          alert('Produto cadastrado com sucesso!'); //imite um alert com uma mensagem de sucesso
          limparFormulario(); //limpa o formulario
        }
      })
  }

  //Alterar produto
  const alterar = () => {
    if (objProduto.urlImagem.length > 255) {
      alert("A URL da imagem é muito longa! Máximo de 255 caracteres.");
      return;
    }
    fetch('http://localhost:8080/alterar', {
      method: 'put',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          alert('Produto alterado com sucesso!');

          //Cópia do vetor de produtos
          let vetorTemp = [...produtos];

          //Índice
          let indice = vetorTemp.findIndex((p) => {
            return p.codigo === objProduto.codigo;
          });

          //Alterar produto do vetorTemp
          vetorTemp[indice] = objProduto;

          //Atualizar o vetor de produtos
          setProdutos(vetorTemp);

          limparFormulario();
        }
      })
  }

  //Remover produto
  const remover = () => {
    fetch('http://localhost:8080/remover/' + objProduto.codigo, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem);

        //Cópia do vetor de produtos
        let vetorTemp = [...produtos];

        //Índice
        let indice = vetorTemp.findIndex((p) => {
          return p.codigo === objProduto.codigo;
        });

        //Remover produto do vetorTemp
        vetorTemp.splice(indice, 1);

        //Atualizar o vetor de produtos
        setProdutos(vetorTemp);

        limparFormulario();

      })
  }

  //Limpar formulário
  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  //Selecionar produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);

  }

  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparFormulario} remover={remover} alterar={alterar} />
      <Tabela vetor={produtos} selecionar={selecionarProduto} />
    </div>
  );
}

export default App;