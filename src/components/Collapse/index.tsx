import { useRef, useState } from "react";

import "./collapse.css";
import Button from "../Button";
import { BookTypes } from "../../types/types";

type CollaseProps = {
  content: BookTypes;
};
const Collapse = ({ content }: CollaseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <Button
        buttonProps={{
          className: "collapse-button",
        }}
        onClick={handleToggle}
        label={isOpen ? "Fechar Detalhes" : "Mostrar Detalhes"}
      />
      <div
        ref={ref}
        className="collapse-content"
        style={
          isOpen
            ? { height: ref?.current?.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <h3>Descrição</h3>
        <p>{content.description ?? ""}</p>
        <h3>Lançamento</h3>
        <p>{content.release ?? ""}</p>
      </div>
    </div>
  );
};

export default Collapse;
