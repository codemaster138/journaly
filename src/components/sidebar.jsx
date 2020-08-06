import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PenIcon} from '../resources/pencil.svg';
import { ReactComponent as ListIcon} from '../resources/list.svg';

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 4rem;
    border-right: 1px solid var(--accent);
    height: 100vh;
`;

const SideIcon = styled.div`
    width: 4rem;
    height: 4rem;
    padding: 0;
    margin: 0;
    cursor: pointer;
    
    &:hover {
        background: rgba(0,0,0,0.02);
    }

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 40%;
        height: auto;
    }
`;

function SideBar() {
    return <Container>
        <SideIcon>
            <PenIcon></PenIcon>
        </SideIcon>
        <SideIcon>
            <ListIcon></ListIcon>
        </SideIcon>
    </Container>
}

export default SideBar;