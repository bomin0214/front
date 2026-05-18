import { useState, useEffect } from "react";

function Timer(){
    const [sec, setSec] = useState(0);

    useEffect(() => {
        const id = setInterval(() => { // 1초(1000ms)마다 콜백 함수를 반복 실행
            setSec((prev) => prev+1);
        }, 1000); // Mounting 타이머 시작

        return () => { // 클린업 함수 -> 이 함수 없으면 컴포넌트가 사라져도 백그라운드에서 계속 돌아가고 있음. 
            clearInterval(id); // Unmounting 시 타이머 정리. 멈출 때 사용
            console.log("타이머 정리됨");
        };
    }, []); // Mount 할 때 한 번만 실행. setInterval 시작. 매번 시작할 때마다 setInterval 만들면 타이머가 계속 쌓임.

    return <p>{sec}초</p>;
}

export default Timer;
