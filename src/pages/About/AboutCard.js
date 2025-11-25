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
            đến từ <span className="purple">Vụ Bản, Ninh Bình, Việt Nam.</span>
            <br />
            Tôi hiện đang là sinh viên năm 4 ngành{" "}
            <span className="purple">Công nghệ Thông tin</span> tại
            Trường Đại học Phenikaa (2022–2026).
            <br />
            <br />
            Mục tiêu nghề nghiệp của tôi là trở thành{" "}
            <b className="purple">Front-end Developer</b> chuyên nghiệp, có khả năng xây dựng
            giao diện web hiện đại, responsive và tối ưu hiệu suất bằng ReactJS và các công nghệ web tiên tiến.
            Tôi luôn chủ động học hỏi, thích thử nghiệm công nghệ mới và đang học thêm{" "}
            <b className="purple">Back-end (PHP, Laravel)</b> để hướng tới trở thành{" "}
            <b className="purple">Full-stack Developer</b> trong tương lai.
            <br />
            <br />
            Ngoài lập trình, tôi cũng yêu thích một số hoạt động khác:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Học công nghệ mới và làm dự án cá nhân 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Chơi thể thao 🏃‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Chơi game và nghe nhạc 🎮🎵
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Luôn học hỏi, thử nghiệm và không ngừng phát triển!"{" "}
          </p>
          <footer className="blockquote-footer">Nguyễn Phúc Hiếu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
