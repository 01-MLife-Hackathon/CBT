import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MainPageLine = styled.div`
    text-align : center;
`;
const MainPage = () => {
    return(
        <MainPageLine>
            <h1>안녕하십니까?</h1>
            <h2>지금은 10시입니다</h2>
        </MainPageLine>
    );
}

export default MainPage;