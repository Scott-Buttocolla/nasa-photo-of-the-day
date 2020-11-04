import React from "react"


//pulling and exporting photos
export default function PhotoOfDay(props) {
    return(
        <>
        <h2>{props.date}</h2>
        <h3>{props.title}</h3>
        <img src ={props.imgSrc} alt = {props.imgAlt} />
        <p>{props.description}</p>
    <p>{props.copyright}</p>
        </>
    )
}