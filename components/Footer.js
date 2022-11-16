import style from "../styles/footer.module.css";
import Image from "next/image";
import myDP from "../public/Images/myDP.jpeg";

const Footer = () => {
  return (
    <>
      <center>
      <div className={style.footer}>
        <p>&copy;spotthecode.2022 <br/>designed and developed with 💙by <a href="https://www.instagram.com/mdazad2.0" target="blank">Md Azad</a></p>
      </div>
    </center>
    </>
  );
};

export default Footer;
