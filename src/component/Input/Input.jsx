import styles from "./Input.module.css";

export const Input = ({
  id = "",
  type = "",
  placeholder = "",
  labelText = "",
  setInputNameChange,
}) => {
  return (
    <div className="pb-4">
      <label className="text-base" htmlFor={id}>
        {labelText}
        <input
          onChange={(e) => setInputNameChange(e.target.value)}
          required
          id={id}
          className={styles.input}
          type={type}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};
