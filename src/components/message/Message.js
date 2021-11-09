import s from "./message.module.css";

const Message = ({ message }) => {
  return <div className={s.messages}>message: {message}</div>;
};

export default Message;