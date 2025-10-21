function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5">
      <div className="spinner-border text-primary mb-2" role="status">
        <span className="visually-hidden">{text}</span>
      </div>
      <span>{text}</span>
    </div>
  );
}

export default LoadingSpinner;
