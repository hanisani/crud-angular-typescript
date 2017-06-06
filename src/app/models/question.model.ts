export class Question
{
    public id : number;
    public title: string;
    public description: string;
    public surveyId: number;

    constructor(id: number, title: string, desc: string)
    {
        this.id = id;
        this.title = title;
        this.description = desc        
    }
}