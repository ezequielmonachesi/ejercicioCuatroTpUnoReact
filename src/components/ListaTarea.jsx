import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";


const ListaTarea = ({valor}) => {
  console.log(valor)
  return (
    <ListGroup>
        <ItemTarea array = {valor}></ItemTarea>
    </ListGroup>
  );
};

export default ListaTarea;
