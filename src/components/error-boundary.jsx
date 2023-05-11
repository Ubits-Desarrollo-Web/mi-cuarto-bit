import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // este metodo debe ser estatico ya que se accede a el como una funcion de la clase y no como una funcion de una instancia de esta
  static getDerivedStateFromError() {
    // Se actualiza el estado asi en el proximo render se muestre el error.
    return { hasError: true };
  }

  // funcion de ciclo de visa de componentes de clase React que se encarga de correr codigo cuando atrapa un error
  componentDidCatch(error, info) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // si hay error renderizamos una UI que le permita volver al usuario a la pagina principal
      return (
        <h1>
          Hubo un error en el pedido. Haga <Link to="/">click aqui</Link> para
          volver
        </h1>
      );
    }

    // si no hay error devuelve lo que el ErrorBoundary este rodeando
    return this.props.children;
  }
}

export default ErrorBoundary;
