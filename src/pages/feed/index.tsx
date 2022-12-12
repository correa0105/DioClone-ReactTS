import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";
import { Card } from "../../components/Card";

import { Container, Column, Title, TitleHeightlight } from "./styles";

const Feed = () => {
    return (<>
        <Header autenticado={true} variant="primary"/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHeightlight># RANKING TOP 5 DA SEMANA</TitleHeightlight>
                <UserInfo percentual={89} nome={"Lucas Corrêa"} image={"https://avatars.githubusercontent.com/u/65604927?v=4"}/>
                <UserInfo percentual={85} nome={"Paola Borges"} image={"https://avatars.githubusercontent.com/u/65604927?v=4"}/>
                <UserInfo percentual={80} nome={"Vitor"} image={"https://avatars.githubusercontent.com/u/65604927?v=4"}/>
                <UserInfo percentual={71} nome={"Diego Silva"} image={"https://avatars.githubusercontent.com/u/65604927?v=4"}/>
                <UserInfo percentual={57} nome={"Miguel Torres"} image={"https://avatars.githubusercontent.com/u/65604927?v=4"}/>
            </Column>
        </Container>
    </>)
}

export { Feed }