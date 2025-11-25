import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg"; // thay avatar.svg bằng ảnh bạn muốn
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";

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
              <b className="purple">Nguyễn Phúc Hiếu</b>, một sinh viên Công nghệ Thông tin
              đam mê phát triển giao diện web hiện đại và học hỏi công nghệ mới.
              <br />
              <br />
              Tôi thành thạo các ngôn ngữ và công nghệ như{" "}
              <i>
                <b className="purple"> HTML5, CSS3, JavaScript (ES6+), PHP và ReactJS </b>
              </i>
              <br />
              <br />
              Định hướng của tôi là trở thành{" "}
              <i>
                <b className="purple">Front-end Developer</b> chuyên nghiệp, sau đó
                mở rộng sang <b className="purple">Full-stack Developer</b>.
              </i>
              <br />
              <br />
              Tôi thường áp dụng{" "}
              <b className="purple">ReactJS</b>,{" "}
              <b className="purple">Bootstrap 5</b>, và{" "}
              <b className="purple">TailwindCSS</b> để xây dựng giao diện
              responsive và tối ưu hiệu suất. Đồng thời, tôi cũng có kinh nghiệm với{" "}
              <i>
                <b className="purple">Laravel, MySQL</b>
              </i>
              &nbsp; để phát triển ứng dụng web hoàn chỉnh.
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

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
