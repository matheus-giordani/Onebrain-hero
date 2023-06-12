import express from 'express'
import {HeroService} from './hero.service'

const app = express()

const heroService = new HeroService()

app.get('/api/hero', (req, res) => {
    return res.status(200).json(heroService.getHeroes())
})
app.get('/api/hero/:id', (req, res) =>{
    const id = req.params.id
    const hero = heroService.getHero(id)
    if (hero) {
        return res.status(200).json(hero)
    }
    return res.status(404)

})
app.post('/api/hero', (req, res) => {
    const body = req.body
    return res.status(201).json(heroService.createHero(body))
})
app.put('/api/hero/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    const hero = heroService.getHero(id)
    if (hero) {
        return res.status(200).json(heroService.updateHero(id, body))
    }
    return res.status(404)
})
app.delete('/api/hero/:id', (req, res) => {
    const id = req.params.id
    const hero = heroService.getHero(id)
    if (hero) {
        return res.status(200).json(heroService.deleteHero(id))
    }
    return res.status(404)
})

app.listen(3000, () =>
    console.log(`App listening on port ${3000}!`),
);