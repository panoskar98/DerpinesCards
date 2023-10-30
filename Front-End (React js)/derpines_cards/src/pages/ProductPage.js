import { ThemeProvider } from "@emotion/react";
import customTheme from "../Themes/CustomTheme";
import { Avatar, Box, Button, Chip, Container, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { CheckCircleOutline } from "@mui/icons-material";
import DataContext from "../DataContext";

function ProductPage() {
    const location = useLocation()
    const product = location.state;
    const [selectedColour, setSelectedColour] = useState(product.colour[0])
    const [comment, setComment] = useState("");
    const { products, orderProductIds, setOrderProductIds, orderComments, setOrderComments } = useContext(DataContext)

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmitComment = () => {
        if (comment.trim() !== "") {
            setComment("");
        }
    };

    const handleAddToCart = () => {
        handleSubmitComment();
        const productId = products.find(prod => {
            return prod.title === product.title && prod.colour === selectedColour
        }).productId;
        setOrderProductIds([...orderProductIds, productId]);
        setOrderComments([...orderComments, `${product.title}: ${comment}`])
    }

    return (
        <ThemeProvider theme={customTheme}>
            <Box className="glass" margin={4}>
            <Container>
                <Grid container display="flex" justifyContent="center" >
                    <Grid item sm={12} md={4} height="400px" marginBottom="5px" justifyContent="center" display="flex" padding={3}>
                        <img src={product.img} style={{ height: "100%", borderRadius: "8px" }} alt={product.title} />
                    </Grid>
                    <Grid item sm={12} md={8} padding={3} width="100%">
                        <Box borderRadius="8px" display="flex" justifyContent="space-between" >
                            <Typography variant="h5" component="h1">
                                {product.title}
                            </Typography>
                            <Typography variant="h5" component="h1">
                                {product.price + " €"}
                            </Typography>
                        </Box>
                        <Divider />
                        <Box marginY={2} display="flex">
                            {product.description}
                        </Box>
                        <Typography variant="h5" >
                            Colors
                        </Typography>
                        <Divider sx={{ marginBottom: "12px" }} />
                        <Box>
                            <Stack direction="row" spacing={1}>
                                {product.colour.map((colour, index) => {
                                    const chipStyle = {
                                        background: colour,
                                        color: 'black'
                                    }
                                    return (
                                        <Chip key={index} label={colour} style={chipStyle} onClick={() => setSelectedColour(chipStyle.background)} avatar={
                                            selectedColour === colour && (
                                                <Avatar>
                                                    <CheckCircleOutline color="white" />
                                                </Avatar>
                                            )} />
                                    )
                                })}
                            </Stack>
                        </Box>
                        <TextField
                            label="Add a comment"
                            variant="outlined"
                            fullWidth
                            value={comment}
                            onChange={handleCommentChange}
                            sx={{ marginBottom: "12px", marginTop: "30px" }}
                        />
                        <Box width="100%" display="flex" justifyContent="center" alignItems="center" marginTop={5}>
                            <Button variant="contained" onClick={handleAddToCart}>
                                Add To Cart
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </ThemeProvider>
    )
}

export default ProductPage;