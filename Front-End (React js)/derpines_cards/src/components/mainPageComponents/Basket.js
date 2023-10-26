import { Delete, ShoppingBasket } from "@mui/icons-material";
import { Badge, Box, Button, Divider, List, ListItem, ListItemText, Popover, Typography } from "@mui/material";
import { useContext, useState } from "react";
import DataContext from "../../DataContext";

function Basket() {
    const { products, orderProductIds, setOrderProductIds, totalPrice } = useContext(DataContext)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const removeOrderProduct = (id) => {
        const updatedOrderList = orderProductIds.filter((itemId) => itemId !== id)
        setOrderProductIds(updatedOrderList)
    }


    if (orderProductIds.length === 0) {
        return(
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
                <Typography padding="5px">
                    Empty Basket
                </Typography>
            </Popover>
        </Box>
        )
    }

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
                            <Box>
                            <ListItem key={index}>
                                <Box display="flex" justifyContent="space-between" alignItems="center" gap={2} width="100%">
                                    <ListItemText primary={(index + 1) + ". " + product.title + " (" + product.colour + ") " + product.price + "€"} />
                                    <Delete style={{cursor: 'pointer'}} onClick={() => removeOrderProduct(id)} />
                                </Box>
                            </ListItem>
                            <Divider/>
                            </Box>
                        )
                    })}
                </List>
                <Box display="flex" justifyContent="space-between" padding="10px">
                    <Typography>
                        Total:
                    </Typography>
                    <Typography>
                        {totalPrice + "€"}
                    </Typography>
                </Box>
            </Popover>
        </Box>
    )
}

export default Basket;