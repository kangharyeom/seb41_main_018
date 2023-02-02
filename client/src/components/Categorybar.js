import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../util/axiosContents";
import { useRecoilState } from "recoil";
import { CategorySearchResultState } from "../../src/state/atom";

import { GachiGalleImgSrc } from "../sampleImage";

const Categorybar = () => {
    const navigate = useNavigate();
    const [categorySearch, setCategorySearch] = useRecoilState(CategorySearchResultState);

    const category = [
        { src: GachiGalleImgSrc.domestic_travel, title: "국내여행", themeType: "DOMESTIC" },
        { src: GachiGalleImgSrc.overseas_travel, title: "해외여행", themeType: "ABROAD" },
        { src: GachiGalleImgSrc.family_travel, title: "가족여행", themeType: "FAMILY" },
        { src: GachiGalleImgSrc.couple_travel, title: "커플여행", themeType: "COUPLE" },
        { src: GachiGalleImgSrc.friend_travel, title: "친구여행", themeType: "FRIENDS" },
        { src: GachiGalleImgSrc.solo_travel, title: "혼자여행", themeType: "ALONE" },
        { src: GachiGalleImgSrc.cafe_travel, title: "카페투어", themeType: "CAFE" },
        { src: GachiGalleImgSrc.food_travel, title: "맛집투어", themeType: "FOOD" },
    ];

    // 카테고리 버튼 클릭 시 검색 요청
    const searchHandler = (themeType) => {
        getCategory(themeType).then((data) => {
            if (data) {
                setCategorySearch(data && data.data);
                navigate("/result");
            }
        });
    };
    return (
        <div css={wrap}>
            <div
                css={css`
                    display: flex;
                `}
            >
                {category.slice(0, category.length / 2).map((el, index) => (
                    <div
                        key={index}
                        css={categoryContainer}
                        onClick={() => searchHandler(el.themeType)}
                    >
                        <img src={el.src} css={categoryImg} />
                        <span css={categoryFont}>{el.title}</span>
                    </div>
                ))}
            </div>
            <div
                css={css`
                    display: flex;
                `}
            >
                {category.slice(category.length / 2, category.length).map((el, index) => (
                    <div
                        key={index}
                        css={categoryContainer}
                        onClick={() => searchHandler(el.themeType)}
                    >
                        <img src={el.src} css={categoryImg} />
                        <span css={categoryFont}>{el.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const wrap = css`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 460px;
    }
`;

const categoryContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    cursor: pointer;
    &:hover {
        font-weight: 900;
    }
`;

const categoryImg = css`
    width: 25px;
    height: 25px;
    margin: 20px 40px;
`;

const categoryFont = css`
    text-align: center;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 20px;
`;
export default Categorybar;
