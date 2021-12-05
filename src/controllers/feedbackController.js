const { Feedback } = require("../models")
const feedbackController = {
  async createFeedback(req, res){
    const { name, email, message } = req.body
    try {
      const feedbackCreated = await Feedback.create({
        name,
        email,
        message,
        create_at: new Date().toISOString()
      })

      if(feedbackCreated != null)
        return res.redirect("/home")
    } catch (error) {
      return res.render("index", {error: "Erro ao enviar feedback. Tente Novamente mais tarde!"})
    }
  }
}
module.exports = feedbackController;