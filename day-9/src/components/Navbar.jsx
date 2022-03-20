import { Box, Flex, Button, Spacer, Heading, Center } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const Navbar = () => {

    const { isAuth, toggleAuth, setIsLogin } = useContext(AuthContext);

    const handleLogout = () => {
        toggleAuth();
        setIsLogin(false);
    }

    return (
        <Flex bg='orange'>
            <Box>
                <Heading m={2}>User Form</Heading>
            </Box>
            <Spacer />
            <Center mr={6}>
                <Button
                    colorScheme='green'
                    onClick={isAuth ? handleLogout : undefined}
                >
                    {isAuth ? "Logout" : "Login"}
                </Button>
            </Center>
        </Flex>
    );
};