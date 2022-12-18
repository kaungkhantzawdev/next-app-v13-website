import { Box, Typography, Button, Paper } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import ImageHome from '../../public/assets/img/blue.svg';


const HomeComponent = () => {
    return ( 
        <Container maxWidth="xl" sx={{ display: 'flex'}}>
            <Box sx={{ 
                flexGrow: 1,
                height: '30rem',
                my: 5,
                backgroundImage: `url(${ImageHome})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: "black",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                   }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} sx={{ mt: { xs: 0, md: 12} }}>
                            <Box>
                                <Box>
                                    <Typography variant="h3" sx={{ mb: 3, fontWeight: 600}}>
                                        Find the good life by good health
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="p" sx={{ color: '#00000070'}}>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                                    </Typography>
                                    <Button variant='primary' sx={{ px: 3,my: 2, mt: 3, backgroundColor: 'blue !important', borderRadius: '8px', textTransform: 'capitalize', color: '#fff'}}>
                                        Learn More
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box sx={{ display: 'flex', justifyContent: 'end'}}>
                                <Image
                                    src="/assets/img/animate.svg"
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                />
                            </Box>
                        </Grid>
                    </Grid>
            </Box>
        </Container>
     );
}
 
export default HomeComponent;