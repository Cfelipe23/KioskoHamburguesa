export const estaLogueado = () => {
    return localStorage.getItem('usuarioLogueado') === 'true';
  };
  
  export const loginUsuario = () => {
    localStorage.setItem('usuarioLogueado', 'true');
  };
  
  export const logoutUsuario = () => {
    localStorage.removeItem('usuarioLogueado');
  };