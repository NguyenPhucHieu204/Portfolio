import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Thay ảnh screenshot dự án bằng hình thật của bạn, lưu trong /Assets/Projects/
import ecommerceImg from "../../Assets/Projects/Anh1.png";
import hotelImg from "../../Assets/Projects/Anh2.png";
import portfolioImg from "../../Assets/Projects/Anh3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I have worked on during my study and practice.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* E-commerce Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceImg}
              isBlog={false}
              title="E-commerce Website"
              description="Website thương mại điện tử (Laravel, PHP, JS, MySQL). 
              Chức năng: Đăng ký/đăng nhập, quản lý sản phẩm, giỏ hàng, đặt hàng, thanh toán, quản lý người dùng.
              Vai trò: Phát triển CRUD sản phẩm/người dùng, thiết kế giao diện bằng JS + Bootstrap."
              ghLink="https://github.com/NguyenPhucHieu204/online_book_selling_website"   
              demoLink="#"  
            />
          </Col>

          {/* Hotel Management Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotelImg}
              isBlog={false}
              title="Hotel Management Website"
              description="Website quản lý khách sạn (HTML, CSS, JS). 
              Chức năng: Trang chủ, phòng trưng bày, đánh giá, blog.
              Vai trò: Xây dựng giao diện và hiệu ứng người dùng, tối ưu trải nghiệm."
              ghLink="https://github.com/NguyenPhucHieu204/tourism"
              demoLink="#"
            />
          </Col>

          {/* Personal Portfolio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              isBlog={false}
              title="Personal Portfolio"
              description="Portfolio cá nhân (ReactJS). 
              Bao gồm: giới thiệu bản thân, kỹ năng, dự án, form liên hệ. 
              Đã deploy trên GitHub Pages."
              ghLink="https://github.com/NguyenPhucHieu204/Portfolio"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
