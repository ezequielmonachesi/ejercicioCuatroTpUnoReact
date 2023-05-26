import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  return (
    <>
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="Ingrese una tarea" />
        <Button variant="primary">Enviar</Button>
      </Form.Group>
    </Form>
    <ListaTarea></ListaTarea>
    </>
  );
};

export default FormularioTarea;
