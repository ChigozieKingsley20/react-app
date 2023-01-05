import React, {useEffect, useState} from "react"
import { Form, FormGroup, Label, Input, Button} from "reactstrap"


export default function UserForm(props) {

   ///from here
  //how to use useState and useEffect to 
  const [name, setName] = useState("kingsley"); //
  const [email, setEmail] = useState("chigozie");

useEffect(() => {           // this has no effect on the code
  //console.log("heloo")
},[name, email])
// to here



return (
<>
<div className="container">
  <div className="row">
    <div className="col-md-9">
    <Form>
  <FormGroup>
         {/*another way of writing css in js*/}
    <Label for="exampleName" style={{color:'red', backgroundColor:'blue'}}>
      Name
    </Label>
    <Input
      id="exampleName"
      name="name"
      placeholder="with a placeholder"
      type="name"
      onChange={props.onValueChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
      onChange={props.onValueChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
      onChange={props.onValueChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Message
    </Label>
    <Input
      id="exampleText"
      name="message"
      type="message"
      onChange={props.onValueChange}
    />
  </FormGroup>
  <Button onClick={props.onSubmitForm}>submit</Button>
  </Form>
  
    </div>
    <div className="col-md-3">

    </div>
  </div>
</div>
  </>
)
}