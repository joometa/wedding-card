import flowerImage from "public/assets/images/flower_white.png";
import Image from "next/image";
import "./_divide-image.scss";

export const DivideImage = () => {
  return (
    <div className="flower-image-wrap">
      <Image src={flowerImage} alt="divide-image" />
    </div>
  );
};
