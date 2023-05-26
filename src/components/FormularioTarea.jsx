import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useState } from "react";

const FormularioTarea = () => {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);
  return (
    <>
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=>console.log(e.target.value)} />
        <Button variant="primary">Enviar</Button>
      </Form.Group>
    </Form>
    <ListaTarea></ListaTarea>
    </>
  );
};

export default FormularioTarea;
