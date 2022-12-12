import { Link } from "react-router-dom";

import React from "react";
import logo from "../../assets/img/logo-dio.svg";
import { Button } from "../Button";
import { IHeader } from "./types";

import { Container, Menu, Row, UserPicture, Wrapper } from "./styles";

const Header = ({autenticado, variant}: IHeader) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da Dio" />
                </Row>
                <Row>
                    <Link to="/"><Menu href="#">Home</Menu></Link>
                    <Link to="/feed"><Menu href="#">Feed</Menu></Link>
                    <Menu href="#">Planos</Menu>
                    <Menu href="#">Para Empresas</Menu>
                    {autenticado ? ( <>
                    <UserPicture src="https://avatars.githubusercontent.com/u/65604927?v=4"/>
                    <Link to="/login"><Menu variant={variant} href="#">Sair</Menu></Link>
                    </>) : (
                    <>
                    <Link to="/login"><Button title="ENTRAR" /></Link>
                    <Button title="CADASTRAR" /> 
                    </> ) }

                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }