import { useCallback, useState } from "react";

import Modal from "../components/Modal";
import AddBook from "../components/AddBook";

import { useBook } from "../context/BookProvider";
import "./home.css";
import { Link } from "react-router-dom";
import Collapse from "../components/Collapse";
import Button from "../components/Button";

const Home = () => {
  const { books } = useBook();

  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <>
      <div className="home">
        <header className="header">
          <div className="container">
            <section className="header-section">
              <div className="home-icon">
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  Store
                  <Link to="#"></Link>
                </h1>
              </div>
              <h2>Book list</h2>
            </section>
          </div>
        </header>
        <div className="container">
          <section className="home-section">
            <div className="books-section-header">
              <h1>Books</h1>
              <Button
                buttonProps={{
                  className: "add-book-button",
                }}
                label="Adicionar novo livro"
                onClick={handleOpen}
              />
            </div>
            <section className="books-section">
              {books.map((book) => (
                <div key={book.id} className="book-content">
                  <div className="book-image">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  <div className="book-detail">
                    <div>
                      <h2>{book.title}</h2>
                      <p>{book.author}</p>
                    </div>
                    <Collapse content={book} />
                  </div>
                </div>
              ))}
            </section>
          </section>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-link">
              <p style={{ display: "flex", color: "#fff" }}>
                Desenvolvido por: &nbsp;
                <Link to="https://github.com/DerliJunior/">Derli Junior</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {open ? (
        <Modal isOpen={open} onClose={handleClose}>
          <AddBook onClose={handleClose} />
        </Modal>
      ) : null}
    </>
  );
};

export default Home;
