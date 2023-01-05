import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import { FoodDetails } from "../FoodDetails";


export default function DishDetails() {





  const displayDetails = () => {

    return(

      FoodDetails.map((FoodDetails) => {
        console.log(FoodDetails);
        return(
        <div className="col-md-4">
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {FoodDetails.title}
    </CardTitle>
    <CardText>
      {FoodDetails.description}
    </CardText>
    <Button>
      <a href={FoodDetails.url}>click</a>
    </Button>
  </CardBody>
</Card>
</div>
        )

       })
    )
  }

  return(
    <div>
   <div className="row">
    <h2>DishDetails</h2>
    {displayDetails()}
    </div>
    </div>
  )  
}