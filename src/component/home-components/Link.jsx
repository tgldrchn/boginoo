const Links = ({ link }) => {
  return (
    <div className="holboosnuud">
      <div className="ugugdsun">
        <div className="holboos">Өгөгдсөн холбоос:</div>
        <div className="link">{link.url}</div>
      </div>
      <div className="bogino">
        <div className="holboos">Богино холбоос:</div>
        <div className="link">{link.shortLink}</div>
      </div>
    </div>
  );
};
export default Links;
