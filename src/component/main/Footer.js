const Footer = () => {
  const qrcode =
    "https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M=";
  const playstore = "https://i.postimg.cc/nrkn2WZC/image.png";
  const appstore =
    "https://i.postimg.cc/Z5q68tZv/2560px-Download-on-the-App-Store-Badge-1.png";
  const google = "https://cdn-icons-png.flaticon.com/512/300/300221.png";
  const fb = "https://cdn-icons-png.flaticon.com/512/733/733547.png";
  const tiktok = "https://cdn-icons-png.flaticon.com/512/3046/3046120.png";

  return (
    <div className="footer">
      <div className="footer-links">
        <div className="download-buttons">
          <img src={playstore} alt="playstore" />
          <img src={appstore} alt="appstore" />
        </div>
        <span className="footer-qr-scan">
          <img src={qrcode} alt="qrcode" />
          <label>Scan the qr to Download the App</label>
        </span>

        <div className="footer-social-media">
          <img src={google} alt="google" />
          <img src={fb} alt="fb" />
          <img src={tiktok} alt="tiktok" />
        </div>
      </div>
      <div className="footer-menu">
        <a href="">About CoinTails</a>
        <a href="">Help and Support</a>
        <a href="">Customer Service</a>
      </div>
    </div>
  );
};

export default Footer;
