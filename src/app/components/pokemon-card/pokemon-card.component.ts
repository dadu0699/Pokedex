import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: any;

  public colors: any;
  public color: string;

  constructor() {
    this.pokemon = {};

    this.colors = this.typeColors();
    this.color = '#eee';
  }

  ngOnInit(): void {
    const tipo: string = <string>this.pokemon['type'];

    this.color = this.colors[tipo] !== undefined
      ? <string>this.colors[tipo]
      : '#eee';
  }

  private typeColors(): Object {
    return {
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#f4e7da',
      rock: '#d5d5d4',
      fairy: '#fceaff',
      poison: '#98d7a5',
      bug: '#f8d5a3',
      dragon: '#97b3e6',
      psychic: '#eaeda1',
      flying: '#F5F5F5',
      fighting: '#E6E0D4',
      normal: '#F5F5F5'
    };
  }
}
