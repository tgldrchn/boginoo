const Links = ({ link }) => {
  return (
    <div className="holboosnuud">
      <div className="ugugdsun">
        <div className="holboos">Өгөгдсөн холбоос:</div>
        <div className="link">{link.url}</div>
      </div>
      <div className="bogino">
        <div className="holboos">Богино холбоос:</div>
        <a className="link" href={link.url}>
          http://localhost:3000/{link.shortLink}
        </a>
      </div>
    </div>
  );
};
export default Links;
