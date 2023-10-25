import { Delete, ShoppingBasket } from "@mui/icons-material";
import { Badge, Box, List, ListItem, ListItemText, Popover, Typography } from "@mui/material";
import { useContext, useState } from "react";
import DataContext from "../../DataContext";

function Basket() {
    const { products, orderProductIds } = useContext(DataContext)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log(orderProductIds)
    return (
        <Box>
            <Badge badgeContent={orderProductIds.length} onClick={handleClick} style={{ cursor: 'pointer' }}>
                <ShoppingBasket />
            </Badge>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <List>
                    {orderProductIds.map((id, index) => {
                        const product = products.find(prod => prod.productId === id)
                        return (
                            <ListItem >
                                <Box display="flex" justifyContent="space-between" alignItems="center" gap={2} width="100%">
                                    <ListItemText primary={(index + 1) + ". " + product.title} />
                                    <Delete />
                                </Box>
                            </ListItem>
                        )
                    })}
                </List>
            </Popover>
        </Box>
    )
}

export default Basket;