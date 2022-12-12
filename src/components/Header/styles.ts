import styled, { css } from "styled-components";
import { IHeaderStyled } from "./types";

export const Container = styled.div`
    width: 98%;
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    aligh-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    padding: 6px 0;
    display: flex;
    justify-content: center;
    align-items: center
`

export const Menu = styled.a<IHeaderStyled>`
    font-family: "Open Sans";
    font-size: normal;
    line-height: 25px;
    color: #FFFFFF;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        color: #E41050;
    }

    ${({ variant }) => variant === "primary" && css`
        &:hover {
                color: #FFFFFF;
        }

        color: #E41050;
    `}

`
  
export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFFFF;
`