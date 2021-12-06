export interface IQuestions {
    id: number;
    question: string;
    answerList: {
        answer: string;
        isCorrect: boolean;
    };
}