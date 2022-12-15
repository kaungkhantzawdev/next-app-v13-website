import { Box, Container } from "@mui/material";
import Footer from "../main/Footer";
import Header from "../main/Header";

const Layout = ({ children }) => {
    return ( 
        <>
        <Box>
            <Container>
                <Header/>
                <main>{ children }</main>
                <Footer/>
            </Container>
        </Box>
        </>
     );
}
 
export default Layout;