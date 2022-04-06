export type Action = { type: "ADD_TOKEN"; payload: string }; // Ação com propriedades sendo a 1º sendo um tipo da action e 2º é a informação que a action esta levando no caso um token

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token,
});