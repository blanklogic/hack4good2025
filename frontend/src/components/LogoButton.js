function LogoButton({ logo, text }) {
  return (
    <div className="logo-button">
      {logo}
      <p>{text}</p>
    </div>
  );
}

export default LogoButton;
