import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import DataContext from "../../DataContext";


function EditProducts() {

    const { products } = useContext(DataContext)
    const columns = [
        { field: 'id', headerName: 'ID', width: 90},
        { field: 'type', headerName: 'type', width: 110},
        { field: 'title', headerName: 'title', width: 110},
        { field: 'color', headerName: 'color', width: 110},
        { field: 'description', headerName: 'description', width: 150},

    ]
    console.log()

    const rows = products.map((product) => {
        return(
            {id: product.productId, type: product.type, title: product.title, color: product.colour, description: product.description}
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
                onRowSelectionModelChange={(event) => console.log(event)}
            />
        </div>
    );
}

export default EditProducts;