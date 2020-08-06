import React, { useState } from 'react';
import styled from 'styled-components';
import EditorView from './editorView';

const Container = styled.div`
    width: calc(100vw - 4rem);
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    font-size: 1.2rem;
    font-family: DMMono, monospace !important;
`;

const EditorInput = styled.div`
    outline: none;
    width: 100%;
    height: 100%;
    padding: 1rem !important;
    color: #000;
    -webkit-text-fill-color: transparent;
`;

function Editor() {
    const [markdown, setMarkdown] = useState('');
    return (
        <Container>
            <EditorInput contentEditable="true" onInput={(e) => {
                setMarkdown(e.target.innerText);
            }}></EditorInput>
            <EditorView source={markdown}></EditorView>
        </Container>
    );
}

export default Editor;