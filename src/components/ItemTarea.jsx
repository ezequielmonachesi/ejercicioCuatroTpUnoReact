import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({array}) => {
  return (
    <>
    {array.map(e=>{
      <ListGroup.Item className="d-flex justify-content-between">
        {e}
        <Button variant="danger">Borrar</Button>
      </ListGroup.Item>
    })}
    </>
  );
};

export default ItemTarea;