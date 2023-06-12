
import { error } from 'console'
import {bancoHeroes} from './heroDb'

export class HeroService {


    getHeroes() {

        return heroes
    }
    getHero(id) {
        const findedHero = heroes.find((hero) => { return hero.id === id })
        if (!findedHero) {
            throw new error('heroi não candastrado')
        }
        return findedHero
    }

    updateHero(id, data) {
        heroes.forEach( (hero, index) =>{
            if(hero.id === id){
                hero[index] = data
            }


        })

        return heroes.find(hero => id === hero.id )

    }

    createHero(data) {
        return heroes.push(data)
     }
    deleteHero(id) {
        heroes.forEach((hero, index)=>{
            if(hero.id === id){
                if(index > -1){
                    heroes.splice(index, 1)

                }
            }

        })

     }
}