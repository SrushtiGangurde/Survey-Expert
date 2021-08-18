import { question } from "./question";

export interface survey {
    surveyId : number;
    surveyName : string;
    surveyDesc : string;
    lastEditedBy : number;
    createdDate : string;
    link : any;
    questions: question[];
}