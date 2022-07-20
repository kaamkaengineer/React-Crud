import React, { Fragment, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Add() {
  // Making usestate for setting and
  // fetching a value in jsx
  const [name, setname] = useState("");
  const [age, setage] = useState("");;
  const [show, setShow] = useState(false);;

  // Using useNavigation for redirecting to  pages
   // Using useNavigation for redirecting to  pages
  let history = useNavigate();

 const handleModal =() =>{  
    setShow(!show)  
  }  

  // Function for creating a post/entry
  const handelSubmit = (e) => {
    e.preventDefault();  

    const ids = uuid();  
    let uni = ids.slice(0, 8);  

    let a = name,
      b = age;
    Employees.push({ id: uni, Name: a, Age: b });
    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfully added a new task!",
    });

    // Redirecting to home page after creation done
    //history('/')
  };

  return (
    <div>
        <Fragment>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setage(e.target.value)}
            type="text"
            placeholder="Age"
            required
          />
        </Form.Group>


        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>


        <Link className="d-grid gap-2" to="/">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
      <div className="modalClass">  
          <Button onClick={()=>handleModal()}>Click To Open Modal</Button>  
        </div>  
      <Modal show={show} onHide={()=> handleModal()}>  
          <Modal.Header closeButton>This is a Modal Heading</Modal.Header>  
          <Modal.Body>This is a Modal Body</Modal.Body>  
          <Modal.Footer>  
            <Button onClick={()=>this.handleModal()}>Close</Button>  
            <Button onClick={()=>this.handleModal()}>Save</Button>  
          </Modal.Footer>  
        </Modal> 
      </Fragment>
    </div>
  );
}

export default Add;
