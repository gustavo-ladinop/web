import React from 'react'
import Card from './Card'

export const Productos = ({articulos}) => {
    
  return (
    <div>  {articulos.map((articulo,i) => <Card key={i} articulo={articulo}> </Card> )}  </div>
  )
}
