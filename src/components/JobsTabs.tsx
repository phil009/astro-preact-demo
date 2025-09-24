import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { useEffect } from "preact/hooks";
import {
    activeTab,
    jobsData,
    setActiveTab,
    fetchJobs,
} from "../stores/job-stores";
import { TabButton } from "./TabButton";
import { JobsList } from "./JobLists";

const tabs = [
    { key: "active", label: "Active Jobs" },
    { key: "new", label: "New Jobs" },
    { key: "ended", label: "Ended Jobs" },
];

export const JobsTabs = () => {
    const currentTab = useStore(activeTab);
    const jobs = useStore(jobsData);

    const tabsContainerStyle = {
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
    };

    const headerStyle = {
        display: "flex",
        borderBottom: "1px solid #e0e0e0",
        background: "#f8f9fa",
    };

    const contentStyle = {
        padding: "20px",
        minHeight: "400px",
    };

    // Fetch jobs when component mounts or tab changes
    useEffect(() => {
        fetchJobs(currentTab);
    }, [currentTab]);

    const handleTabChange = (tabKey) => {
        setActiveTab(tabKey);
    };

    return (
        <div style={tabsContainerStyle}>
            <div style={headerStyle}>
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.key}
                        tabKey={tab.key}
                        label={tab.label}
                        isActive={currentTab === tab.key}
                        onClick={handleTabChange}
                        count={jobs[tab.key]?.length}
                    />
                ))}
            </div>

            <div style={contentStyle}>
                <JobsList
                    jobs={jobs[currentTab] || []}
                    loading={jobs.loading}
                    error={jobs.error}
                />
            </div>
        </div>
    );
};
