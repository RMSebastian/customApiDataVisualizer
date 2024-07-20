import "./Checkbox.css";

type Props = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="checkbox-container">
      <div className="checkbox-label">{label}</div>
      <input type="checkbox" checked={checked} onChange={handleChange} />
    </div>
  );
};

export default Checkbox;
