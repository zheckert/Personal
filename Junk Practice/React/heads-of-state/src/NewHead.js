import React from "react"

export const NewHead = (props) => {

    const img = <img height="200" width="200" alt="This is the default head on Wikipedia. It's Timone from Disney's 'Lion King' made real" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Portrait_of_a_Meerkat.jpg/1920px-Portrait_of_a_Meerkat.jpg"></img>

    // const decapitator = (event) => {
    //     return(
    //         <button>Remove?</button>
    //     )
    // }

    function chop(event){
        props.decapitate(props.index)
    }

    return(
        <div className="heads">
            {img}
            {props.name}
            <button onClick={chop}>Remove?</button>
        </div>
    )
}