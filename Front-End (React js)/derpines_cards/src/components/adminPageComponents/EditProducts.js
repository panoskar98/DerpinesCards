import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import { useContext, useState } from "react";
import DataContext from "../../DataContext";
import { Delete, Edit } from "@mui/icons-material";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal } from "@mui/material";
import axios from "axios";


function EditProducts() {
    const [deleteDialog, setDeleteDialog] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    const { products } = useContext(DataContext)
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'type', headerName: 'type', width: 110 },
        { field: 'title', headerName: 'title', width: 110 },
        { field: 'color', headerName: 'color', width: 110 },
        { field: 'description', headerName: 'description', width: 150 },
        { field: 'dateAdded', headerName: 'Date Added', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <Box>
                    <Edit
                        onClick={() => handleEdit(params.row.id)}
                        style={{ cursor: 'pointer' }}
                    />
                    <Delete
                        onClick={() => { setSelectedId(params.row.id); setDeleteDialog(true) }}
                        style={{ cursor: 'pointer' }}
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
                </Box>
            ),
        }

    ]

    const handleDelete = () => {
        setDeleteDialog(false)
        axios
            .delete("http://localhost:4000/products/" + String(selectedId))
            .then(() => {
                alert("Post deleted!");
            });
    }

    const handleEdit = (event) => {
        console.log(event)
    }

    const rows = products.map((product) => {
        return (
            { id: product.productId, type: product.type, title: product.title, color: product.colour, description: product.description, dateAdded: product.dateAdded }
        )
    })
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
            />
        </div>
    );
}

export default EditProducts;