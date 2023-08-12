import { Dialog, Box ,Typography,List,ListItem,styled} from "@mui/material";
import {qrCodeImage} from '../../constants/data';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { AccountContext } from "../../context/AccountProvider";
import { useContext } from "react";
import { addUser } from "../../service/api";

const Component = styled(Box)`
    display: flex; 
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QRcode = styled('img')({
    margin: '45px 0 0 95px',
    height: 224,
    width: 224
});

const Title = styled(Typography)`
    font-size: 23px;
    margin-bottom: 16px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const K = styled(Box)`
    padding: 3px 3PX 3px 3px;
    font-size: 1.005em;
    font-weight: 500;
    
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 10px;
        font-size: 15px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    marginTop: '13%',
    height: '95%',
    width: '65%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}


const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }
    const onLoginError = (res) => {
        console.log('Login Failed',res);
    }
    return (

        <Dialog open = {true} hideBackdrop={true} PaperProps={{elevation: 0,sx: dialogStyle}}>
            <Component>
                <Container>
                    <Title>  Use WhatsApp on your computer</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone </ListItem>
                        <ListItem>2. Tap <K>  Menu  </K> or <K> Settings </K> and select <K> Linked Devices </K> </ListItem>
                        <ListItem>3. Tap on <K>Link a device</K></ListItem>
                        <ListItem>4. Point your phone to this screen to capture the QR code </ListItem>
                    </StyledList>
                </Container>
                <Box style = {{ position : 'relative'}}>
                <QRcode src = {qrCodeImage} alt= "qr code"/>
                
                <Box style = {{ position : 'absolute',top: '40%',transform: 'translatex(37%)'}}>
                <GoogleLogin
                    onSuccess={onLoginSuccess}
                    onError={onLoginError}
                    
                />

                </Box>

                </Box>
            </Component >
        
        </Dialog>
    )
}

export default LoginDialog;