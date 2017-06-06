export class Department
{
    public ID : number = 0;
    public Name : string = "";
    public ImagePath : string = "";

    constructor(id : number, name : string, imagePath : string)
    {
        this.ID = id;
        this.Name = name;
        this.ImagePath = imagePath;
    }
}