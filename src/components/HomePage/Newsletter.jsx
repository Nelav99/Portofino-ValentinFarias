import React from "react";
import Container from '@mui/material/Container'
import { Box, Button, Typography } from "@mui/material";

export default function Newsletter() {
    return (
        <>
            <Container className="container containerNewsletter">
                <Box className="borderSection borderNewsletter">
                    <Box className="row">
                        <Box className="col">
                            <Box className="description">
                                <Box>
                                    <Typography variant="h4" color="initial">KNOW IT ALL FIRST!</Typography>
                                    <Typography variant="subtitle2" color="initial"> Never Miss Anything From Portofino By Signing Up To Our Newsletter.</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="col inputNewsletter">
                            <form className=" subscribeForm">
                                <Box className="formGroup">
                                    <input id="formControlInput" placeholder="Enter your email" type="text" className="formControl" />
                                </Box>
                                <Button type="submit" className="btn btn-solid btn btn-secondary">subscribe</Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}