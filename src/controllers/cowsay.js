const cowsay = require('cowsay')

class CowsayController {
  async saySomething (req, res) {
    const { message } = req.body;

    try {
      const cowsayMessage = message || 'Hola, soy una vaca programadora';

      res.status(200).send(
        cowsay.say({
          text : cowsayMessage,
        })
      )
    } 
    catch (e) {
      console.error(e)
      res.status(400).send('Ha ocurrido un problema')
    }
  }
}

module.exports = new CowsayController();