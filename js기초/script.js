// React 컴포넌트 정의
function App() {
    const [message, setMessage] = React.useState('Hello, World!');

    // 메시지 변경 함수
    const changeMessage = () => {
        setMessage('New Message!');
    };

    // JSX로 UI 반환
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={changeMessage}>Change Message</button>
        </div>
    );
}

// React 애플리케이션을 root 요소에 렌더링
ReactDOM.render(<App />, document.getElementById('root'));
