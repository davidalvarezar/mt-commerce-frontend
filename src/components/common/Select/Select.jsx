function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error,
}) {
  return (
    <div style={{ marginBottom: "16px" }}>
      {label && (
        <label
          htmlFor={name}
          style={{
            display: "block",
            marginBottom: "6px",
            fontWeight: "600",
          }}
        >
          {label}
          {required && (
            <span style={{ color: "red" }}> *</span>
          )}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: error ? "1px solid red" : "1px solid #ccc",
          boxSizing: "border-box",
          backgroundColor: "white",
        }}
      >
        <option value="">Seleccionar...</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <small
          style={{
            color: "red",
            display: "block",
            marginTop: "4px",
          }}
        >
          {error}
        </small>
      )}
    </div>
  );
}

export default Select;