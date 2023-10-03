import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import { BASE_URL } from "../config.js";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {userState} from "../store/atoms/user.js";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const setUser = useSetRecoilState(userState);

    return (
        <div>
         <center>
            <Typography variant={"h1"} sx={{fontWeight:'800'}}>
                    bann
                </Typography>
                </center>
            <div style={{
                paddingTop: 50,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
               
                <Typography variant={"h6"}>
                Welcome back! Signin below
                </Typography>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Card variant={"outlined"} style={{width: 400, padding: 20 , border:'solid' , borderRadius:'2rem', boxShadow:'10px 15px 0px black'}}>
                    <TextField
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                    />
                    <br/><br/>
                    <TextField
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        fullWidth={true}
                        label="Password"
                        variant="outlined"
                        type={"password"}
                    />
                    <br/><br/>

                    <Button
                        size={"large"}
                        variant="contained"
                        sx={{backgroundColor:'black'}}
                        onClick={async () => {
                            try {
                                const res = await axios.post(`${BASE_URL}/admin/signin`, {
                                    username: email,
                                    password: password
                                }, {
                                    headers: {
                                        "Content-type": "application/json"
                                    }
                                });
                                localStorage.setItem("token", res.data.token);
                                setUser({
                                    userEmail: email,
                                    isLoading: false
                                });
                                navigate("/courses");
                            } catch (error) {
                                console.error(error);
                            }
                        }}
                    >
                        Signin
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default Signin;
