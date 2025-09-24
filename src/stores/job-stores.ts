import { atom, map } from "nanostores";

// Store for the active tab
export const activeTab = atom("active");

// Store for jobs data
export const jobsData = map({
    active: [],
    new: [],
    ended: [],
    loading: false,
    error: null,
});

// Actions to manage jobs
export const setActiveTab = (tab) => {
    activeTab.set(tab);
};

export const setLoading = (loading) => {
    jobsData.setKey("loading", loading);
};

export const setError = (error) => {
    jobsData.setKey("error", error);
};

export const setJobs = (tabType, jobs) => {
    jobsData.setKey(tabType, jobs);
};

// API calls
export const fetchJobs = async (tabType) => {
    setLoading(true);
    setError(null);

    try {
        // Replace with your actual API endpoint
        const response = await fetch(`https://jsonfakery.com/jobs/random/6`);

        if (!response.ok) {
            throw new Error(`Failed to fetch jobs`);
        }

        const jobs = await response.json();
        setJobs(tabType, jobs);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
};
