import "./button.css"; // Import the CSS file

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="custom-button">
      {text}
    </button>
  );
}

export default Button;
