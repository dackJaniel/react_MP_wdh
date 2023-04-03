import React from 'react'

function Card(props) {
    // console.log(props.props)
    const {header, content, imgUrl} = props.props;
return (
    <div>
        <img src={imgUrl} alt="" />
        <h2>{header}</h2>
        <p>{content}</p>
    </div>
  )
}

export default Card