import { Box, Button, Container, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AddProducts = () => {
    const [type, setType] = useState("card")
    const [title, setTitle] = useState("title")
    const [description, setDescription] = useState("description")
    const [color, setColor] = useState("Color")
    const [weight, setWeight] = useState(0)
    const [price, setPrice] = useState(0)
    const [imgUrl, setImgUrl] = useState("")


    return (
        <Container>
            <Grid container justifyContent="center" spacing={5}>
                <Grid item sm={12}>
                    <Typography variant="h4" component="h1" display="flex" justifyContent="center" width="100%" padding="5px">
                        Add Product
                    </Typography>
                </Grid>
                <Grid item sm={12} display="flex" justifyContent="center">
                    <FormControl >
                        <InputLabel id="type-label">Type</InputLabel>
                        <Select
                            color="dark2"
                            labelId="type-label"
                            id="type-label"
                            value={type}
                            label="Type"
                            onChange={(event) => { setType(event.target.value) }}
                        >
                            <MenuItem value={"card"}>Card</MenuItem>
                            <MenuItem value={"candle"}>Candle</MenuItem>
                            <MenuItem value={"other"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sm={12} display="flex" justifyContent="center">
                    <TextField
                        required
                        id="outlined-required"
                        label="Title"
                        onChange={(event) => {
                            setTitle(event.target.value)
                        }}
                    />
                </Grid>
                <Grid item sm={12} display="flex" justifyContent="center">
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={3}
                        onChange={(event) => { setDescription(event.target.value) }}
                    />
                </Grid>
                <Grid item sm={12} display="flex" justifyContent="center">
                    <TextField
                        id="outlined"
                        label="Color"
                        onChange={(event) => { setColor(event.target.value) }}
                    />
                </Grid>
                <Grid item sm={12} display="flex" justifyContent="center">
                    <TextField
                        label="Weight"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">gr</InputAdornment>,
                        }}
                        onChange={(event) => { setWeight(event.target.value) }}
                    />
                </Grid>
                <Grid item sm={12} display="flex" justifyContent="center">
                    <TextField
                        required
                        label="price"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                        onChange={(event) => { setPrice(event.target.value) }}
                    />
                </Grid>
                <Grid item sm={12} display="flex" justifyContent="center">
                    <TextField
                        id="outlined"
                        label="Image URL"
                        onChange={(event) => { setImgUrl(event.target.value) }}
                        multiline
                    />
                </Grid>
                <Grid item sm={12} display="flex" justifyContent="center">
                    <Button variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AddProducts;