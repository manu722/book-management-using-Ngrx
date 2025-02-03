import { ingredient } from "../shared/ingredient.model";

export class Recipe{
  public name:string;
  public description:string;
  public imagepath:string;
  public ingredients:ingredient[];

  constructor( name:string , desc:string, image:string,ingredients:ingredient[]){
    this.name=name;
    this.description=desc;
    this.imagepath=image;
    this.ingredients=ingredients;
  }
}