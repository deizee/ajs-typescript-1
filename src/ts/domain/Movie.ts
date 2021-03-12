import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
      readonly id: number,
      readonly name: string,
      readonly originalName: string,
      readonly isIMAX: boolean,
      readonly poster: string,
      readonly year: number,
      readonly country: string,
      readonly tagline: string,
      readonly genre : string[],
      readonly timelineInMin : number,
      readonly price: number,
  ) { }
}