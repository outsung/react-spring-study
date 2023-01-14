import React, { useEffect, useRef, useState } from "react";
import { Buttons, DummyContent, ScrollContainer } from "./components";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "./styles.css";

export default function App() {
  const [content, set] = useState(2);

  return (
    <>
      <Buttons
        addContent={() => set(content + 1)}
        deleteContent={() => set(content < 2 ? content - 1 : 2)}
      />
      {/* 
        <DummyContent content={content} />
         */}
      <ParallaxTest />
    </>
  );
}

function ParallaxTest() {
  const parallax = useRef<IParallax>(null!);
  // parallax.current.busy

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      console.log({
        current: parallax.current.current,
        offset: parallax.current.offset,
        space: parallax.current.space,
        busy: parallax.current.busy,
      });
    }, 1000);
    return () => clearInterval(intervalHandle);
  }, []);

  return (
    <ScrollContainer onScroll={(value) => parallax.current.scrollTo(value)}>
      <Parallax
        ref={parallax}
        pages={15}
        style={{ backgroundColor: "#253237" }}
        config={{ tension: 280, friction: 120, mass: 1 }}
        enabled={false}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{ backgroundColor: "#002921" }}
        />

        <ParallaxLayer
          offset={1}
          speed={0}
          factor={2.5}
          style={{ backgroundColor: "#f0ff3d" }}
        >
          <div>
            <img src="https://www.vendredi-society.fr/img/hero_1.png" />
            <img src="https://www.vendredi-society.fr/img/st.jpg" />
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer
        offset={0}
        speed={0}
        factor={1}
        sticky={{}}
        style={{ zIndex: 11 }}
      ></ParallaxLayer> */}

        {/* 
      </ParallaxLayer> */}
        {/*  */}
        {/* </ParallaxLayer> */}

        {/* <ParallaxLayer
        offset={2}
        speed={0}
        factor={1}
        // sticky={{ start: 2 }}
        style={{ backgroundColor: "#002921" }}
      >
        <Title color="#f7f7f7" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={0}
        factor={1}
        horizontal
        style={{ backgroundColor: "#290000" }}
      >
        <Title color="#003d31" />
      </ParallaxLayer> */}
      </Parallax>
    </ScrollContainer>
  );
}

interface TitleProps {
  color: "#003d31" | "#f7f7f7";
}
function Title({ color }: TitleProps) {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color,
      }}
    >
      <p style={{ font: '500 normal clamp(81px, 10.5vw, 201px)/1 "Roobert"' }}>
        LIGHT HOUSE
      </p>
      <p style={{ font: '500 normal clamp(81px, 10.5vw, 201px)/1 "Roobert"' }}>
        PORTFOLIO & SNS
      </p>
      <p style={{ font: '500 normal clamp(81px, 10.5vw, 201px)/1 "Roobert"' }}>
        XAM
      </p>
    </div>
  );
}
