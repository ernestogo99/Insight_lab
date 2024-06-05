var express = require("express");
var router = express.Router();
var fornecedorservice = require("../services/fornecedor.service");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//listando
router.get("/listar", (req, res, next) => {
  res.json(fornecedorservice.list());
});

//registrando
router.post("/register", (req, res, next) => {
  const fornecedor = fornecedorservice.register(req.body);
  res.json(fornecedor);
});

//atualizando
router.put("/update/:id", (req, res, next) => {
  const fornecedor = fornecedorservice.update(req.params.id, req.body);
  res.json(fornecedor);
});
//delete

router.delete("/delete/:id", (req, res, next) => {
  const ok = fornecedorservice.delete(req.params.id);
  if (ok) return res.json({ sucess: true });
  else return res.json({ sucess: false });
});

//retrieve
router.get("/retrieve/:id", (req, res, next) => {
  const out = fornecedorservice.retrieve(req.params.id);
  return res.json(out);
});
module.exports = router;
