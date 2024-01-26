class Hero{
    constructor(heroName, heroPoints) {
        this.name = heroName;
        this.points = heroPoints;
    }
    showHeroInfo() {
        alert(`Герой ${this.name}, має ${this.points} хр`)
    }
    addPoints(pointsToAdd) {
        this.points += pointsToAdd;
        return this.points;
    }
}

class Elf extends Hero {
    constructor(elfHair, elfEars, elfAge, elfName, elfPoints) {
        super(elfName, elfPoints)
        this.hair = elfHair;
        this.ears = elfEars;
        this.age = elfAge
        super(elfName, elfPoints)
    } 
    makeMagic() {
        alert(`Кльф ${this.name} запустив магію. баланас : ${this.points} xp`)
    }

}

const rollandElf = new Elf('green', 20, 391, 'Rolland', 4)
const pashaElf = new Elf('brown', 16, 1039, 'Pasha', 32)
console.log(rollandElf, pashaElf)

class Ork extends Hero {
    constructor(orkSkin, orkSmart, orkWeapon, orkName, orkPoints) {
        super(orkName, orkPoints)
        this.skin = orkSkin;
        this.smart = orkSmart;
        this.weapon = orkWeapon
        super(orkName, orkPoints)
    } 
    makeAttack() {
        alert(`Орк ${this.name} атакує єльфів використвши ${this.weapon}. баланас : ${this.points} xp`)
    }

}

const turuk = new Ork('green', 100, 'bomb', 'Turuk', 59)
const biber = new Ork('green', 101, 'glock', 'Bibew', 34)

turuk.makeAttack();
turuk.addPoints(10);
turuk.showHeroInfo();

rollandElf.makeMagic();
rollandElf.addPoints(20);
rollandElf.showHeroInfo();

biber.makeAttack();
biber.addPoints(5);
biber.showHeroInfo();

rollandElf.makeMagic();
rollandElf.addPoints(40);
rollandElf.showHeroInfo();