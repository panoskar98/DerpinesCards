import React from "react";
import { Container, Grid } from "@mui/material";
import Header from "../../components/Header";

function MainPage() {
    return(
        <Container>
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={12}>
                <h1>main body</h1>
            </Grid>
            <Grid item xs={12}>
                <h1>footer</h1>
            </Grid>
        </Grid>
        </Container>
    );
}

export default MainPage;