import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    margin: 0;
    background-color: rgb(236, 236, 236);


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

const Makequiz = () => {
    return(
       <Main>카나미 핸섬</Main>
    )
}

export default Makequiz

/*
 <Main>
            <header>1번 문제</header>
            <hr/>
            <div class="content">
                <div class="left-part">
                    <div class="prompt">
                        <p>
                            파이: 여기 이상해요 ㅠㅠ<br/>
                            냐코: 이이ㅣ잉ㅇ 앗살라말라이쿰!!!
                        </p>
                    </div>
                </div>
                <div class="right-part">
                    <div class="question">
                        <h2>다음에 제시된 내용 중 옳지 않은 것은?</h2>
                    </div>
                    <div class="answer">
                        <h4>1번</h4><hr/><label><input type="checkbox" name="answer-one"/>나는 바브다</label>
                        <h4>2번</h4><hr/><label><input type="checkbox" name="answer-two"/>나는 바브다</label>
                        <h4>3번</h4><hr/><label><input type="checkbox" name="answer-three"/>나는 바브다</label>
                        <h4>4번</h4><hr/><label><input type="checkbox" name="answer-four"/>나는 바브다</label>
                        <h4>5번</h4><hr/><label><input type="checkbox" name="answer-five"/>나는 바브다</label>
                    </div>
                    <ul class="down-side-buttons">
                        <li><button>문제저장</button></li>
                        <li><button></button></li>
                        <li><button></button></li>
                    </ul>
                </div>
            </div>
        </Main>
        */