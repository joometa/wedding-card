"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import IconX from "public/assets/icons/x.svg";
import "./_accordion.scss";

interface Props {
  className?: string;
  title: string;
  children?: ReactNode;
}

export const Accordion = ({ className, title, children }: Props) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const props = useSpring({ height });

  useEffect(() => {
    if (contentRef?.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`accordion ${className}`}>
      <div
        className={`accordion--title ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <IconX
          width={18}
          height={18}
          stroke={"#fff"}
          className={isOpen ? "active" : ""}
        />
      </div>
      <animated.div style={props}>
        <div className="accordion--content" ref={contentRef}>
          {children}
        </div>
      </animated.div>
    </div>
  );
};
