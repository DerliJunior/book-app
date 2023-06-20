import { useCallback, useState } from "react";

import Input from "../Input";
import Button from "../Button";

import { useBook } from "../../context/BookProvider";
import { maskDate } from "../../utils/formatDate";
import "./addbook.css";

type AddBookProps = {
  onClose: () => void;
};

type newBookType = {
  id: number;
  author: string;
  description: string;
  title: string;
  release: string;
};

const isValidNumber = (value: string) => {
  const regex = /^$|^[0-9/ ]+$/;
  return regex.test(value);
};

const AddBook = ({ onClose }: AddBookProps) => {
  const { newId, addBook } = useBook();

  const [newBook, setNewBook] = useState({
    author: "",
    description: "",
    release: "",
    title: "",
  } as newBookType);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "release") {
        if (!isValidNumber(e.target.value)) return;
      }

      setNewBook((prevState) => {
        if (e.target.name === "release") {
          return {
            ...prevState,
            [e.target.name]: maskDate(e.target.value),
          };
        }

        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    },

    [setNewBook]
  );

  const handleSubmit = useCallback(() => {
    if (
      [newBook.author, newBook.description, newBook.title].some(
        (e) => e === ""
      ) ||
      newBook.release.length < 10
    ) {
      window.alert("Preencha todos os campos");
      return;
    }

    addBook({
      id: newId(),
      author: newBook.author,
      description: newBook.description,
      title: newBook.title,
      release: newBook.release,
    });

    onClose();
  }, [addBook, newId, onClose, newBook]);

  return (
    <div className="form">
      <div className="form-content">
        <Input
          value={newBook.title}
          onChange={(e) => handleChange(e)}
          placeholder="Titulo"
          name="title"
        />
        <Input
          value={newBook.author}
          onChange={(e) => handleChange(e)}
          placeholder="Autor"
          name="author"
        />
        <Input
          value={newBook.description}
          onChange={(e) => handleChange(e)}
          placeholder="Descrição"
          name="description"
        />
        <Input
          value={newBook.release}
          onChange={(e) => handleChange(e)}
          placeholder="Release"
          name="release"
          maxLength={10}
        />
        <Button
          label="Adicionar"
          buttonProps={{
            className: "add-book-button",
          }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddBook;
