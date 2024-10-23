export class Tag {
  static readonly python=new Tag ('python','#3d6d7ced');
  static readonly Typescript=new Tag ('Typescript','#3d6d7ced');
  static readonly Bootstrap=new Tag ('bootstrap','#2c6d8478');
  static readonly Angular=new Tag ('angular','#3d6d7ced');
  static readonly javascript=new Tag ('javascript','#3d6d7ced');
  static readonly CSS=new Tag ('CSS','#3d6d7ced');
  static readonly HTML=new Tag ('HTML','#2c6d8478');
  private constructor(private readonly key:string,public readonly color:string){

  }
  toString(){
    return this.key;
  }
}
