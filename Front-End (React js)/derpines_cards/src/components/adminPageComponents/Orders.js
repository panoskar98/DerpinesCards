import { Box, Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import WaitCircle from '../WaitCircle';
import { DataGrid } from '@mui/x-data-grid';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';


function Orders() {
  const [orders, setOrders] = useState(null)

  const getAllOrders = () => {
    axios.get("http://localhost:4000/orders").then((response) => setOrders(response.data))
  }

  useEffect(() => {
    getAllOrders()
  }, [])

  const columns = [
    { field: 'id', headerName: 'Order Id', width: '70' },
    { field: 'completed', headerName: 'Order Status', width: '100' },
    { field: 'customer', headerName: 'Customer', width: '200' },
    { field: 'products', headerName: 'Products', width: '300' },
    { field: 'date', headerName: 'Date', width: '200' },
    {
      field: 'Actions', headerName: 'Actions', width: "300px", renderCell: (params) => (
        <Box>
          <Link to={`/admin/orders/orderPreview/${params.row.id}`} state={{orders}}>
            <Button variant='contained'>View Order</Button>
          </Link>
        </Box>
      )
    }
  ]

  if (orders === null) {
    return (
      <WaitCircle />
    )
  } else {
    const rows = orders.map((order) => {
      return (
        {
          id: order.orderId,
          completed: (order.completed ? 'completed' : 'incomplete'),
          customer: `${order.customer.name} ${order.customer.surname}`,
          products: order.ordersProducts.map((product) => {
            return (product.title)
          }),
          date: order.orderDate
        }
      )
    })
    return (
      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20]}
        />
      </Box>
    )
  }
}

export default Orders;