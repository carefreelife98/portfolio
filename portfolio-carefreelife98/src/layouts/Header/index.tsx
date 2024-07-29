import './style.css';
import {useLocation, useNavigate} from "react-router-dom";
import {
    MAIN_PATH,
} from "../../constants";
import {useEffect, useState} from "react";
// import * as path from "path";

//         component: 헤더 레이아웃          //
export default function Header() {

    // state: path 상태 (현재 위치)
    const { pathname } = useLocation();
    const [isMainPage, setMainPage] = useState<boolean>(false);

    // function: 네비게이트 함수
    const navigate = useNavigate();

    // function: 로고 클릭 이벤트 처리 함수
    const onLogoClickHandler = () => {
        navigate(MAIN_PATH());
    };

    // effect: path 가 변경 될 때마다 실행될 함수
    useEffect(() => {

        const isMainPage = pathname === MAIN_PATH();
        setMainPage(isMainPage);

    }, [pathname])


    //         render: 헤더 레이아웃 렌더링          //
    return (
        <div id='header'>
            <div className='header-container'>
                <div className='header-left-box' onClick={onLogoClickHandler}>
                    <div className='icon-box'>
                        <div className='icon logo-icon'></div>
                    </div>
                    <div className='header-logo'>{'Build CarefreeLife !'}</div>
                </div>
                <div className='header-right-box'>
                    {/* 각 페이지 내 버튼 컴포넌트 노출 조건 */}
                    {
                        (isMainPage) && <button title='임시 버튼' defaultValue='임시 버튼'/>
                    }
                </div>
            </div>
        </div>
    );
};
