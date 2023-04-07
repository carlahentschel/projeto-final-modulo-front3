import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface FormProps {
    mode: "signin" | "signup";
    textButton: string;
}

const Form: React.FC<FormProps> = ({ mode, textButton }) => {
    return (
        <Box component="form" marginTop={1}>
            <TextField
                variant="outlined"
                margin="normal"
                type="email"
                required
                id="email"
                label="E-mail"
                fullWidth
            />
            <TextField
                variant="outlined"
                margin="normal"
                type="password"
                required
                id="password"
                label="Senha"
                fullWidth
            />

            {mode === "signup" ? (
                <TextField
                    variant="outlined"
                    margin="normal"
                    type="password"
                    required
                    id="repassword"
                    label="Repetir senha"
                    fullWidth
                />
            ) : (
                <FormControlLabel control={<Checkbox />} label="Permanecer conectado" />
            )}
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
                {textButton}
            </Button>
            <Grid container>
                {mode === "signin" && (
                    <Grid item xs={4}>
                        <Typography>
                            <Link to="/">Esqueceu sua senha?</Link>
                        </Typography>
                    </Grid>
                )}
                <Grid item xs={8} textAlign="end">
                    {mode === "signin" ? (
                        <Typography>
                            <Link to="/signup">Não tem uma conta? Cadastre-se.</Link>
                        </Typography>
                    ) : (
                        <Typography>
                            <Link to="/">Já possui conta? Faça seu login.</Link>
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;
