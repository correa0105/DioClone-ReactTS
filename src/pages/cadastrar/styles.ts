import styled from "styled-components";

export const Container = styled.main`
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 350px;

    form {
        margin-top: 1rem;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    
    div {
        margin-top: .5rem;
        display: flex;
        flex-direction: row;
    }

    p {
        font-size: 1rem;
        font-weight: 300;
        font-family: "Open Sans";
    }
`

export const Title = styled.h2`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleLogin = styled.span`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
`


export const EsqueciText = styled.span`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;

    &:hover {
        cursor: pointer;
    }
`

export const CriarText = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: rgb(35, 221, 122);
    margin-left: .4rem;

    &:hover {
        cursor: pointer;
    }
`