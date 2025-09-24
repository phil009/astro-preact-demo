import { h } from "preact";

export const TabButton = ({ tabKey, label, isActive, onClick, count }) => {
    const buttonStyle = {
        flex: "1",
        padding: "16px 20px",
        background: isActive ? "#fff" : "none",
        border: "none",
        fontSize: "14px",
        fontWeight: "500",
        color: isActive ? "#007bff" : "#666",
        cursor: "pointer",
        transition: "all 0.2s ease",
        borderBottom: isActive ? "3px solid #007bff" : "3px solid transparent",
    };

    const countStyle = {
        marginLeft: "8px",
        fontSize: "12px",
        color: isActive ? "#007bff" : "#888",
    };

    return (
        <button
            style={buttonStyle}
            onClick={() => onClick(tabKey)}
            onMouseEnter={(e) => {
                if (!isActive) {
                    e.target.style.background = "#e9ecef";
                    e.target.style.color = "#333";
                }
            }}
            onMouseLeave={(e) => {
                if (!isActive) {
                    e.target.style.background = "none";
                    e.target.style.color = "#666";
                }
            }}
        >
            {label}
            {count !== undefined && <span style={countStyle}>({count})</span>}
        </button>
    );
};
