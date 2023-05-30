import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";


const ListaTarea = ({valor, borrarTarea}) => {
  return (
    <ListGroup>
      {valor.map((e, i)=>{
        return <ItemTarea item = {e} key={i} borrarTarea={borrarTarea}></ItemTarea>
      })}
    </ListGroup>
  );
};

export default ListaTarea;
