type Props = {
  errors: string[];
};

const ErrorItem = (props: Props) => {
  return (
    <ul className="-mt-4 mb-5">
      {props.errors.map((item) => (
        <li className="text-red-700" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ErrorItem;
