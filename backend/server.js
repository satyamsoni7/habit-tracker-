// Initial load
const savedData = localStorage.getItem('habitTrackerData');
if (savedData) {
  setTrackers(JSON.parse(savedData)); // ya trackers = JSON.parse(savedData)
} else {
  // default/empty state
}