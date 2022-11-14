import empty from "../empty.png";

export const Empty = () => {
  return (
    <div className="container emptyContainer">
      <img className="emptyImg" src={empty} alt="empty page" />
    </div>
  );
};
