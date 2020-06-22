export interface StoryPage {

     id: string;
     step: number;
     header: string;
     text : string;
     image: string;
     hasQuestions: boolean;
     isCodePage: boolean;
     answers: Answers[];


}

export interface Answers {

}

export const StoryNewDefault : StoryPage = {
     id: 'new',
     step: 1,
     header: 'New Story',
     text: '',
     image: '',
     hasQuestions: false,
     isCodePage: false,
     answers: []
}
