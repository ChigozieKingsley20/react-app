import React from "react";

export default function DisplayDetails(props) {

    //how to writ css inside js(inline css)
    const styling = {
        heading:{
            color:'red',
            textAlign:'centerr'
        },
        paragraph:{
            textTransform:'upper-case',
            color:'green'
        }
    }
    return(
<>
<h4>The details entered are displayed here</h4>
   {/*calling the styling option*/}
<p style={styling.heading}>Name: {props.details.name}</p>
<p style={styling.paragraph}>Email: {props.details.email}</p>
<p>Password: {props.details.password}</p>
<p>message: {props.details.message}</p>
</>
    )
}
