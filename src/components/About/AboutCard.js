import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Xin chào mọi người 👋, tôi là{" "}
            <span className="purple">Nguyễn Phúc Hiếu </span>
            đến từ <span className="purple">Ninh Bình, Việt Nam.</span>
            <br />
            Tôi hiện đang là sinh viên ngành{" "}
            <span className="purple">Công nghệ Thông tin</span> tại
            Đại học Phenikaa (2022–2026).
            <br />
            <br />
            Mục tiêu nghề nghiệp của tôi là trở thành{" "}
            <b className="purple">Front-end Developer</b>, áp dụng ReactJS và các công nghệ web để xây dựng
            giao diện hiện đại, thân thiện với người dùng. Đồng thời, tôi cũng đang học thêm{" "}
            <b className="purple">Back-end (PHP, Laravel)</b> để hướng tới trở thành{" "}
            <b className="purple">Full-stack Developer</b> trong tương lai.
            <br />
            <br />
            Ngoài lập trình, tôi cũng yêu thích một số hoạt động khác:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Chơi game 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Học hỏi công nghệ mới 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Du lịch & khám phá ✈️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Không ngừng học hỏi để tạo ra những sản phẩm hữu ích!"{" "}
          </p>
          <footer className="blockquote-footer">Nguyễn Phúc Hiếu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
