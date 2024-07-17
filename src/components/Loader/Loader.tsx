import "./Loader.css";
interface Props {
  loading: boolean;
}
const Loader = ({ loading }: Props) => {
  return <div className={`loader ${loading ? "" : "loader--hidden"}`}></div>;
};

export default Loader;
