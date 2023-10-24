import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import { useContext, useState } from "react";
import DataContext from "../../DataContext";
import { Delete, Edit, SaveAs } from "@mui/icons-material";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal } from "@mui/material";
import axios from "axios";
//todo: connect edit product with database

function EditProducts() {
    const { products } = useContext(DataContext)
    const [deleteDialog, setDeleteDialog] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    const [updatedRow, setUpdatedRow] = useState({})

    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'type', headerName: 'Type', width: 100, editable: true },
        { field: 'title', headerName: 'Title', width: 110, editable: true },
        { field: 'price', headerName: 'Price', width: 110, editable: true },
        { field: 'colour', headerName: 'Colour', width: 110, editable: true },
        { field: 'weight', headerName: 'Weight', width: 110, editable: true},
        { field: 'description', headerName: 'Description', width: 150, editable: true },
        { field: 'dateAdded', headerName: 'Date Added', width: 150 },
        { field: 'img', headerName: 'Image URL', width: 200, editable: true},
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <Box>
                    <SaveAs
                        onClick={() => handleEdit(params.row.id)}
                        style={{ cursor: 'pointer' }}
                    />
                    <Delete
                        onClick={() => { setSelectedId(params.row.id); setDeleteDialog(true) }}
                        style={{ cursor: 'pointer' }}
                    />
                </Box>
            ),
        }
    ]
    

    
    const rows = products.map((product) => {
        return (
            { id: product.productId, type: product.type, title: product.title,price:product.price, colour: product.colour,weight: product.weight, description: product.description, dateAdded: product.dateAdded, img: product.img }
        )
    })

    const handleDelete = () => {
        setDeleteDialog(false)
        axios
            .delete("http://localhost:4000/products/" + String(selectedId))
            .then(() => {
                alert("Product deleted!");
            });
        window.location.reload(false);
    }

    const handleEdit = () => {
        console.log(updatedRow.id)
        axios.put("http://localhost:4000/products/" + String(updatedRow.id),updatedRow).then(() => {alert("Product Updated")});
        window.location.reload(false)
    }

    
    return (
        <div>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                processRowUpdate={(updatedRow, originalRow) => 
                    {setUpdatedRow(updatedRow)}
                  }
            />
            <Dialog
                open={deleteDialog}
                onClose={() => setDeleteDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                hideBackdrop={true}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this product?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Deleting is irreversable
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="dark2" onClick={() => setDeleteDialog(false)}>Go Back</Button>
                    <Button color="dark2" onClick={handleDelete} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditProducts;