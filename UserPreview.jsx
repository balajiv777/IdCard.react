function UserPreview({ name, email, position, mobile, address, photo }) {
  return (
    <>
      <h3>JAPANESE TECH</h3>
      <p>TECHNOLOGIA</p>
      {photo && <img src={''} alt="Profile" width="100" height="100" />}
      <p>Name: {name}</p>
      <p>Position: {position}</p>
      <p>Mobile: {mobile}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>www.japanesetech.com</p>
    </>
  );
}

export default UserPreview;
