/* Chamada das Packages que iremos precisar para a nossa aplicação */
var express = require("express"); // chamando o pacote express
var app = express(); // definição da nossa aplicação através do express
var bodyParser = require("body-parser"); // chamando o pacote body-parser
var mongoose = require("mongoose");
var Usuario = require("./app/models/usuario");

mongoose.connect("mongodb://127.0.0.1:27017/dbmidias");

/** Configuração da variável 'app' para usar o 'bodyParser()'.
 * Ao fazermos isso nos permitirá retornar os dados a partir de um POST
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Definição da porta onde será executada a nossa aplicação */
var port = process.env.PORT || 3003;

// Rotas da nossa API:
//==============================================================

/* Aqui o 'router' irá pegar as instâncias das Rotas do Express */
var router = express.Router();

/* Middleware para usar em todos os requests enviados para a nossa API- Mensagem Padrão */
router.use(function (req, res, next) {
  console.log("Algo está acontecendo aqui........");
  next(); // aqui é para sinalizar de que prosseguiremos para a próxima rota. E que não irá parar por aqui!!!
});

/* Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8000/api) */
router.get("/", function (req, res) {
  res.json({ message: "YEAH! Seja Bem-Vindo a nossa API" });
});

// Rotas que irão terminar em '/usuarios' - (servem tanto para: GET All & POST)
router
  .route("/usuarios")

  /* 1) Método: Criar Usuario (acessar em: POST http://localhost:8080/api/usuarios) */
  .post(async function (req, res) {
    try {
      var usuario = new Usuario();

      // aqui setamos os campos do usuario (que virá do request)
      usuario.nome = req.body.nome;
      usuario.login = req.body.login;
      usuario.senha = req.body.senha;

      await usuario.save();

      res.json({ message: "Usuário criado!" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  })

  /* 2) Método: Selecionar Todos (acessar em: GET http://locahost:8080/api/usuarios) */
  .get(async function (req, res) {
    try {
      // Função para Selecionar Todos os 'usuarios' e verificar se há algum erro:
      const usuarios = await Usuario.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

// Rotas que irão terminar em '/usuarios/:index' - (servem tanto para GET by Id, PUT, & DELETE)
router
  .route("/usuarios/:index")

  /* 3) Método: Selecionar Por Id (acessar em: GET http://localhost:8080/api/usuarios/:index) */
  .get(async function (req, res) {
    try {
      // Função para Selecionar Por Id e verificar se há algum erro:
      const usuario = await Usuario.findById(req.params.usuario_id);

      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      res.json(usuario);
    } catch (error) {
      res.status(500).send(error.message);
    }
  })

  /* 4) Método: Atualizar (acessar em: PUT http://localhost:8080/api/usuarios/:index) */
  .put(async function (req, res) {
    try {
      // Primeiro: Para atualizarmos, precisamos primeiro achar o Usuario. Para isso, vamos selecionar por id:
      const usuario = await Usuario.findById(req.params.usuario_id);

      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      // Segundo: Diferente do Selecionar Por Id... a resposta será a atribuição do que encontramos na classe modelo:
      usuario.nome = req.body.nome;
      usuario.login = req.body.login;
      usuario.senha = req.body.senha;

      // Terceiro: Agora que já atualizamos os campos, precisamos salvar essa alteração....
      await usuario.save();

      res.json({ message: "Usuário Atualizado!" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  })

  /* 5) Método: Excluir (acessar em: http://localhost:8080/api/usuarios/:index) */
  .delete(async function (req, res) {
    try {
      // Função para excluir os dados e também verificar se há algum erro no momento da exclusão:
      const result = await Usuario.deleteOne({
        _id: req.params.usuario_id,
      });

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      res.json({ message: "Usuário excluído com Sucesso! " });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

/* Todas as nossas rotas serão prefixadas com '/api' */
app.use("/api", router);

// Iniciando o Servidor (Aplicação):
//==============================================================
app.listen(port, function () {
  console.log("Iniciando a aplicação na porta " + port);
});
