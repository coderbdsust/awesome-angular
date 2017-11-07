import {OccupationDTO} from "./OccupationDTO";

export class UserDTO{
  public fullName:String;
  public age:number;
  public occupation:OccupationDTO;
  public joiningDate:string;
  public married:boolean;

  constructor(){
  }
}
