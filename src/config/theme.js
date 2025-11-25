/**
 * Theme Configuration
 * Quản lý màu sắc và theme của toàn bộ website
 */

export const THEME = {
  colors: {
    // Primary colors
    primary: "#00d4ff",
    secondary: "#64ffda",
    
    // Background colors
    backgroundDark: "#0a1628",
    backgroundLight: "#112240",
    
    // Text colors
    textPrimary: "#ffffff",
    textSecondary: "#8892b0",
    textHighlight: "#00d4ff",
    
    // Border colors
    border: "rgba(0, 212, 255, 0.2)",
    borderHover: "rgba(0, 212, 255, 0.5)",
  },
  
  gradients: {
    primary: "linear-gradient(135deg, #00d4ff, #64ffda)",
    secondary: "linear-gradient(135deg, #0099cc, #00d4ff)",
    background: "linear-gradient(135deg, #0a1628 0%, #112240 50%, #0a1628 100%)",
  },
  
  shadows: {
    small: "0 4px 8px rgba(0, 212, 255, 0.15)",
    medium: "0 8px 16px rgba(0, 212, 255, 0.3)",
    large: "0 10px 25px rgba(0, 212, 255, 0.3)",
  },
  
  transitions: {
    fast: "all 0.2s ease",
    normal: "all 0.3s ease",
    slow: "all 0.5s ease",
  },
  
  borderRadius: {
    small: "5px",
    medium: "8px",
    large: "12px",
    round: "50%",
  },
};

// Nếu muốn đổi theme, chỉ cần thay đổi các giá trị ở đây
export const ALTERNATIVE_THEMES = {
  purple: {
    primary: "#c770f0",
    secondary: "#be6adf",
    backgroundDark: "#0c0513",
    backgroundLight: "#1b1a2e",
  },
  
  green: {
    primary: "#00ff88",
    secondary: "#88ffaa",
    backgroundDark: "#0a1a0e",
    backgroundLight: "#152d1f",
  },
  
  red: {
    primary: "#ff0055",
    secondary: "#ff6b9d",
    backgroundDark: "#1a0a0e",
    backgroundLight: "#2d1319",
  },
  
  orange: {
    primary: "#ff6b35",
    secondary: "#ffaa5c",
    backgroundDark: "#1a0e0a",
    backgroundLight: "#2d1f15",
  }
};

export default THEME;
