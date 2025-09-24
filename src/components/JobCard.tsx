import { h } from "preact";

const getStatusStyle = (status) => {
    const baseStyle = {
        padding: "4px 12px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "500",
        textTransform: "uppercase",
    };

    switch (status?.toLowerCase()) {
        case "active":
            return { ...baseStyle, background: "#d4edda", color: "#155724" };
        case "new":
            return { ...baseStyle, background: "#d1ecf1", color: "#0c5460" };
        case "ended":
            return { ...baseStyle, background: "#f8d7da", color: "#721c24" };
        default:
            return baseStyle;
    }
};

export const JobCard = ({ job }) => {
    const cardStyle = {
        border: "1px solid #e0e0e0",
        borderRadius: "6px",
        padding: "20px",
        transition: "box-shadow 0.2s ease",
        cursor: "pointer",
    };

    const titleStyle = {
        margin: "0 0 8px 0",
        color: "#333",
        fontSize: "18px",
    };

    const companyStyle = {
        margin: "0 0 12px 0",
        color: "#666",
        fontWeight: "500",
    };

    const descriptionStyle = {
        margin: "0 0 16px 0",
        color: "#555",
        lineHeight: "1.5",
    };

    const metaStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "14px",
        color: "#888",
        marginBottom: "12px",
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) =>
                (e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)")
            }
            onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
        >
            <h3 style={titleStyle}>{job.title}</h3>
            <p style={companyStyle}>{job.company}</p>
            <p style={descriptionStyle}>{job.description}</p>
            <div style={metaStyle}>
                <span>{job.location}</span>
                <span>{new Date(job.createdAt).toLocaleDateString()}</span>
            </div>
            {job.status && (
                <span style={getStatusStyle(job.status)}>{job.status}</span>
            )}
        </div>
    );
};
