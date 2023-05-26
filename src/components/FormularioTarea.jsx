import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useState } from "react";

const FormularioTarea = () => {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);
    const handleSubmit = (e) =>{
        e.preventDefault();

    }
  return (
    <>
    <Form onSubmit={handleSubmit}>
        {/* 2:11 */}
      <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTarea(e.target.value)} />
        <Button variant="primary" type="submit">Enviar</Button>
      </Form.Group>
    </Form>
    <ListaTarea></ListaTarea>
    </>
  );
};

export default FormularioTarea;
