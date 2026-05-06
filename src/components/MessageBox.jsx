import './MessageBox.css';

function MessageBox({ message, type = 'info' }) {
  return (
    <div className="message-box">
      <p className={type}>{message}</p>
    </div>
  );
}

export default MessageBox;
