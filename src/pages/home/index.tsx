import bannerImage from "../../assets/img/banner-dio.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHeightlight } from "./styles";

const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHeightlight>
                        Implemente <br/>
                    </TitleHeightlight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafaio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começas agora" variant="secondary" onClick={() => null}/>
            </div>
            <div>
                <img src={bannerImage} alt="Imagem do React" />
            </div>
        </Container>
    </>)
}

export { Home }