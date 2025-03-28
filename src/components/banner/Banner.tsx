// import "./banner.scss";

interface BannerProps {
  messageOne: string,
  messageTwo?: string
}

const Banner: React.FC<BannerProps> = ({messageOne, messageTwo}) => {
  
  return (
    <div className="banner">
      <p>{messageOne}</p>
      <p>
        <span>{messageTwo}</span>
      </p>
    </div>
  );
};

export default Banner;
