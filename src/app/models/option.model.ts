export class Option
{
    public id: number;
    public title: string;
    public description: string;
    public questionId: number;

    constructor(id: number, title: string, desc: string)
    {
        this.id = id;
        this.title = title;
        this.description = desc;
    }
}