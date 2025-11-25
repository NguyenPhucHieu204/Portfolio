import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/common/Particle";

// Thay ảnh screenshot dự án bằng hình thật của bạn, lưu trong /assets/Projects/
import ecommerceImg from "../../assets/Projects/Anh1.png";
import hotelImg from "../../assets/Projects/Anh2.png";
import portfolioImg from "../../assets/Projects/Anh3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Các <strong className="purple">Dự án </strong> của tôi
        </h1>
        <p style={{ color: "white" }}>
          Dưới đây là một số dự án tôi đã thực hiện trong quá trình học tập và thực hành.
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
              title="CMP Travel - Nền tảng đặt vé du lịch hỗ trợ AI"
              description="Website quản lý khách sạn (HTML, CSS, JS). 
              Điểm nổi bật: Đề xuất hỗ trợ bởi AI, Đề xuất hỗ trợ bởi AI, Xác thực quản trị nâng cao, Điều hướng cuộn thông minh, Ví CMP, Tìm kiếm khách sạn theo thời gian thực, Trợ lý AI Chatbot.
              Vai trò: Nền tảng đặt vé du lịch toàn diện với các đề xuất AI, điều hướng cuộn thông minh, đánh giá hướng dẫn viên du lịch và xác thực quản trị nâng cao bằng nhận dạng khuôn mặt."
              ghLink="https://github.com/hquocmanh0502/cmp-travel-ai-web"
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
