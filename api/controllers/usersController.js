// Simulación de base de datos (reemplazar con una base de datos real)
let users = [
  { 
    id: 1, 
    username: 'usuario1', 
    email: 'usuario1@example.com', 
    password: 'password1', // En una aplicación real, esto estaría hasheado
    name: 'Usuario Uno',
    role: 'student'
  },
  { 
    id: 2, 
    username: 'usuario2', 
    email: 'usuario2@example.com', 
    password: 'password2',
    name: 'Usuario Dos',
    role: 'teacher'
  },
  { 
    id: 3, 
    username: 'admin', 
    email: 'admin@example.com', 
    password: 'admin123',
    name: 'Administrador',
    role: 'admin'
  }
];

// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
  // Por seguridad, no enviar las contraseñas
  const safeUsers = users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
  
  res.json(safeUsers);
};

// Obtener un usuario por ID
exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  
  // No enviar la contraseña
  const { password, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
};

// Obtener usuario por nombre de usuario
exports.getUserByUsername = (req, res) => {
  const username = req.params.username;
  const user = users.find(user => user.username === username);
  
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  
  // No enviar la contraseña
  const { password, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
};

// Registrar un nuevo usuario
exports.register = (req, res) => {
  const { username, email, password, name, role = 'student' } = req.body;
  
  if (!username || !email || !password || !name) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }
  
  // Verificar si el usuario o email ya existen
  if (users.some(user => user.username === username)) {
    return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
  }
  
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
  }
  
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password, // En una aplicación real, hashearíamos esta contraseña
    name,
    role
  };
  
  users.push(newUser);
  
  // No enviar la contraseña en la respuesta
  const { password: _, ...userWithoutPassword } = newUser;
  res.status(201).json(userWithoutPassword);
};

// Iniciar sesión
exports.login = (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ message: 'Nombre de usuario y contraseña son obligatorios' });
  }
  
  const user = users.find(user => user.username === username && user.password === password);
  
  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }
  
  // En una aplicación real, generaríamos un token JWT aquí
  
  // No enviar la contraseña en la respuesta
  const { password: _, ...userWithoutPassword } = user;
  res.json({
    message: 'Inicio de sesión exitoso',
    user: userWithoutPassword,
    token: 'token-simulado-' + user.id // En una app real, sería un token JWT
  });
};

// Actualizar un usuario
exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  
  // No permitir cambiar el rol a través de esta función
  const { role, ...updateData } = req.body;
  
  const updatedUser = { 
    ...users[userIndex],
    ...updateData,
    id: userId // Asegurarse de que el ID no cambie
  };
  
  users[userIndex] = updatedUser;
  
  // No enviar la contraseña en la respuesta
  const { password, ...userWithoutPassword } = updatedUser;
  res.json(userWithoutPassword);
};

// Eliminar un usuario
exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  
  users.splice(userIndex, 1);
  res.status(204).send();
};

// Cambiar rol de usuario (solo para administradores)
exports.changeUserRole = (req, res) => {
  const userId = parseInt(req.params.id);
  const { role } = req.body;
  
  if (!role) {
    return res.status(400).json({ message: 'El rol es obligatorio' });
  }
  
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  
  users[userIndex].role = role;
  
  // No enviar la contraseña en la respuesta
  const { password, ...userWithoutPassword } = users[userIndex];
  res.json(userWithoutPassword);
};

// Crear alias para mantener compatibilidad con las rutas existentes
exports.createUser = exports.register;
exports.loginUser = exports.login;