import { createContext, useContext, ReactNode, useState } from "react";
import { BookTypes } from "../types/types";
import { data } from "../data/data";


interface BookProviderProps {
    children: ReactNode;
}

interface BookContextTypes {
    newId: () => number;
    addBook: (book: BookTypes) => void;
    removeBook: (id: number) => void;
    books: BookTypes[]

}

const BookContext = createContext<BookContextTypes>({} as BookContextTypes);

const BookProvider = ({children}: BookProviderProps) => {
    const [books, setBooks] = useState<BookTypes[]>(data);


    const newId = () => {
        const id: number = books[books.length - 1].id + 1;
        
        return id;
    }

    const addBook = (book: BookTypes) => {
        setBooks(prevBooks => [...prevBooks, book] )
    }

    const removeBook = (id: number) => {
        const listBooks = books.filter(book => book.id !== id);

        setBooks([...listBooks])
    }


    return (
        <BookContext.Provider
          value={{
            newId,
            addBook,
            removeBook,
            books
          }}
        >
          {children}
        </BookContext.Provider>
      );
}

export function useBook() {
    const context = useContext(BookContext);
  
    return context;
  }

export default BookProvider