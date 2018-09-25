const BOOK_TYPE: string = 'BOOK_SELECTED'

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
