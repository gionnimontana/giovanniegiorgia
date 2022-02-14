import './GMapsButton.css';

const GMapsButton = ({text, address}) => {
  return (
    <div className="GMapsButton_container">
      <a href={address}>
        <div className="GMapsButton_copyButton">
          <i className={`fa fa-map GMapsButton_copyIcon`}></i>
        </div>
      </a>
      <div>{text}</div>
    </div>
  );
};

export default GMapsButton;
