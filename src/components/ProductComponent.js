import React from 'react'
import {useSelector}  from 'react-redux'

const ProductComponent = () => {
    const product = useSelector(state => state.allProduct.products)
    const {id,title,category} = product[0]
    console.log(id)
    return (
        <div className = "four colum wide">
            <div className="ui link card">
                <div className="card">
                    <div className="image">{title}</div>
                    <div className="content">
                        <div className="header">{category}</div>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default ProductComponent
