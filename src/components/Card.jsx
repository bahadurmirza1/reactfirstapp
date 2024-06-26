import React from 'react'

function Card({product}) {
  return (
    <>
    <div className='col-md-3'>
    <div className="card">
  <img src= {product.img} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.describ}</p>
    <a href="#" className="btn btn-primary">{product.price}</a>
  </div>
</div>
    </div>
    </>
  )
}

export default Card