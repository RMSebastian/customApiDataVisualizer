import "./Card.css"

const Card = () => {
  let image = "image";
  let name = "name";
  return (
    <div className="card">
      <div className="amiibo-image">{image}</div>
      <div className="amiibo-name">{name}</div>
    </div>
  );
};
export default Card;
