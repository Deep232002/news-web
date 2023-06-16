import React, { Component } from 'react'

export default class Newsitem extends Component {
  
  render() {
    let {title,description,imageurl,newsurl,author}=this.props
    return (
      <div style={{display:'flex',justifyContent:'center'}}>
       <div className="card" style={{width:"18rem",marginTop:'10px'}}>
            <img src={imageurl} className="card-img-top" alt="..."/>
        {/* <div className="name">{name}</div> */}
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
             
              <div class="text-muted my-3">
   by {author}
  </div>

              <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary">Read more</a>
            </div>
          </div>
      </div>
    )
  }
}
