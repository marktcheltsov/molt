
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './table'
import { Separator } from '@radix-ui/react-separator'

interface TableDahboardProps {
    label: string
}

const TableDahboard = () => {
  return (
    <div className='flex items-center px-4 p-10'>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">settings</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right"></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}

export default TableDahboard