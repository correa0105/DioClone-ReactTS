import React from 'react';
import { Container, NameText, Progress, UserPicuture } from './styles';
import { IUserInfo } from './types';

const UserInfo = ({nome, image, percentual}: IUserInfo) => {
  return (
    <Container>
        <UserPicuture src={image}/>
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}

export { UserInfo }