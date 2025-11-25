/**
 * Projects Data Constants
 * Quản lý tất cả thông tin dự án
 */

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "Website thương mại điện tử (Laravel, PHP, JS, MySQL). Chức năng: Đăng ký/đăng nhập, quản lý sản phẩm, giỏ hàng, đặt hàng, thanh toán, quản lý người dùng. Vai trò: Phát triển CRUD sản phẩm/người dùng, thiết kế giao diện bằng JS + Bootstrap.",
    image: "Anh1.png",
    githubLink: "https://github.com/NguyenPhucHieu204/online_book_selling_website",
    demoLink: "#",
    technologies: ["Laravel", "PHP", "JavaScript", "MySQL", "Bootstrap"],
    isBlog: false
  },
  {
    id: 2,
    title: "Hotel Management Website",
    description: "Website quản lý khách sạn (HTML, CSS, JS). Chức năng: Trang chủ, phòng trưng bày, đánh giá, blog. Vai trò: Xây dựng giao diện và hiệu ứng người dùng, tối ưu trải nghiệm.",
    image: "Anh2.png",
    githubLink: "https://github.com/NguyenPhucHieu204/tourism",
    demoLink: "#",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    isBlog: false
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "Portfolio cá nhân (ReactJS). Bao gồm: giới thiệu bản thân, kỹ năng, dự án, form liên hệ. Đã deploy trên GitHub Pages.",
    image: "Anh3.png",
    githubLink: "https://github.com/NguyenPhucHieu204/Portfolio",
    demoLink: "#",
    technologies: ["React", "React Router", "Bootstrap", "CSS3"],
    isBlog: false
  }
];

// Hàm helper để lấy dự án theo ID
export const getProjectById = (id) => {
  return PROJECTS.find(project => project.id === id);
};

// Hàm helper để lấy dự án theo công nghệ
export const getProjectsByTechnology = (tech) => {
  return PROJECTS.filter(project => 
    project.technologies.includes(tech)
  );
};
