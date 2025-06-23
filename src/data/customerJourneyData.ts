export const gateInData = [
  // Monday
  { timestamp: '2023-10-23T09:05:00' },
  { timestamp: '2023-10-23T09:15:00' },
  { timestamp: '2023-10-23T10:30:00' },
  { timestamp: '2023-10-23T11:00:00' },
  { timestamp: '2023-10-23T11:10:00' },
  { timestamp: '2023-10-23T11:25:00' },
  { timestamp: '2023-10-23T14:00:00' },
  { timestamp: '2023-10-23T15:30:00' },

  // Tuesday
  { timestamp: '2023-10-24T09:30:00' },
  { timestamp: '2023-10-24T10:00:00' },
  { timestamp: '2023-10-24T12:00:00' },
  { timestamp: '2023-10-24T14:30:00' },

  // Wednesday
  { timestamp: '2023-10-25T09:00:00' },
  { timestamp: '2023-10-25T11:45:00' },
  { timestamp: '2023-10-25T13:00:00' },
  { timestamp: '2023-10-25T16:00:00' },

  // Thursday
  { timestamp: '2023-10-26T10:10:00' },
  { timestamp: '2023-10-26T10:20:00' },
  { timestamp: '2023-10-26T10:35:00' },
  { timestamp: '2023-10-26T15:00:00' },

  // Friday
  { timestamp: '2023-10-27T09:00:00' },
  { timestamp: '2023-10-27T09:25:00' },
  { timestamp: '2023-10-27T11:30:00' },
  { timestamp: '2023-10-27T12:30:00' },
  { timestamp: '2023-10-27T13:45:00' },
  { timestamp: '2023-10-27T14:15:00' },

  // Saturday
  { timestamp: '2023-10-28T10:00:00' },
  { timestamp: '2023-10-28T10:45:00' },
  { timestamp: '2023-10-28T11:15:00' },
  { timestamp: '2023-10-28T11:50:00' },
  { timestamp: '2023-10-28T12:10:00' },
  { timestamp: '2023-10-28T12:30:00' },
  { timestamp: '2023-10-28T13:00:00' },
];

export const gateInDataLastWeek = [
  // Monday
  { timestamp: '2023-10-16T09:30:00' },
  { timestamp: '2023-10-16T10:15:00' },
  { timestamp: '2023-10-16T11:00:00' },
  { timestamp: '2023-10-16T14:30:00' },
  { timestamp: '2023-10-16T15:00:00' },

  // Tuesday
  { timestamp: '2023-10-17T09:00:00' },
  { timestamp: '2023-10-17T10:30:00' },
  { timestamp: '2023-10-17T11:30:00' },
  { timestamp: '2023-10-17T12:00:00' },
  { timestamp: '2023-10-17T14:00:00' },
  { timestamp: '2023-10-17T16:30:00' },

  // Wednesday
  { timestamp: '2023-10-18T09:15:00' },
  { timestamp: '2023-10-18T11:00:00' },
  { timestamp: '2023-10-18T13:30:00' },

  // Thursday
  { timestamp: '2023-10-19T10:00:00' },
  { timestamp: '2023-10-19T10:45:00' },
  { timestamp: '2023-10-19T11:30:00' },
  { timestamp: '2023-10-19T15:30:00' },

  // Friday
  { timestamp: '2023-10-20T09:00:00' },
  { timestamp: '2023-10-20T09:45:00' },
  { timestamp: '2023-10-20T11:00:00' },
  { timestamp: '2023-10-20T12:00:00' },
  { timestamp: '2023-10-20T13:15:00' },
  { timestamp: '2023-10-20T14:00:00' },
  { timestamp: '2023-10-20T15:45:00' },

  // Saturday
  { timestamp: '2023-10-21T10:30:00' },
  { timestamp: '2023-10-21T11:00:00' },
  { timestamp: '2023-10-21T11:45:00' },
  { timestamp: '2023-10-21T12:30:00' },
];

export const complaintData = [
  { name: 'Service Quality', value: 45, fill: '#ef4444' },
  { name: 'Pricing & Billing', value: 30, fill: '#f97316' },
  { name: 'Wait Time', value: 25, fill: '#f59e0b' },
  { name: 'Other', value: 15, fill: '#6b7280' },
];

export const sentimentByOutcomeData = [
  { sentiment: 'Positive', returned: 60, not_returned: 5, fill_returned: '#22c55e', fill_not_returned: '#a3e635' },
  { sentiment: 'Neutral', returned: 25, not_returned: 20, fill_returned: '#f97316', fill_not_returned: '#fb923c' },
  { sentiment: 'Negative', returned: 10, not_returned: 45, fill_returned: '#ef4444', fill_not_returned: '#f87171' },
];

export const customerFlowData = {
  nodes: [
    // Complaint Types (Tier 1)
    { name: 'Service Quality' },
    { name: 'Pricing & Billing' },
    { name: 'Wait Time' },
    { name: 'Other Complaints' },
    // Sentiments (Tier 2)
    { name: 'Positive Sentiment' },
    { name: 'Neutral Sentiment' },
    { name: 'Negative Sentiment' },
    // Outcomes (Tier 3)
    { name: 'Returned for Service' },
    { name: 'Did Not Return' },
  ],
  links: [
    // Complaint Type -> Sentiment
    { source: 0, target: 6, value: 35 }, // Service Quality -> Negative
    { source: 0, target: 5, value: 10 }, // Service Quality -> Neutral
    { source: 1, target: 6, value: 20 }, // Pricing -> Negative
    { source: 1, target: 5, value: 10 }, // Pricing -> Neutral
    { source: 2, target: 6, value: 15 }, // Wait Time -> Negative
    { source: 2, target: 5, value: 10 }, // Wait Time -> Neutral
    { source: 3, target: 4, value: 5 },  // Other -> Positive
    { source: 3, target: 5, value: 10 }, // Other -> Neutral

    // Sentiment -> Outcome
    { source: 4, target: 7, value: 5 },  // Positive -> Returned
    { source: 5, target: 7, value: 30 }, // Neutral -> Returned
    { source: 5, target: 8, value: 10 }, // Neutral -> Did Not Return
    { source: 6, target: 7, value: 10 }, // Negative -> Returned
    { source: 6, target: 8, value: 60 }, // Negative -> Did Not Return
  ],
};

export const repeatRepairCohortData = {
  labels: ['< 7 days', '< 14 days', '< 30 days', '< 60 days', '< 90 days'],
  cohorts: [
    { cohort: 'Jan 2023', total: 120, values: [12, 9, 7, 5, 4] },
    { cohort: 'Feb 2023', total: 150, values: [14, 11, 8, 6, 5] },
    { cohort: 'Mar 2023', total: 180, values: [8, 6, 4, 3, 2] }, // Assumes quality improvement
    { cohort: 'Apr 2023', total: 160, values: [7, 5, 3, 2, null] },
    { cohort: 'May 2023', total: 200, values: [15, 12, 9, null, null] }, // Assumes bad batch of parts
    { cohort: 'Jun 2023', total: 220, values: [9, 7, null, null, null] },
    { cohort: 'Jul 2023', total: 250, values: [8, null, null, null, null] },
  ],
};

export const checkInHeatmapData = {
  timeBins: ['9:00-10:30', '10:30-12:00', '12:00-13:30', '13:30-15:00', '15:00-16:30', '16:30-18:00'],
  weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weeks: {
    '1': [
      [10, 12, 15, 14, 18, 20],
      [25, 28, 30, 26, 35, 40],
      [18, 20, 22, 19, 24, 28],
      [30, 32, 35, 33, 40, 45],
      [22, 25, 28, 26, 30, 35],
      [15, 18, 20, 17, 22, 25],
    ],
    '2': [
      [12, 14, 16, 15, 20, 22],
      [28, 30, 32, 28, 38, 42],
      [20, 22, 24, 21, 26, 30],
      [32, 35, 38, 35, 42, 48],
      [25, 28, 30, 28, 32, 38],
      [18, 20, 22, 19, 25, 28],
    ],
    '3': [
      [8, 10, 13, 12, 16, 18],
      [22, 25, 28, 24, 32, 38],
      [16, 18, 20, 17, 22, 26],
      [28, 30, 33, 31, 38, 43],
      [20, 23, 26, 24, 28, 33],
      [13, 16, 18, 15, 20, 23],
    ],
  }
};

export const gateInThroughputData = {
  byDay: {
    thisWeek: [
      { day: 'Mon', checkIns: 8 }, { day: 'Tue', checkIns: 4 }, { day: 'Wed', checkIns: 4 },
      { day: 'Thu', checkIns: 4 }, { day: 'Fri', checkIns: 6 }, { day: 'Sat', checkIns: 7 }, { day: 'Sun', checkIns: 0 }
    ],
    lastWeek: [
      { day: 'Mon', checkIns: 5 }, { day: 'Tue', checkIns: 6 }, { day: 'Wed', checkIns: 3 },
      { day: 'Thu', checkIns: 4 }, { day: 'Fri', checkIns: 7 }, { day: 'Sat', checkIns: 4 }, { day: 'Sun', checkIns: 0 }
    ]
  },
  byHour: {
    thisWeek: [
      { hour: 0, checkIns: 0 }, { hour: 1, checkIns: 0 }, { hour: 2, checkIns: 0 }, { hour: 3, checkIns: 0 }, { hour: 4, checkIns: 0 }, { hour: 5, checkIns: 0 }, { hour: 6, checkIns: 0 }, { hour: 7, checkIns: 0 }, { hour: 8, checkIns: 0 },
      { hour: 9, checkIns: 2 }, { hour: 10, checkIns: 1 }, { hour: 11, checkIns: 3 }, { hour: 12, checkIns: 1 }, { hour: 13, checkIns: 1 }, { hour: 14, checkIns: 1 }, { hour: 15, checkIns: 1 }, { hour: 16, checkIns: 1 },
      { hour: 17, checkIns: 0 }, { hour: 18, checkIns: 0 }, { hour: 19, checkIns: 0 }, { hour: 20, checkIns: 0 }, { hour: 21, checkIns: 0 }, { hour: 22, checkIns: 0 }, { hour: 23, checkIns: 0 }
    ],
    lastWeek: [
      { hour: 0, checkIns: 0 }, { hour: 1, checkIns: 0 }, { hour: 2, checkIns: 0 }, { hour: 3, checkIns: 0 }, { hour: 4, checkIns: 0 }, { hour: 5, checkIns: 0 }, { hour: 6, checkIns: 0 }, { hour: 7, checkIns: 0 }, { hour: 8, checkIns: 0 },
      { hour: 9, checkIns: 2 }, { hour: 10, checkIns: 2 }, { hour: 11, checkIns: 2 }, { hour: 12, checkIns: 1 }, { hour: 13, checkIns: 1 }, { hour: 14, checkIns: 2 }, { hour: 15, checkIns: 1 }, { hour: 16, checkIns: 1 },
      { hour: 17, checkIns: 0 }, { hour: 18, checkIns: 0 }, { hour: 19, checkIns: 0 }, { hour: 20, checkIns: 0 }, { hour: 21, checkIns: 0 }, { hour: 22, checkIns: 0 }, { hour: 23, checkIns: 0 }
    ]
  }
};
