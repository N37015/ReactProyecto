import { useState } from 'react';
import './App.css';

function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [formData, setFormData] = useState({
    ine: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEstudiantes([...estudiantes, formData]);
    setFormData({
      ine: '',
      nombre: '',
      apellido: '',
      telefono: '',
      correo: ''
    });
  };

  const handleReset = () => {
    setFormData({
      ine: '',
      nombre: '',
      apellido: '',
      telefono: '',
      correo: ''
    });
  };

  return (
    <>
      <h1>Formulario de Estudiantes</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Número de INE:
              <input type="text" name="ine" value={formData.ine} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Nombre:
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Apellido:
              <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Teléfono:
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Correo:
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <button type="submit">Enviar</button>
            <button type="button" onClick={handleReset}>Restablecer</button>
          </div>
        </form>
        <h2>Lista de Estudiantes</h2>
        <ul>
          {estudiantes.map((estudiante, index) => (
            <li key={index}>
              {estudiante.ine} - {estudiante.nombre} {estudiante.apellido} - {estudiante.telefono} - {estudiante.correo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
