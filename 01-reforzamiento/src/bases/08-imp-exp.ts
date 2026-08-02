
import { heroes, type hero} from "../data/heroes.data";

const getHeroById = (id: number): hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id
    });

    return hero;
}

console.log(getHeroById(2));