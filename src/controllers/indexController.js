const indexController = {
  showHome(req, res){
    res.render("index", {error: null})
  }
}
module.exports = indexController