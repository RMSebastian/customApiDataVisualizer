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
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {label}
    </div>
  );
};

export default Checkbox;
