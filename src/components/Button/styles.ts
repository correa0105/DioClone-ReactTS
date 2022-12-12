import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background-color: #565656;
    color: #FFFF;
    border: 2px solid #151515;
    border-radius: 22px;
    padding: 6px 12px;
    min-width: 120px;
    width: 100%;
    position: relative;

    &:hover {
        cursor: pointer;
        background-color: #E41050;
    }

    ${({ variant }) => variant !== "primary" && css`
        background-color: #E41050;
        min-width: 167px;
        height: 33px;

        &:hover {
            opacity: 0.6;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`

