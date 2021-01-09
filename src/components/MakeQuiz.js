import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Main = styled.div`
    margin: 0;
    background-color: rgb(236, 236, 236); no-repeat center center fixed;
    background-position: top;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: 100vh;
    z-index: -1;

header{
    margin: 8px 12px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 50px;
    font-weight: 900;
}

.content{
    display: flex;
    margin: 20px 60px;
    justify-content: space-between;
}

.left-part{
    background-color: white;
    border-radius: 20px;
    width: 1500px;
    margin-right: 50px;
}

.right-part{
    margin-right: 50px;
}

p{
    font-family: 'Noto Sans KR', sans-serif;
    margin: 8px 12px;
    font-size: 24px;
    font-weight: 600;
}

h2{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

h4{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
}

label{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
}

input{
    cursor: pointer;
}

.down-side-buttons{
    display: flex;
    padding-left: 0;
    list-style: none;
}

.down-side-buttons li{
    margin: 0px 4px;
}

button{
    background-color: white;
    border: grey;
    outline: none;
    cursor: pointer;
}
`;


const Makequiz = ({writing, number, title}) => {
    const [loading, setLoading] = useState(false),
      [problemWriting, setProblemWriting] = useState('이곳에 지문을 입력(안 넣어도 됨)'),
      [problemNumber, setProblemNumber] = useState(''),
      [problemName, setProblemName] = useState('이곳에 문제를 입력'),
      [problemNameChange, setProblemNameChange] = useState(''),
      [problemWritingChange, setProblemWritingChange] = useState(''),
      [submit, setSubmit] = useState(false);

    useEffect(() => {
        if(loading === false){
            setProblemWriting(writing);
            setProblemNumber(number);
            setProblemName(title);
            setLoading(true);
        }
    }, [loading])
    useEffect(() => {
        if(problemNameChange !== ' '){
            setProblemName(problemNameChange);
            setProblemNameChange('')
        }
    }, [problemNameChange])

    useEffect(() => {
        if(problemWritingChange !== ' '){
            setProblemWriting(problemWritingChange);
            setProblemWritingChange('');
        }
    }, [problemWritingChange])

    return(
        <Main>
            <header>{problemNumber}번 문제</header>
            <hr/>
            <div class="content">
                <div class="left-part">
                    <div class="prompt">
                        <p>
                            <input placeholder = "지문을 넣어주세요(필수아님)"/>
                        </p>
                    </div>
                </div>
                <div class="right-part">
                    <div class="question">
                        <input placeholder = "문제를 입력해주세요"/>
                    </div>
                    <form class="answer"></form>
                    <ul class="down-side-buttons">
                        <li><button onClick = {setSubmit()}>문제저장</button></li>
                    </ul>
                </div>
            </div>
        </Main>
    )
}

export default Makequiz
