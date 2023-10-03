import {Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import { userEmailState } from "../store/selectors/userEmail"
import {isUserLoading} from "../store/selectors/isUserLoading.js";
import image from '../assets/4087.jpg';
import learn from '../assets/learning.jpg';
import teach from '../assets/teach.jpg';

export const Landing = () => {
    const navigate = useNavigate()
    const userEmail = useRecoilValue(userEmailState);
    const userLoading = useRecoilValue(isUserLoading);
    return <div style={{display:'flex' , flexWrap:'wrap', flexDirection:'column', minWidth:'800px'}}>
        <Grid container style={{padding: "4vw" ,marginTop:'-5rem'}}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{marginTop: 100}}>
                    <Typography variant={"h1"} style={{fontWeight:'800', fontSize:'10rem'}}>
                        bann
                    </Typography>
                    <Typography variant={"h3"} style={{fontWeight:'600', fontFamily:'monospace'}}>
                    Your Gateway to Infinite Learning
                    </Typography>
                    <Typography variant={"h6"} style={{fontWeight:'600', fontFamily:'monospace'}}>
                    Students to Teachers: Empowering the Learning Cycle
                    </Typography>
                    {!userLoading && !userEmail && <div style={{display: "flex", marginTop: 20}}>
                        <div style={{marginRight: 10}}>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                sx={{backgroundColor:'black',}}
                                onClick={() => {
                                    navigate("/signup")
                                }}
                            >Signup</Button>
                        </div>
                        <div>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                sx={{backgroundColor:'black',}}
                                onClick={() => {
                                    navigate("/signin")
                                }}
                            >Signin</Button>
                        </div>
                    </div>}
                </div>
                <div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}  style={{marginTop: 20}}>
                <img src={image} width={"100%"} />
            </Grid>
        </Grid>
        <div style={{display:'flex' , flexWrap:'wrap'}}>
            <center>
                <Typography variant="h1" sx={{fontWeight:'900' , fontFamily:'monospace'}}>
                    Learn the better way
                </Typography>
                <div style={{display:'flex' , flexDirection:'column',justifyContent:'space-between' , flexwrap:'wrap',padding:'3rem',backgroundColor:'whitesmoke' ,margin:'3rem', marginBottom:'2rem', borderRadius:'2rem', border:'solid',boxShadow:'10px 15px 0px black '}}>
                <Typography variant="h3" sx={{fontWeight:'600', padding:'2rem', textShadow:'0px 0px 0px grey',backgroundColor:'lightgrey', borderRadius:'2rem',boxShadow:'10px 15px 0px black',textAlign:'start'}}>
                Learn from Peers|
                </Typography>
                <Typography variant="h6" sx={{fontWeight:'500' , textAlign:'start' ,padding:'2rem'}}>
                Discover a unique learning experience on our website, where knowledge knows no bounds. Connect with fellow learners, share insights, and grow together. Benefit from diverse perspectives and collaborative wisdom. Join our vibrant community and elevate your learning journey today!"
                </Typography>
                </div>
                <div style={{display:'flex' , flexDirection:'column',justifyContent:'space-between' , padding:'3rem',backgroundColor:'whitesmoke',margin:'3rem', marginTop:'1rem', borderRadius:'2rem' ,border:'solid',boxShadow:'10px 15px 0px black '}}>
                <Typography variant="h3" sx={{fontWeight:'600', padding:'2rem', textShadow:'0px 0px 0px grey', textAlign:'start'}}>
                Teach with Expertise|
                </Typography>
                <Typography variant="h6" sx={{fontWeight:'500' , textAlign:'start' ,padding:'2rem'}}>
                Unlock the potential to inspire and educate on our platform. Share your knowledge with confidence and make a meaningful impact. Cultivate a community of eager learners and be the guide they seek. Join us in shaping the next generation of experts and leaders.
                </Typography>
                </div>
            </center>
        </div>
    </div>
}