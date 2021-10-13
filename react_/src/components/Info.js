import React from 'react';

const Info = ({ color, movie }) => {
    const colorKor = getColorKor(color);
    const movieGenreKor = getMovieGenreKor(movie);

    return (
        <div>
            제가 가장 좋아하는 색은 {colorKor} 이고, <br />
            즐겨보는 영화 장르는 {movieGenreKor} 입니다.
        </div>
    );
};

const getColorKor = color => {

    console.log("컬러함수");

    switch (color) {
        case "red":
            return "빨강";
        case "orange":
            return "주황";
        case "yellow":
            return "노랑";
        case "green":
            return "초록";
        case "blue":
            return "파랑";
        case "navy":
            return "남";
        case "purple":
            return "보라";
        default:
            return "레인보우";
    }
};

const getMovieGenreKor = movie => {

    console.log("무비함수");
    switch (movie) {
        case "Marriage Story":
            return "드라마";
        case "The Fast And The Furious":
            return "액션";
        case "Avengers":
            return "슈퍼히어로";
        default:
            return "아직 잘 모름";
    }
};


export default Info;