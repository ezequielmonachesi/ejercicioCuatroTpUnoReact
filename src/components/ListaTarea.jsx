import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";


const ListaTarea = ({valor}) => {
  const valor = valor;
  return (
    <ListGroup>
        <ItemTarea valor = {valor}></ItemTarea>
    </ListGroup>
  );
};

export default ListaTarea;
