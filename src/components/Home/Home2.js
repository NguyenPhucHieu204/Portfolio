import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // thay avatar.svg bằng ảnh bạn muốn
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              TÔI XIN <span className="purple"> GIỚI THIỆU </span> BẢN THÂN
            </h1>
            <p className="home-about-body">
              Xin chào 👋, tôi là{" "}
              <b className="purple">Nguyễn Phúc Hiếu</b>, một lập trình viên
              yêu thích xây dựng sản phẩm và học hỏi công nghệ mới.
              <br />
              <br />
              Tôi thành thạo các ngôn ngữ như{" "}
              <i>
                <b className="purple"> Html, Css, JavaScript và PHP (Laravel) </b>
              </i>
              <br />
              <br />
              Lĩnh vực tôi quan tâm là phát triển{" "}
              <i>
                <b className="purple">Web Applications </b> và{" "}
                <b className="purple">AI</b>.
              </i>
              <br />
              <br />
              Tôi thường áp dụng{" "}
              <b className="purple">React.js</b> và{" "}
              <b className="purple">Node.js</b> trong các dự án của mình, cùng
              với{" "}
              <i>
                <b className="purple"> hiện đại như Next.js và Laravel</b>
              </i>
              &nbsp; để tạo ra sản phẩm hiệu quả và tối ưu.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LIÊN HỆ</h1>
            <p>
              Hãy <span className="purple">liên hệ </span>với tôi thông qua
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NguyenPhucHieu204" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="" 
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
