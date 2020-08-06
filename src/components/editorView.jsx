import React from 'react';
import styled from 'styled-components';
import massage from './editor-scripts';

const ViewBody = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    padding: 1rem !important;
`;

function EditorView({ source }) {
    return (
        <ViewBody>
            { massage(source) }
        </ViewBody>
    );
}

export default EditorView;