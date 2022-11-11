import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
    alert("Boton de inicio de sesión");
  }

  render() {
    return (
      <Container id="login-container" style={{ marginTop: 200 }}>
        <Row>
          <Col>
            <Row>
              <h2> Iniciar sesión </h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    onChange={(e) => this.setState({ usuario: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={() => {
                    this.iniciarSesion();
                  }}
                >
                  Iniciar sesión
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
