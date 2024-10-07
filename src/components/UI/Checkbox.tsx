type Props = {} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = (props: Props) => {
  return (
    <input
      type="checkbox"
      {...props}
      className="accent-red-600 default:ring-600 w-5 h-5"
    />
  );
};

export default Checkbox;
