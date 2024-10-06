
// 1. Colección: medicos

// Insertar médicos (en caso de no haberlo hecho ya)
db.medicos.insertMany([
    {
      nombre: "Andrés Torres",
      cedulaProfesional: "123456",
      correo: "andres.torres@example.com",
      especialidad: "Oftalmología",
      telefono: "555-1234"
    },
    {
      nombre: "Isabel Martínez",
      cedulaProfesional: "654321",
      correo: "isabel.martinez@example.com",
      especialidad: "Geriatría",
      telefono: "555-5678"
    },
    {
      nombre: "Roberto Gómez",
      cedulaProfesional: "789012",
      correo: "roberto.gomez@example.com",
      especialidad: "Pediatría",
      telefono: "555-9101"
    },
    {
      nombre: "Verónica Ruiz",
      cedulaProfesional: "345678",
      correo: "veronica.ruiz@example.com",
      especialidad: "Endocrinología",
      telefono: "555-1122"
    },
    {
      nombre: "Francisco Delgado",
      cedulaProfesional: "987654",
      correo: "francisco.delgado@example.com",
      especialidad: "Cardiología",
      telefono: "555-2233"
    }
  ]);
  
  // Obtener todos los médicos
  db.medicos.find().pretty();
  
  // Obtener un médico por su _id
  db.medicos.findOne({ _id: ObjectId("67017561f972dd16b843e0e6") });
  
  // Obtener un médico por nombre
  const medicoNombre = "Andrés Torres"; // Reemplaza con el nombre real
  db.medicos.findOne({ nombre: "Andres Torres" });
  
  // Eliminar un médico por su _id
  db.medicos.deleteOne({ _id: ObjectId("67017561f972dd16b843e0e6") });
  
  
  
  // 2. Colección: pacientes
  
  // Insertar pacientes (en caso de no haberlo hecho ya)
  db.paciente.insertMany([
    {
      nombre: "Claudia Lopez",
      edad: 27,
      telefono: "555-2345",
      email: "claudia.lopez@example.com"
    },
    {
      nombre: "Javier Torres",
      edad: 34,
      telefono: "555-6789",
      email: "javier.torres@example.com"
    },
    {
      nombre: "Ana Beltrán",
      edad: 29,
      telefono: "555-1122",
      email: "ana.beltran@example.com"
    },
    {
      nombre: "Felipe Castro",
      edad: 41,
      telefono: "555-3344",
      email: "felipe.castro@example.com"
    },
    {
      nombre: "Marta Jimenez",
      edad: 32,
      telefono: "555-5566",
      email: "marta.jimenez@example.com"
    }
  ]);
  
  // Obtener todos los pacientes
  db.paciente.find().pretty();
  
  // Obtener un paciente por su _id
  db.paciente.findOne({ _id: ObjectId("67017583f972dd16b843e0e9") });
  
  // Obtener un paciente por nombre
  const pacienteNombre = "Claudia López"; // Reemplaza con el nombre real
  db.paciente.findOne({ nombre: "Claudia Lopez" });
  
  // Eliminar un paciente por su _id
  db.paciente.deleteOne({ _id: ObjectId("67017583f972dd16b843e0e9") });
  
  
  
  // 3. Colección: citas
  
  db.citas.insertMany([
    {
      fecha: new Date("2024-10-10T10:00:00Z")
    },
    {
      fecha: new Date("2024-10-11T11:00:00Z")
    },
    {
      fecha: new Date("2024-10-12T12:00:00Z")
    },
    {
      fecha: new Date("2024-10-13T09:00:00Z")
    },
    {
      fecha: new Date("2024-10-14T14:00:00Z")
    }
  ]);
  
  // Obtener todas las citas
  db.citas.find().pretty();
  
  // Obtener una cita por su _id
  db.citas.findOne({ _id: ObjectId("6701f18a12bc5126b2900153") });
  
  // Eliminar una cita por su _id
  db.citas.deleteOne({ _id: ObjectId("6701f18a12bc5126b2900153") });
  