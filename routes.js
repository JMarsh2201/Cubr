const Card = require('./models/card_model').card
const Deck = require('./models/deck_model').deck
const mtg = require('mtgsdk')

// post and view writing prompt entries
module.exports = (router) => {
  //  add delete
  router.route('/cards')
    .post(async (req, res) => {
        req.body.forEach(x => {
          
        })
        let card = new Card();
        let getMtgCard = new Promise((resolve, reject) => {
            mtg.card.where({name: req.body.name})
            .then(results => {
                resolve(results[0])
            })
        })

        let mtgCard = await getMtgCard

        card.cardTypes = mtgCard.types
        card.manaCost = mtgCard.manaCost
        card.colors = mtgCard.colors
        card.rulesText = mtgCard.text
        if (mtgCard.power && mtgCard.toughness) {
            card.power = mtgCard.power
            card.toughness = mtgCard.toughness
        }
        card.art = mtgCard.imageUrl
        
        card.save((err) => {
            if (err) res.send(err)
            res.json(card)
        })
      
    })
    .get((req, res) => {
      Card.find((err, card) => {
        if (err) res.send(err)
        res.json(card)
      });
    });

    // router.route('/decks')
    //   .post((req, res) => {
    //     let deck = new Deck();
    //     deck.body = req.body.body;
    //     tip.save((err) => {
    //       if (err) res.send(err)
    //       res.json({msg: 'u did it'})
    //     })
    //   })
    //   .get((req, res) => {
    //     Tip.find((err, tip) => {
    //       if (err) res.send(err)
    //       res.json(tip)
    //     });
    //   });

    //   router.route('/habit_tips')
    //     .post((req, res) => {
    //       let tip = new HabitTip();
    //       tip.body = req.body.body;
    //       tip.save((err) => {
    //         if (err) res.send(err)
    //         res.json({msg: 'u did it'})
    //       })
    //     })
    //     .get((req, res) => {
    //       Tip.find((err, tip) => {
    //         if (err) res.send(err)
    //         res.json(tip)
    //       });
    //     });
}
