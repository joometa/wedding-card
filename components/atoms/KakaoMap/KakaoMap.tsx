import React, { useEffect, useRef } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}

export function KakaoMap() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      const kakaoMapScript = document.createElement("script");
      kakaoMapScript.async = true;
      kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&libraries=services&autoload=false`;
      document.head.appendChild(kakaoMapScript);

      const onLoadKakaoAPI = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById("kakao-map");
          const options = {
            center: new window.kakao.maps.LatLng(
              37.907255718584445,
              127.7534886961313
            ),
            level: 3,
          };

          const map = new window.kakao.maps.Map(container, options);

          const geocoder = new window.kakao.maps.services.Geocoder();

          geocoder.addressSearch(
            "강원특별자치도 춘천시 동면 춘천순환로 770",
            function (result: any, status: any) {
              // 정상적으로 검색이 완료됐으면
              if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );

                const marker = new window.kakao.maps.Marker({
                  map: map,
                  position: coords,
                });

                // const infowindow = new window.kakao.maps.InfoWindow();
                // infowindow.open(map, marker);

                map.setCenter(coords);
              }
            }
          );
        });
      };
      kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
    }
  }, []);

  return <Wrapper id="kakao-map" ref={ref}></Wrapper>;
}

const Wrapper = styled.div`
  max-width: 420px;
  width: 100%;
  height: 400px;
`;
