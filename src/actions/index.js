export function selectBook(book) {
    //selectBook is an ActionCreator, it needs to return an ation,
    //an object with a type property
    //actions always contain a type and a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
};
