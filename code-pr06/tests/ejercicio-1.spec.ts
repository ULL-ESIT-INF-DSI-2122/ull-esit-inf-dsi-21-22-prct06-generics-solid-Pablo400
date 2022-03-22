/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {SaveFighter} from '../src/SaveFighter';
import {Jojo} from '../src/Jojo';
import {Pokemon} from '../src/Pokemon';
import {Combat} from '../src/ejercicio-1';

const Jotaro = new Jojo('Jotaro', 1.95, 81, 'Corto Alcance', 200, 50, 200, 100, 'Star Platinum', 'The World', 'C', 'A', 'A', 'A', 'A');
const Kira = new Jojo('Yoshikare Kira', 1.75, 65, 'Automático', 270, 40, 300, 100, 'Sheer Heart Attack', 'Heat-Seeking Detonation', 'C', 'A', 'A', 'A', 'A');
const Pikachu = new Pokemon('Pikachu', 0.4, 6, 'eléctrico', 55, 40, 90, 35, 'Ash');
const Totodile = new Pokemon('Totodile', 0.6, 9.5, 'agua', 65, 64, 43, 50, 'Ash');

const Fighters = new SaveFighter();

const saveFighters = Fighters.saveFighter(Jotaro, Pikachu, Totodile);

const pokemonPrint = Pikachu.printPokemonData();
const jojoPrint = Jotaro.printJojoData();

const Battle = new Combat();
const Fight1 = Battle.startFight(Jotaro, Pikachu);
const Fight2 = Battle.startFight(Jotaro, Kira);
const Fight3 = Battle.startFight(Pikachu, Totodile);

describe('ejercicio 1 ', () => {
  it('Pikachu.printPokemonData() return pokemonPrint', () => {
    expect(Pikachu.printPokemonData()).to.be.equal(pokemonPrint);
  });
  it('Fighters.saveFighter(Jotaro, Pikachu, Totodile) return SaveFighters', () => {
    expect(Fighters.saveFighter(Jotaro, Pikachu, Totodile)).to.be.eql(saveFighters);
  });
  it('Jotaro.printJojoData() return jojoPrint', () => {
    expect(Jotaro.printJojoData()).to.be.equal(jojoPrint);
  });
  it('Battle.startFight(Jotaro, Pikachu) return El ganador es Jotaro y Pikachu ha sido derrotado, en 9 turnos !!!', () => {
    expect(Battle.startFight(Jotaro, Pikachu)).to.be.equal(Fight1);
  });
  it('Battle.startFight(Jotaro, Kira) return El ganador es Jotaro y Pikachu ha sido derrotado, en 9 turnos !!!', () => {
    expect(Battle.startFight(Jotaro, Kira)).to.be.equal(Fight2);
  });
  it('Battle.startFight(Pikachu, Totodile) return El ganador es Jotaro y Pikachu ha sido derrotado, en 9 turnos !!!', () => {
    expect(Battle.startFight(Pikachu, Totodile)).to.be.equal(Fight3);
  });
});
