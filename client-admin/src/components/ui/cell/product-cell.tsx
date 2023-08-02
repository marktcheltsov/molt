import React, { FC } from 'react'
import { TableCell, TableRow } from '../table'

interface ProductCellProps {
    name: string
    price: string
    count: string
}

const ProductCell:FC<ProductCellProps> = ({
    name,
    price,
    count
}) => {
  return (
    <TableRow>
    <TableCell className="font-medium">{name}</TableCell>
    <TableCell>{price}</TableCell>
    <TableCell>{count}</TableCell>
    <TableCell className="text-right"></TableCell>
    </TableRow>
  )
}

export default ProductCell