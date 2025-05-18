function InputContainer({ id, label, ...props }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}

export default InputContainer;
