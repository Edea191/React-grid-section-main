import React from "react";
import photo from "./image-kira.jpg";

const Student = (props) => {
    const { id, image, name, position, entrance, description} = props;
    let IdNumber = "one";
    let ColorClasses = ["one" , "two" , "three"];
    let classColor = name.substring(0, 2);
    
    

    if(classColor == "Jo") {  
        IdNumber = "two";
        
    }
    else if(classColor == "Je") {
        IdNumber = "three";
        
    }
    else if(classColor == "Pa") {
        IdNumber = "four";
        console.log(IdNumber);
        
    }
    else if(classColor == "Ki") {
        IdNumber = "five";
        console.log(IdNumber);
        
    }

    
    


    return(
        <div className={IdNumber}>

            <div className="studentProp">

            <img src={image} alt={name}/>
            <div className="name">{name}</div>
            <div className="position">{position}</div>
            </div>

            <div className="entrance">{entrance}</div>
            <div className="description">{description}</div>
        </div>
    );
};

export default Student;