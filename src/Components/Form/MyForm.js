import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import { useRef, useState, useContext } from "react";
import Alert from "react-bootstrap/Alert";
import "./FormStyle.css";
import { UsersContext } from "../../Context/UsersContext";
export default function MyForm() {
  const [formState,setFormState]=useState("signIn");
  function FormStateHandler(state){
    setFormState(state);
  }
  const { newUserHandler,currentUserHandler } = useContext(UsersContext);
  const initialFormat = {
    email: "",
    password: "",
  };
  const initialValidation = {
    email: false,
    password: false,
  };
  const passREf = useRef(null);
  const [formData, setFormData] = useState({ ...initialFormat });
  const [validation, setValidation] = useState({ ...initialValidation });
  const [err, setErr] = useState({
    email: null,
    password: null,
  });
  const emailreg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  function changeHandler(e) {
    if (e.target.name === "email" && !emailreg.test(e.target.value)) {
      setErr({
        ...err,
        email: "email must be in format : name@email.com",
      });
      setValidation({
        ...validation,
        email: false,
      });
    } else if (e.target.name === "password" && e.target.value.length <= 8) {
      setErr({
        ...err,
        password: "password should be more than 8 chars",
      });
      setValidation({
        ...validation,
        password: false,
      });
    } else {
      setErr({
        ...err,
        [e.target.name]: null,
      });
      setValidation({
        ...validation,
        [e.target.name]: true,
      });
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    if (validation.email && validation.password) {
      if(formState==="signUp"){
        newUserHandler(formData);
      }else if(formState==="signIn"){
        currentUserHandler(formData);
      }
      setFormData({
        ...initialFormat,
      });
      setValidation({
        ...initialValidation,
      });
    } else {
      alert("check the data againt ! 🤷‍♂️");
    }
  }
  return (
    <Form className="form" onSubmit={submitHandler}>
      <ButtonGroup style={{width:"20rem"}}>
        <Button onClick={()=>{FormStateHandler("signIn")}} variant={formState==="signIn"?"primary":"secondary"}>Sign In</Button>
        <Button onClick={()=>{FormStateHandler("signUp")}} variant={formState==="signUp"?"primary":"secondary"}>Sign Up</Button>
      </ButtonGroup>
      <Form.Group className="mb-3 form-floating">
        <Form.Control
          onChange={changeHandler}
          name="email"
          type="email"
          placeholder="Enter Email"
          className={
            "form-control " + (validation.email ? "is-valid" : "is-invalid")
          }
          value={formData.email}
        />
        <Form.Label className="">Email</Form.Label>
      </Form.Group>
      <Alert variant="danger" className={!err.email ? "d-none" : "alert"}>
        {err.email}
      </Alert>
      <Form.Group className="mb-3 form-floating">
        <Form.Control
          onChange={changeHandler}
          name="password"
          type="password"
          placeholder="Password"
          ref={passREf}
          value={formData.password}
          className={
            "form-control " + (validation.password ? "is-valid" : "is-invalid")
          }
        />
        <Form.Label>Password</Form.Label>
      </Form.Group>
      <Alert variant="danger" className={!err.password ? "d-none" : "alert"}>
        {err.password}
      </Alert>
      <Button
        className="button fs-4"
        variant={validation.email && validation.password ? "success" : "danger"}
        disabled={validation.email && validation.password ? false : true}
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}
