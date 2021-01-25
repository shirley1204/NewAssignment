import React from 'react'

 const Postsbox = (props) => {
     console.log(props)
    return (
        <>
        <div className="row">
        <h4>{props.title}</h4>
        <p>{props.body}</p>
        </div>
        </>
    )
}
export default Postsbox