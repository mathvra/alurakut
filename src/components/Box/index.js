import styled from 'styled-components'

const Box = styled.div`
    background: #2C2C2C;
    border-radius: 8px;
    
    padding: 16px;
    
    /* CSS Pré-Pronto */
    margin-bottom: 10px;
    
    .boxLink {
        font-size: 14px;
        color: #6F92BB;
        text-decoration: none;
        font-weight: 800;
    }

    .title {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 20px;
        color: #C7C7C7;
    }

    .subTitle {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
        color: #C7C7C7;
    }

    .smallTitle {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 700;
        color: #C7C7C7;
        margin-bottom: 20px;
    }

    hr {
        margin-top: 12px;
        margin-bottom: 8px;
        border-color: transparent;
        border-bottom-color: #ECF2FA;
    }

    input {
        width: 100%;
        background-color: #3A3A3A;
        color: #FFFFFF;
        border: 0;
        padding: 14px 16px;
        margin-bottom: 14px;
        border-radius: 10000px;
        ::placeholder {
            color: #999999;
            opacity: 1;
        }
    }

    button {
        border: 0;
        padding: 8px 12px;
        color: #FFFFFF;
        border-radius: 10000px;
        background-color: #6F92BB;
    }
`

export default Box