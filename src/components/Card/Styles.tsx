import styled from 'styled-components';


export const RelativeView = styled.div`
    width: 100%;
    position: relative;
`;


export const CenterView = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextView = styled.div`
    width: 400px;
    height: 300px;
    position: relative;
`;


export const CardRelativeView = styled.div`
    width: 100%;
    height:  100%;
    position: relative;
    max-width: 350px;
    max-height: 220px;
    overflow: hidden;
    border-radius: 20px;
`;

export const FrontCard = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`
export const BlurView = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 5;

`;

export const CircleBlur = styled.div`
    width: 100px;
`;

    /* width: ${({width}:{width: string}) => width};
    height: ${({height}:{height: string}) => height};
    border-radius: ${({borderRadius}:{borderRadius: string}) => borderRadius};
    background: ${({background}:{background: string}) => background};
    position: absolute;
    top:${({top}:{top: string}) => top};
    left:${({left}:{left: string}) => left};
    trasnform: ${({top, left}:{top: string, left:string}) => `translate(${props.left}, ${props.top})`}; */