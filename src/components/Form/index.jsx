import { useState } from "react";
import { ButtonForm } from "../Button";
import { ModalCredentials } from "../Modal";
import "./style.css";

export const Form = ({
  listTransation,
  setTransation,
  listFiltredArray,
  setListFiltred,
}) => {
  const [description, setDescription] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [type, setType] = useState("");
  const [isModalCredentials, setModalCredentials] = useState(false);

  const getValuesForm = (e) => {
    e.preventDefault();
    if (description == "" || valueInput == "" || type == "") {
      setModalCredentials(true);
      setTimeout(() => {
        setModalCredentials(false);
      }, 2000);
    } else {
      setTransation([...listTransation, { description, type, valueInput }]);
      setListFiltred([...listFiltredArray, { description, type, valueInput }]);
      setDescription("");
      setValueInput("");
      setType("");
    }
  };

  return (
    <form onSubmit={getValuesForm}>
      <div className="Box__Form__Header">
        {isModalCredentials && <ModalCredentials />}
        <label>Descrição</label>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div className="Box__Form__Main">
        <div className="Box__input">
          <label htmlFor="">Valor</label>
          <input
            value={valueInput}
            type="number"
            placeholder="1"
            onChange={(e) => setValueInput(e.target.value)}
          />
          <p>R$</p>
        </div>
        <div className="Box__Select">
          <label htmlFor="">Tipo de valor</label>
          <select
            value={type}
            name=""
            id=""
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Tipo de entrada</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Saída</option>
          </select>
        </div>
      </div>
      <ButtonForm type="submit">Inserir valor</ButtonForm>
    </form>
  );
};
