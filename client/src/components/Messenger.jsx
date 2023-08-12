
//components
import { AppBar, Toolbar, styled, Box } from '@mui/material';

import ChatDialog from './chat/chatDialog';
import LoginDialog from "./account/LoginDialog";

import { useContext } from 'react';

import { AccountContext } from '../context/AccountProvider';

//components



const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 113px;
    box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
    background: #00bfa5;
    height: 200px;
    box-shadow: none;
`;

const Messenger = () => {
    const { account } = useContext(AccountContext);
    
    return (
       
        <Component>
            {
                account ? <>
                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <ChatDialog />
                </> :
               
                <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
        </Component>
        
    )
}

export default Messenger;