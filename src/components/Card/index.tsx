import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import { CardContainer, ImageContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicute } from "./styles";

const Card = () => {
  return (
    <CardContainer>
        <ImageContainer>
            <ImageBackground src="https://www.paragyte.com/img/React_Banner.png"/>
        </ImageContainer>
        <Content>
            <UserInfo>
                <UserPicute src="https://avatars.githubusercontent.com/u/65604927?v=4"/>
                <div>
                    <h4>Lucas Corrêa</h4>
                    <p>Há 27 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto React JS na DIO</h4>
                <p>Projeto feito no BootCamp DIO em parceria com o Banco Inter... <strong>Saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#ReactJS #CSS #JavaScript #HTML</h4>
                <p><FiThumbsUp /> 34</p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
