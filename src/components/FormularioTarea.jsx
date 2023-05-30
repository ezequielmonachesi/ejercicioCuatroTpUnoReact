import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (tarea)=>{
    let nuevasTareas = tareas.filter((item)=> item !== tarea);
    setTareas(nuevasTareas);
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea valor = {tareas} borrarTarea ={borrarTarea}></ListaTarea>
    </>
  );
};

export default FormularioTarea;
