let emailVerificationTokens = []; //token

// Enviar correo de verificación
exports.sendEmailVerification = (req, res) => {
  const { email } = req.body;
  const user = users.find(user => user.email === email);

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  const token = crypto.randomBytes(32).toString('hex');
  emailVerificationTokens.push({ email, token });

  // Enviar token por correo (simulado)
  console.log(`Token de verificación para ${email}: ${token}`);

  res.json({ message: 'Se ha enviado un enlace de verificación a su correo electrónico' });
};

// Verificar correo electrónico
exports.verifyEmail = (req, res) => {
  const { token } = req.body;
  const verificationToken = emailVerificationTokens.find(vt => vt.token === token);

  if (!verificationToken) {
    return res.status(400).json({ message: 'Token inválido' });
  }

  const user = users.find(user => user.email === verificationToken.email);
  user.isVerified = true;

  // Eliminar el token usado
  emailVerificationTokens = emailVerificationTokens.filter(vt => vt.token !== token);

  res.json({ message: 'Correo electrónico verificado correctamente' });
};