import { Tag } from "./tag";

export interface Project {
  id:Number;
  name:string;
  summary:string;
  description:string;
  projectlink:string;
  pictures:string[];
  tags:Tag[];
}
