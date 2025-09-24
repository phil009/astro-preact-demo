import { h } from 'preact'
import { useStore } from '@nanostores/preact'
import { useEffect, useState } from 'preact/hooks'
import { activeTab, jobsData, setActiveTab, fetchJobs } from '../stores/job-stores.ts'
import { TabButton } from './TabButton'
import { JobsList } from './JobLists'

const tabs = [
  { key: 'active', label: 'Active Jobs' },
  { key: 'new', label: 'New Jobs' },
  { key: 'ended', label: 'Ended Jobs' }
]

export const JobsTabs = () => {
  const currentTab = useStore(activeTab)
  const jobs = useStore(jobsData)
  const [activeIndex, setActiveIndex] = useState(0)

  const tabsContainerStyle = {
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  }

  const headerStyle = {
    display: 'flex',
    borderBottom: '1px solid #e0e0e0',
    background: '#f8f9fa',
    position: 'relative'
  }

  const slidingBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: `${activeIndex * (100 / tabs.length)}%`,
    width: `${100 / tabs.length}%`,
    height: '100%',
    background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
    transition: 'left 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
    zIndex: 1,
    borderRadius: activeIndex === 0 ? '8px 0 0 0' : activeIndex === tabs.length - 1 ? '0 8px 0 0' : '0'
  }

  const contentStyle = {
    padding: '20px',
    minHeight: '400px'
  }

  // Initialize active index based on current tab
  useEffect(() => {
    const index = tabs.findIndex(tab => tab.key === currentTab)
    if (index !== -1) {
      setActiveIndex(index)
    }
  }, [currentTab])

  // Fetch jobs when component mounts or tab changes
  useEffect(() => {
    fetchJobs(currentTab)
  }, [currentTab])

  const handleTabChange = (tabKey, index) => {
    setActiveIndex(index)
    setActiveTab(tabKey)
  }

  return (
    <div style={tabsContainerStyle}>
      <div style={headerStyle}>
        <div style={slidingBackgroundStyle}></div>
        {tabs.map((tab, index) => (
          <TabButton
            key={tab.key}
            tabKey={tab.key}
            label={tab.label}
            isActive={currentTab === tab.key}
            onClick={handleTabChange}
            count={jobs[tab.key]?.length}
            index={index}
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
  )
}