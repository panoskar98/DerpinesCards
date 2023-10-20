import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AddProducts = () => {
    const [type, setType] = useState("card")
    const [title, setTitle] = useState("title")
    const [description,setDescription] = useState("description")

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    return (
        <Container>
            <Grid container justifyContent="center" spacing={5}>
                <Grid item sm={12}>
                    <Typography variant="h4" component="h1" display="flex" justifyContent="center" width="100%" padding="5px" marginBottom="20px">
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
                        onChange={handleTitle}
                    />
                </Grid>
                <Grid item sm={12} display="flex" justifyContent="center">
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={3}
                        onChange={handleDescription}
                    />
                </Grid>
                <Grid item sm={12} display="flex" justifyContent="center">
                    <TextField
                        required
                        id="outlined-required"
                        label="color"
                        onChange={handleTitle}
                    />
                </Grid>

            </Grid>
        </Container>
    );
}

export default AddProducts;