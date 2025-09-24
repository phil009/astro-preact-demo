import { h } from "preact";
import { JobCard } from "./JobCard";

export const JobsList = ({ jobs, loading, error }) => {
    const loadingStyle = {
        textAlign: "center",
        padding: "40px",
        color: "#007bff",
        fontSize: "16px",
    };

    const errorStyle = {
        textAlign: "center",
        padding: "40px",
        color: "#dc3545",
        background: "#f8d7da",
        borderRadius: "4px",
        fontSize: "16px",
    };

    const emptyStyle = {
        textAlign: "center",
        padding: "40px",
        color: "#666",
        fontSize: "16px",
    };

    const listStyle = {
        display: "grid",
        gap: "16px",
    };

    if (loading) {
        return <div style={loadingStyle}>Loading jobs...</div>;
    }

    if (error) {
        return <div style={errorStyle}>Error: {error}</div>;
    }

    if (jobs.length === 0) {
        return <div style={emptyStyle}>No jobs found</div>;
    }

    return (
        <div style={listStyle}>
            {jobs.map((job) => (
                <JobCard
                    key={job.id}
                    job={job}
                />
            ))}
        </div>
    );
};
