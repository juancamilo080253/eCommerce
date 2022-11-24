import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col  } from "react-bootstrap";
import app from "../../app.json";
import './login.css';
import {isNull} from "util";
import Cookies from "universal-cookie";
import { calcularExpirarSesion } from "../helper/helper"; //funcion se usan corchetes
import Loading from "../loading/loading";// la clase va en mayuscula inicial

const {APIHOST} = app;
const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      usuario: "",
      pass: "",
    };
  }

iniciarSesion(){ 
  this.setState({Loading:true});
  axios.post(`${APIHOST}/usuarios/login`,{
    usuario: this.state.usuario,
    pass:this.state.pass,
  })
  .then((response) => {
    if(isNull(response.data.token)){
      alert("Usuario y/o contraseña invalidos");
    }
    else {
      cookies.set('_s' , response.data.token,
      {
        path: "/",
        expires: calcularExpirarSesion(),
      });
      this.props.history.push(window.open('/empleados'));
    }
    this.setState({Loading:false});
  })
  .catch((err) =>{
    console.log(err);
    this.setState({Loading:false});
  })
  //  alert('Boton de iniciar sesion');
}
  render() {
    return (
      <Container id="login-container" >
        <Loading show={this.state.Loading}/>
        <Row>
          <Col
          sm="12"
          xs="12"
          md={{span: 4, offset:4}}
          lg={{span: 4, offset:4}}
          xl={{span: 4, offset:4}}>
            <Row>
              <h2>Iniciar sesión</h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label id="form-label" >Usuario</Form.Label>
                  <Form.Control
                    onChange={(e) => this.setState({ usuario: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label id="form-label">Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  onClick={()=>{
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
