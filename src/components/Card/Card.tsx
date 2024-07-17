import "./Card.css";
type Props = {
  name: string;
  image: string;
};
const Card = ({ name, image }: Props) => {
  return (
    <div className="card">
      <div className="card-image-holder">
        <img className="card-image" src={image} />
      </div>
      <div className="card-name-holder">{name}</div>
    </div>
  );
};
export default Card;
