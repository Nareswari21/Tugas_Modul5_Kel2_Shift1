import style from "styled-components";

export const Button = style.button`
    width: 200px;
    height: 50px;
    color: white;
    font-size: 15px;
    font-weight: border;
    border: none;
    border-radius: 10px;
    width: 90px;
    height: 40px;
    background-color: ${props => props.color};

    &:hover {
        cursor:pointer;
        background-color: ${props => props.darkColor};
    }
`;