import type { GateInThroughputData, CheckInHeatmapData, RepairAnalysis } from '../types';





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

export const repeatRepairAnalysis: RepairAnalysis = {
  "metadata": {
    "totalRecords": 789,
    "uniqueVehicles": 321,
    "invalidRecords": 1,
    "dateRange": {
      "currentRepairs": {
        "start": "2025-01-01",
        "end": "2025-06-27"
      },
      "previousRepairs": {
        "start": "2024-12-05",
        "end": "2025-06-26"
      }
    }
  },
  "cohortMetrics": [
      {
        "cohort": "Apr 2025",
        "total_vehicles": 66,
        "window_metrics": [
          {
            "total_repairs": 35,
            "unique_vehicles": 21,
            "avg_repair_duration": 2.2857142857142856,
            "categories": {
              "OTHER": 15,
              "AC_COOLING": 9,
              "ENGINE": 5,
              "TRANSMISSION": 3,
              "ELECTRICAL": 3
            },
            "subcategories": {
              "OTHER_GENERAL": 15,
              "AC_COOLING_AC_SYSTEM": 9,
              "ENGINE_DIAGNOSTIC": 5,
              "ELECTRICAL_ACCESSORIES": 3,
              "TRANSMISSION_CLUTCH": 2,
              "TRANSMISSION_GEARBOX": 1
            }
          },
          {
            "total_repairs": 71,
            "unique_vehicles": 44,
            "avg_repair_duration": 1.6901408450704225,
            "categories": {
              "OTHER": 35,
              "AC_COOLING": 16,
              "ENGINE": 10,
              "ELECTRICAL": 6,
              "TRANSMISSION": 3,
              "SUSPENSION": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 35,
              "AC_COOLING_AC_SYSTEM": 16,
              "ENGINE_DIAGNOSTIC": 10,
              "ELECTRICAL_ACCESSORIES": 6,
              "TRANSMISSION_CLUTCH": 2,
              "TRANSMISSION_GEARBOX": 1,
              "SUSPENSION_BRAKES": 1
            }
          },
          {
            "total_repairs": 104,
            "unique_vehicles": 63,
            "avg_repair_duration": 1.6730769230769231,
            "categories": {
              "OTHER": 60,
              "AC_COOLING": 18,
              "ENGINE": 13,
              "ELECTRICAL": 7,
              "TRANSMISSION": 3,
              "SUSPENSION": 3
            },
            "subcategories": {
              "OTHER_GENERAL": 60,
              "AC_COOLING_AC_SYSTEM": 17,
              "ENGINE_DIAGNOSTIC": 13,
              "ELECTRICAL_ACCESSORIES": 7,
              "TRANSMISSION_CLUTCH": 2,
              "SUSPENSION_STEERING": 2,
              "AC_COOLING_COOLING": 1,
              "TRANSMISSION_GEARBOX": 1,
              "SUSPENSION_BRAKES": 1
            }
          },
          {
            "total_repairs": 111,
            "unique_vehicles": 66,
            "avg_repair_duration": 1.7027027027027026,
            "categories": {
              "OTHER": 62,
              "AC_COOLING": 18,
              "ENGINE": 18,
              "ELECTRICAL": 7,
              "TRANSMISSION": 3,
              "SUSPENSION": 3
            },
            "subcategories": {
              "OTHER_GENERAL": 62,
              "AC_COOLING_AC_SYSTEM": 17,
              "ENGINE_DIAGNOSTIC": 13,
              "ELECTRICAL_ACCESSORIES": 7,
              "ENGINE_MECHANICAL": 5,
              "TRANSMISSION_CLUTCH": 2,
              "SUSPENSION_STEERING": 2,
              "AC_COOLING_COOLING": 1,
              "SUSPENSION_BRAKES": 1,
              "TRANSMISSION_GEARBOX": 1
            }
          },
          {
            "total_repairs": 111,
            "unique_vehicles": 66,
            "avg_repair_duration": 1.7027027027027026,
            "categories": {
              "OTHER": 62,
              "AC_COOLING": 18,
              "ENGINE": 18,
              "ELECTRICAL": 7,
              "TRANSMISSION": 3,
              "SUSPENSION": 3
            },
            "subcategories": {
              "OTHER_GENERAL": 62,
              "AC_COOLING_AC_SYSTEM": 17,
              "ENGINE_DIAGNOSTIC": 13,
              "ELECTRICAL_ACCESSORIES": 7,
              "ENGINE_MECHANICAL": 5,
              "TRANSMISSION_CLUTCH": 2,
              "SUSPENSION_STEERING": 2,
              "AC_COOLING_COOLING": 1,
              "SUSPENSION_BRAKES": 1,
              "TRANSMISSION_GEARBOX": 1
            }
          }
        ]
      },
      {
        "cohort": "Dec 2024",
        "total_vehicles": 27,
        "window_metrics": [
          {
            "total_repairs": 7,
            "unique_vehicles": 4,
            "avg_repair_duration": 0.7142857142857143,
            "categories": {
              "OTHER": 7
            },
            "subcategories": {
              "OTHER_GENERAL": 7
            }
          },
          {
            "total_repairs": 17,
            "unique_vehicles": 6,
            "avg_repair_duration": 1.1764705882352942,
            "categories": {
              "OTHER": 17
            },
            "subcategories": {
              "OTHER_GENERAL": 17
            }
          },
          {
            "total_repairs": 84,
            "unique_vehicles": 26,
            "avg_repair_duration": 1.2976190476190477,
            "categories": {
              "OTHER": 75,
              "ENGINE": 6,
              "BODY_INTERIOR": 3
            },
            "subcategories": {
              "OTHER_GENERAL": 75,
              "ENGINE_MECHANICAL": 4,
              "BODY_INTERIOR_BODY": 3,
              "ENGINE_DIAGNOSTIC": 2
            }
          },
          {
            "total_repairs": 104,
            "unique_vehicles": 27,
            "avg_repair_duration": 1.0480769230769231,
            "categories": {
              "OTHER": 95,
              "ENGINE": 6,
              "BODY_INTERIOR": 3
            },
            "subcategories": {
              "OTHER_GENERAL": 95,
              "ENGINE_MECHANICAL": 4,
              "BODY_INTERIOR_BODY": 3,
              "ENGINE_DIAGNOSTIC": 2
            }
          },
          {
            "total_repairs": 104,
            "unique_vehicles": 27,
            "avg_repair_duration": 1.0480769230769231,
            "categories": {
              "OTHER": 95,
              "ENGINE": 6,
              "BODY_INTERIOR": 3
            },
            "subcategories": {
              "OTHER_GENERAL": 95,
              "ENGINE_MECHANICAL": 4,
              "BODY_INTERIOR_BODY": 3,
              "ENGINE_DIAGNOSTIC": 2
            }
          }
        ]
      },
      {
        "cohort": "Feb 2025",
        "total_vehicles": 71,
        "window_metrics": [
          {
            "total_repairs": 40,
            "unique_vehicles": 32,
            "avg_repair_duration": 1.375,
            "categories": {
              "OTHER": 26,
              "AC_COOLING": 6,
              "ENGINE": 3,
              "TRANSMISSION": 3,
              "SUSPENSION": 2
            },
            "subcategories": {
              "OTHER_GENERAL": 26,
              "AC_COOLING_AC_SYSTEM": 6,
              "TRANSMISSION_CLUTCH": 3,
              "SUSPENSION_SUSPENSION": 1,
              "ENGINE_DIAGNOSTIC": 1,
              "SUSPENSION_BRAKES": 1,
              "ENGINE_GENERAL": 1,
              "ENGINE_MECHANICAL": 1
            }
          },
          {
            "total_repairs": 81,
            "unique_vehicles": 49,
            "avg_repair_duration": 2.8395061728395063,
            "categories": {
              "OTHER": 58,
              "AC_COOLING": 10,
              "ENGINE": 5,
              "TRANSMISSION": 3,
              "SUSPENSION": 2,
              "ELECTRICAL": 2,
              "BODY_INTERIOR": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 58,
              "AC_COOLING_AC_SYSTEM": 10,
              "TRANSMISSION_CLUTCH": 3,
              "ENGINE_MECHANICAL": 3,
              "ELECTRICAL_ACCESSORIES": 2,
              "SUSPENSION_SUSPENSION": 1,
              "SUSPENSION_BRAKES": 1,
              "ENGINE_DIAGNOSTIC": 1,
              "ENGINE_GENERAL": 1,
              "BODY_INTERIOR_NVH": 1
            }
          },
          {
            "total_repairs": 134,
            "unique_vehicles": 71,
            "avg_repair_duration": 2.283582089552239,
            "categories": {
              "OTHER": 98,
              "ENGINE": 12,
              "AC_COOLING": 10,
              "BODY_INTERIOR": 5,
              "TRANSMISSION": 4,
              "SUSPENSION": 3,
              "ELECTRICAL": 2
            },
            "subcategories": {
              "OTHER_GENERAL": 98,
              "AC_COOLING_AC_SYSTEM": 10,
              "ENGINE_DIAGNOSTIC": 4,
              "ENGINE_MECHANICAL": 4,
              "TRANSMISSION_CLUTCH": 4,
              "ENGINE_GENERAL": 4,
              "BODY_INTERIOR_BODY": 3,
              "ELECTRICAL_ACCESSORIES": 2,
              "SUSPENSION_BRAKES": 2,
              "BODY_INTERIOR_NVH": 2,
              "SUSPENSION_SUSPENSION": 1
            }
          },
          {
            "total_repairs": 134,
            "unique_vehicles": 71,
            "avg_repair_duration": 2.283582089552239,
            "categories": {
              "OTHER": 98,
              "ENGINE": 12,
              "AC_COOLING": 10,
              "BODY_INTERIOR": 5,
              "TRANSMISSION": 4,
              "SUSPENSION": 3,
              "ELECTRICAL": 2
            },
            "subcategories": {
              "OTHER_GENERAL": 98,
              "AC_COOLING_AC_SYSTEM": 10,
              "ENGINE_DIAGNOSTIC": 4,
              "ENGINE_MECHANICAL": 4,
              "TRANSMISSION_CLUTCH": 4,
              "ENGINE_GENERAL": 4,
              "BODY_INTERIOR_BODY": 3,
              "ELECTRICAL_ACCESSORIES": 2,
              "SUSPENSION_BRAKES": 2,
              "BODY_INTERIOR_NVH": 2,
              "SUSPENSION_SUSPENSION": 1
            }
          },
          {
            "total_repairs": 134,
            "unique_vehicles": 71,
            "avg_repair_duration": 2.283582089552239,
            "categories": {
              "OTHER": 98,
              "ENGINE": 12,
              "AC_COOLING": 10,
              "BODY_INTERIOR": 5,
              "TRANSMISSION": 4,
              "SUSPENSION": 3,
              "ELECTRICAL": 2
            },
            "subcategories": {
              "OTHER_GENERAL": 98,
              "AC_COOLING_AC_SYSTEM": 10,
              "ENGINE_DIAGNOSTIC": 4,
              "ENGINE_MECHANICAL": 4,
              "TRANSMISSION_CLUTCH": 4,
              "ENGINE_GENERAL": 4,
              "BODY_INTERIOR_BODY": 3,
              "ELECTRICAL_ACCESSORIES": 2,
              "SUSPENSION_BRAKES": 2,
              "BODY_INTERIOR_NVH": 2,
              "SUSPENSION_SUSPENSION": 1
            }
          }
        ]
      },
      {
        "cohort": "Jan 2025",
        "total_vehicles": 73,
        "window_metrics": [
          {
            "total_repairs": 72,
            "unique_vehicles": 28,
            "avg_repair_duration": 0.4166666666666667,
            "categories": {
              "OTHER": 41,
              "ELECTRICAL": 20,
              "SUSPENSION": 5,
              "ENGINE": 4,
              "BODY_INTERIOR": 2
            },
            "subcategories": {
              "OTHER_GENERAL": 41,
              "ELECTRICAL_ACCESSORIES": 20,
              "ENGINE_DIAGNOSTIC": 4,
              "SUSPENSION_STEERING": 3,
              "SUSPENSION_SUSPENSION": 2,
              "BODY_INTERIOR_NVH": 2
            }
          },
          {
            "total_repairs": 137,
            "unique_vehicles": 50,
            "avg_repair_duration": 0.5693430656934306,
            "categories": {
              "OTHER": 76,
              "ELECTRICAL": 30,
              "SUSPENSION": 12,
              "BODY_INTERIOR": 7,
              "ENGINE": 7,
              "AC_COOLING": 5
            },
            "subcategories": {
              "OTHER_GENERAL": 76,
              "ELECTRICAL_ACCESSORIES": 30,
              "ENGINE_DIAGNOSTIC": 7,
              "AC_COOLING_AC_SYSTEM": 5,
              "BODY_INTERIOR_INTERIOR": 5,
              "SUSPENSION_SUSPENSION": 4,
              "SUSPENSION_BRAKES": 4,
              "SUSPENSION_STEERING": 3,
              "BODY_INTERIOR_NVH": 2,
              "SUSPENSION_GENERAL": 1
            }
          },
          {
            "total_repairs": 230,
            "unique_vehicles": 72,
            "avg_repair_duration": 1.9391304347826086,
            "categories": {
              "OTHER": 108,
              "ELECTRICAL": 36,
              "SUSPENSION": 30,
              "ENGINE": 28,
              "BODY_INTERIOR": 14,
              "AC_COOLING": 8,
              "TRANSMISSION": 6
            },
            "subcategories": {
              "OTHER_GENERAL": 108,
              "ELECTRICAL_ACCESSORIES": 36,
              "ENGINE_DIAGNOSTIC": 19,
              "SUSPENSION_BRAKES": 16,
              "SUSPENSION_SUSPENSION": 10,
              "ENGINE_MECHANICAL": 9,
              "AC_COOLING_AC_SYSTEM": 8,
              "BODY_INTERIOR_BODY": 6,
              "TRANSMISSION_GEARBOX": 6,
              "BODY_INTERIOR_INTERIOR": 5,
              "SUSPENSION_STEERING": 3,
              "BODY_INTERIOR_NVH": 3,
              "SUSPENSION_GENERAL": 1
            }
          },
          {
            "total_repairs": 246,
            "unique_vehicles": 73,
            "avg_repair_duration": 1.8699186991869918,
            "categories": {
              "OTHER": 120,
              "ELECTRICAL": 36,
              "ENGINE": 32,
              "SUSPENSION": 30,
              "BODY_INTERIOR": 14,
              "AC_COOLING": 8,
              "TRANSMISSION": 6
            },
            "subcategories": {
              "OTHER_GENERAL": 120,
              "ELECTRICAL_ACCESSORIES": 36,
              "ENGINE_DIAGNOSTIC": 19,
              "SUSPENSION_BRAKES": 16,
              "ENGINE_MECHANICAL": 13,
              "SUSPENSION_SUSPENSION": 10,
              "AC_COOLING_AC_SYSTEM": 8,
              "BODY_INTERIOR_BODY": 6,
              "TRANSMISSION_GEARBOX": 6,
              "BODY_INTERIOR_INTERIOR": 5,
              "SUSPENSION_STEERING": 3,
              "BODY_INTERIOR_NVH": 3,
              "SUSPENSION_GENERAL": 1
            }
          },
          {
            "total_repairs": 246,
            "unique_vehicles": 73,
            "avg_repair_duration": 1.8699186991869918,
            "categories": {
              "OTHER": 120,
              "ELECTRICAL": 36,
              "ENGINE": 32,
              "SUSPENSION": 30,
              "BODY_INTERIOR": 14,
              "AC_COOLING": 8,
              "TRANSMISSION": 6
            },
            "subcategories": {
              "OTHER_GENERAL": 120,
              "ELECTRICAL_ACCESSORIES": 36,
              "ENGINE_DIAGNOSTIC": 19,
              "SUSPENSION_BRAKES": 16,
              "ENGINE_MECHANICAL": 13,
              "SUSPENSION_SUSPENSION": 10,
              "AC_COOLING_AC_SYSTEM": 8,
              "BODY_INTERIOR_BODY": 6,
              "TRANSMISSION_GEARBOX": 6,
              "BODY_INTERIOR_INTERIOR": 5,
              "SUSPENSION_STEERING": 3,
              "BODY_INTERIOR_NVH": 3,
              "SUSPENSION_GENERAL": 1
            }
          }
        ]
      },
      {
        "cohort": "Jun 2025",
        "total_vehicles": 18,
        "window_metrics": [
          {
            "total_repairs": 12,
            "unique_vehicles": 8,
            "avg_repair_duration": 0.3333333333333333,
            "categories": {
              "OTHER": 4,
              "ENGINE": 2,
              "ELECTRICAL": 2,
              "AC_COOLING": 2,
              "TRANSMISSION": 1,
              "SUSPENSION": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 4,
              "ENGINE_DIAGNOSTIC": 2,
              "ELECTRICAL_ACCESSORIES": 2,
              "AC_COOLING_COOLING": 2,
              "TRANSMISSION_CLUTCH": 1,
              "SUSPENSION_STEERING": 1
            }
          },
          {
            "total_repairs": 19,
            "unique_vehicles": 13,
            "avg_repair_duration": 0.7368421052631579,
            "categories": {
              "OTHER": 11,
              "ENGINE": 2,
              "ELECTRICAL": 2,
              "AC_COOLING": 2,
              "TRANSMISSION": 1,
              "SUSPENSION": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 11,
              "ENGINE_DIAGNOSTIC": 2,
              "ELECTRICAL_ACCESSORIES": 2,
              "AC_COOLING_COOLING": 2,
              "TRANSMISSION_CLUTCH": 1,
              "SUSPENSION_STEERING": 1
            }
          },
          {
            "total_repairs": 24,
            "unique_vehicles": 18,
            "avg_repair_duration": 0.75,
            "categories": {
              "OTHER": 14,
              "ENGINE": 2,
              "AC_COOLING": 2,
              "ELECTRICAL": 2,
              "SUSPENSION": 2,
              "TRANSMISSION": 1,
              "MAINTENANCE": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 14,
              "ENGINE_DIAGNOSTIC": 2,
              "AC_COOLING_COOLING": 2,
              "ELECTRICAL_ACCESSORIES": 2,
              "SUSPENSION_STEERING": 2,
              "TRANSMISSION_CLUTCH": 1,
              "MAINTENANCE_FLUID_FILTER": 1
            }
          },
          {
            "total_repairs": 24,
            "unique_vehicles": 18,
            "avg_repair_duration": 0.75,
            "categories": {
              "OTHER": 14,
              "ENGINE": 2,
              "AC_COOLING": 2,
              "ELECTRICAL": 2,
              "SUSPENSION": 2,
              "TRANSMISSION": 1,
              "MAINTENANCE": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 14,
              "ENGINE_DIAGNOSTIC": 2,
              "AC_COOLING_COOLING": 2,
              "ELECTRICAL_ACCESSORIES": 2,
              "SUSPENSION_STEERING": 2,
              "TRANSMISSION_CLUTCH": 1,
              "MAINTENANCE_FLUID_FILTER": 1
            }
          },
          {
            "total_repairs": 24,
            "unique_vehicles": 18,
            "avg_repair_duration": 0.75,
            "categories": {
              "OTHER": 14,
              "ENGINE": 2,
              "AC_COOLING": 2,
              "ELECTRICAL": 2,
              "SUSPENSION": 2,
              "TRANSMISSION": 1,
              "MAINTENANCE": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 14,
              "ENGINE_DIAGNOSTIC": 2,
              "AC_COOLING_COOLING": 2,
              "ELECTRICAL_ACCESSORIES": 2,
              "SUSPENSION_STEERING": 2,
              "TRANSMISSION_CLUTCH": 1,
              "MAINTENANCE_FLUID_FILTER": 1
            }
          }
        ]
      },
      {
        "cohort": "Mar 2025",
        "total_vehicles": 48,
        "window_metrics": [
          {
            "total_repairs": 28,
            "unique_vehicles": 21,
            "avg_repair_duration": 0.6785714285714286,
            "categories": {
              "OTHER": 20,
              "SUSPENSION": 3,
              "AC_COOLING": 3,
              "BODY_INTERIOR": 1,
              "ENGINE": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 20,
              "AC_COOLING_AC_SYSTEM": 3,
              "SUSPENSION_SUSPENSION": 2,
              "BODY_INTERIOR_NVH": 1,
              "ENGINE_DIAGNOSTIC": 1,
              "SUSPENSION_STEERING": 1
            }
          },
          {
            "total_repairs": 47,
            "unique_vehicles": 34,
            "avg_repair_duration": 1.3191489361702127,
            "categories": {
              "OTHER": 31,
              "AC_COOLING": 6,
              "ENGINE": 5,
              "SUSPENSION": 4,
              "BODY_INTERIOR": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 31,
              "AC_COOLING_AC_SYSTEM": 5,
              "ENGINE_DIAGNOSTIC": 5,
              "SUSPENSION_SUSPENSION": 3,
              "BODY_INTERIOR_NVH": 1,
              "AC_COOLING_COOLING": 1,
              "SUSPENSION_STEERING": 1
            }
          },
          {
            "total_repairs": 81,
            "unique_vehicles": 48,
            "avg_repair_duration": 2.3333333333333335,
            "categories": {
              "OTHER": 52,
              "ENGINE": 14,
              "AC_COOLING": 9,
              "SUSPENSION": 4,
              "BODY_INTERIOR": 2
            },
            "subcategories": {
              "OTHER_GENERAL": 52,
              "ENGINE_DIAGNOSTIC": 13,
              "AC_COOLING_AC_SYSTEM": 8,
              "SUSPENSION_SUSPENSION": 3,
              "BODY_INTERIOR_NVH": 1,
              "ENGINE_MECHANICAL": 1,
              "BODY_INTERIOR_BODY": 1,
              "AC_COOLING_COOLING": 1,
              "SUSPENSION_STEERING": 1
            }
          },
          {
            "total_repairs": 81,
            "unique_vehicles": 48,
            "avg_repair_duration": 2.3333333333333335,
            "categories": {
              "OTHER": 52,
              "ENGINE": 14,
              "AC_COOLING": 9,
              "SUSPENSION": 4,
              "BODY_INTERIOR": 2
            },
            "subcategories": {
              "OTHER_GENERAL": 52,
              "ENGINE_DIAGNOSTIC": 13,
              "AC_COOLING_AC_SYSTEM": 8,
              "SUSPENSION_SUSPENSION": 3,
              "BODY_INTERIOR_NVH": 1,
              "ENGINE_MECHANICAL": 1,
              "BODY_INTERIOR_BODY": 1,
              "AC_COOLING_COOLING": 1,
              "SUSPENSION_STEERING": 1
            }
          },
          {
            "total_repairs": 81,
            "unique_vehicles": 48,
            "avg_repair_duration": 2.3333333333333335,
            "categories": {
              "OTHER": 52,
              "ENGINE": 14,
              "AC_COOLING": 9,
              "SUSPENSION": 4,
              "BODY_INTERIOR": 2
            },
            "subcategories": {
              "OTHER_GENERAL": 52,
              "ENGINE_DIAGNOSTIC": 13,
              "AC_COOLING_AC_SYSTEM": 8,
              "SUSPENSION_SUSPENSION": 3,
              "BODY_INTERIOR_NVH": 1,
              "ENGINE_MECHANICAL": 1,
              "BODY_INTERIOR_BODY": 1,
              "AC_COOLING_COOLING": 1,
              "SUSPENSION_STEERING": 1
            }
          }
        ]
      },
      {
        "cohort": "May 2025",
        "total_vehicles": 55,
        "window_metrics": [
          {
            "total_repairs": 17,
            "unique_vehicles": 15,
            "avg_repair_duration": 1.7058823529411764,
            "categories": {
              "OTHER": 11,
              "BODY_INTERIOR": 2,
              "AC_COOLING": 2,
              "ENGINE": 1,
              "ELECTRICAL": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 11,
              "BODY_INTERIOR_BODY": 2,
              "AC_COOLING_AC_SYSTEM": 2,
              "ENGINE_DIAGNOSTIC": 1,
              "ELECTRICAL_ACCESSORIES": 1
            }
          },
          {
            "total_repairs": 51,
            "unique_vehicles": 29,
            "avg_repair_duration": 2.4901960784313726,
            "categories": {
              "OTHER": 32,
              "ELECTRICAL": 6,
              "ENGINE": 5,
              "SUSPENSION": 3,
              "AC_COOLING": 2,
              "BODY_INTERIOR": 2,
              "TRANSMISSION": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 32,
              "ELECTRICAL_ACCESSORIES": 6,
              "ENGINE_DIAGNOSTIC": 5,
              "SUSPENSION_STEERING": 3,
              "AC_COOLING_AC_SYSTEM": 2,
              "BODY_INTERIOR_BODY": 2,
              "TRANSMISSION_GEARBOX": 1
            }
          },
          {
            "total_repairs": 89,
            "unique_vehicles": 55,
            "avg_repair_duration": 2.348314606741573,
            "categories": {
              "OTHER": 58,
              "ENGINE": 10,
              "SUSPENSION": 7,
              "ELECTRICAL": 6,
              "BODY_INTERIOR": 4,
              "AC_COOLING": 3,
              "TRANSMISSION": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 58,
              "ENGINE_DIAGNOSTIC": 10,
              "ELECTRICAL_ACCESSORIES": 6,
              "BODY_INTERIOR_BODY": 4,
              "SUSPENSION_STEERING": 4,
              "AC_COOLING_AC_SYSTEM": 3,
              "SUSPENSION_BRAKES": 3,
              "TRANSMISSION_GEARBOX": 1
            }
          },
          {
            "total_repairs": 89,
            "unique_vehicles": 55,
            "avg_repair_duration": 2.348314606741573,
            "categories": {
              "OTHER": 58,
              "ENGINE": 10,
              "SUSPENSION": 7,
              "ELECTRICAL": 6,
              "BODY_INTERIOR": 4,
              "AC_COOLING": 3,
              "TRANSMISSION": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 58,
              "ENGINE_DIAGNOSTIC": 10,
              "ELECTRICAL_ACCESSORIES": 6,
              "BODY_INTERIOR_BODY": 4,
              "SUSPENSION_STEERING": 4,
              "AC_COOLING_AC_SYSTEM": 3,
              "SUSPENSION_BRAKES": 3,
              "TRANSMISSION_GEARBOX": 1
            }
          },
          {
            "total_repairs": 89,
            "unique_vehicles": 55,
            "avg_repair_duration": 2.348314606741573,
            "categories": {
              "OTHER": 58,
              "ENGINE": 10,
              "SUSPENSION": 7,
              "ELECTRICAL": 6,
              "BODY_INTERIOR": 4,
              "AC_COOLING": 3,
              "TRANSMISSION": 1
            },
            "subcategories": {
              "OTHER_GENERAL": 58,
              "ENGINE_DIAGNOSTIC": 10,
              "ELECTRICAL_ACCESSORIES": 6,
              "BODY_INTERIOR_BODY": 4,
              "SUSPENSION_STEERING": 4,
              "AC_COOLING_AC_SYSTEM": 3,
              "SUSPENSION_BRAKES": 3,
              "TRANSMISSION_GEARBOX": 1
            }
          }
        ]
      },
    [
      "< 7 days",
      "< 14 days",
      "< 30 days",
      "< 60 days",
      "< 90 days"
    ]
  ],
  "patterns": {
    "service_transitions": {
      "General Repair -> General Repair": 406,
      "General Repair -> Preventive Maintenance-Paid Service(PMS)": 203,
      "General Repair -> 3rd Free Service": 54,
      "Preventive Maintenance-Paid Service(PMS) -> General Repair": 37,
      "General Repair -> 2nd Free Service": 32,
      "General Repair -> 1st Free Service": 21,
      "1st Free Service -> General Repair": 12,
      "2nd Free Service -> General Repair": 9,
      "General Repair -> 5th Free Service": 9,
      "4th Free Service -> General Repair": 4
    },
    "category_transitions": {
      "AC_COOLING -> AC_COOLING_AC_SYSTEM": 46,
      "AC_COOLING -> AC_COOLING_COOLING": 4,
      "BODY_INTERIOR -> BODY_INTERIOR_BODY": 17,
      "BODY_INTERIOR -> BODY_INTERIOR_INTERIOR": 5,
      "BODY_INTERIOR -> BODY_INTERIOR_NVH": 6,
      "ELECTRICAL -> ELECTRICAL_ACCESSORIES": 53,
      "ENGINE -> ENGINE_DIAGNOSTIC": 63,
      "ENGINE -> ENGINE_GENERAL": 4,
      "ENGINE -> ENGINE_MECHANICAL": 27,
      "MAINTENANCE -> MAINTENANCE_FLUID_FILTER": 1,
      "OTHER -> OTHER_GENERAL": 499,
      "SUSPENSION -> SUSPENSION_BRAKES": 22,
      "SUSPENSION -> SUSPENSION_GENERAL": 1,
      "SUSPENSION -> SUSPENSION_STEERING": 12,
      "SUSPENSION -> SUSPENSION_SUSPENSION": 14,
      "TRANSMISSION -> TRANSMISSION_CLUTCH": 7,
      "TRANSMISSION -> TRANSMISSION_GEARBOX": 8
    },
    "repeat_categories": {
      "main_categories": {
        "OTHER": 499,
        "ENGINE": 94,
        "ELECTRICAL": 53,
        "AC_COOLING": 50,
        "SUSPENSION": 49,
        "BODY_INTERIOR": 28,
        "TRANSMISSION": 15,
        "MAINTENANCE": 1
      },
      "subcategories": {
        "OTHER_GENERAL": 499,
        "ENGINE_DIAGNOSTIC": 63,
        "ELECTRICAL_ACCESSORIES": 53,
        "AC_COOLING_AC_SYSTEM": 46,
        "ENGINE_MECHANICAL": 27,
        "SUSPENSION_BRAKES": 22,
        "BODY_INTERIOR_BODY": 17,
        "SUSPENSION_SUSPENSION": 14,
        "SUSPENSION_STEERING": 12,
        "TRANSMISSION_GEARBOX": 8,
        "TRANSMISSION_CLUTCH": 7,
        "BODY_INTERIOR_NVH": 6,
        "BODY_INTERIOR_INTERIOR": 5,
        "AC_COOLING_COOLING": 4,
        "ENGINE_GENERAL": 4,
        "SUSPENSION_GENERAL": 1,
        "MAINTENANCE_FLUID_FILTER": 1
      }
    },
    "high_frequency_vehicles": {
      "MZ7DD3S1C7H138984": 45,
      "MZ7HD3M1K6H128852": 23,
      "MZ7KD6JJF6H008648": 18,
      "MZ7CD33KJ7H042660": 13,
      "MZ7BD1D2G3H028401": 12,
      "MZ7HD1D2K3H037881": 12,
      "MZ7GD58ED6H012003": 11,
      "MZ7JD64JD4H003244": 10,
      "MZ7JD66FF6H008762": 10,
      "MZ7JD64JM3H001134": 9
    },
    "avg_days_by_category": {
      "AC_COOLING": 9.02,
      "BODY_INTERIOR": 15.571428571428571,
      "ELECTRICAL": 9.622641509433961,
      "ENGINE": 18.01063829787234,
      "MAINTENANCE": 15.0,
      "OTHER": 15.142284569138276,
      "SUSPENSION": 14.183673469387756,
      "TRANSMISSION": 15.2
    },
    "repair_durations": {
      "mean": 1.8757921419518377,
      "median": 0.0,
      "std": 4.65781201083876
    }
  },
  "validationMetrics": {
    "data_quality": {
      "total_records": 789,
      "valid_records": 789,
      "invalid_dates": 0,
      "service_type_mismatches": 383,
      "completeness": {
        "service_type": 100.0,
        "repeated_job": 100.0,
        "vin": 100.0
      }
    },
    "repair_patterns": {
      "time_between_repairs": {
        "mean": 14.681875792141952,
        "median": 13.0,
        "std": 9.182246085650625,
        "min": 0.0,
        "max": 44.0
      },
      "repair_duration": {
        "mean": 1.8757921419518377,
        "median": 0.0,
        "std": 4.65781201083876
      },
      "vehicles": {
        "total_unique": 321,
        "avg_repairs_per_vehicle": 2.457943925233645,
        "max_repairs_per_vehicle": 45
      }
    }
  },
  "warnings": [
    {
      "type": "negative_time_gap",
      "severity": "HIGH",
      "count": 1,
      "examples": [
        {
          "Ro Number": "DW01395242",
          "days_between_visits": -6.0
        }
      ]
    },
    {
      "type": "service_type_mismatch",
      "severity": "MEDIUM",
      "count": 384,
      "examples": [
        {
          "Service Type": "General Repair",
          "Prev Service Type": "1st Free Service",
          "Repeated Job": "OTHER CONCERNS"
        },
        {
          "Service Type": "General Repair",
          "Prev Service Type": "1st Free Service",
          "Repeated Job": "OTHER CONCERNS"
        },
        {
          "Service Type": "General Repair",
          "Prev Service Type": "1st Free Service",
          "Repeated Job": "OTHER CONCERNS"
        },
        {
          "Service Type": "1st Free Service",
          "Prev Service Type": "General Repair",
          "Repeade Job": "OTHER CONCERNS"
        },
        {
          "Service Type": "1st Free Service",
          "Prev Service Type": "General Repair",
          "Repeated Job": "OTHER CONCERNS"
        }
      ]
    },
    {
      "type": "high_frequency_repairs",
      "severity": "MEDIUM",
      "count": 7,
      "examples": [
        {
          "VIN": "MZ7BD1D2G3H028401",
          "repair_count": 12
        },
        {
          "VIN": "MZ7CD33KJ7H042660",
          "repair_count": 13
        },
        {
          "VIN": "MZ7DD3S1C7H138984",
          "repair_count": 45
        },
        {
          "VIN": "MZ7GD58ED6H012003",
          "repair_count": 11
        },
        {
          "VIN": "MZ7HD1D2K3H037881",
          "repair_count": 12
        }
      ]
    }
  ]
};

export const checkInHeatmapData: CheckInHeatmapData = {
  timeBins: ["08:00-09:00", "09:00-10:30", "10:30-12:00", "12:00-14:00", "14:00-16:00", "16:00-18:00"],
  weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weeks: {
  "1": [
    [
      0,
      0,
      11,
      13,
      9,
      8
    ],
    [
      2,
      15,
      20,
      13,
      9,
      3
    ],
    [
      3,
      7,
      24,
      2,
      6,
      2
    ],
    [
      1,
      17,
      23,
      15,
      7,
      4
    ],
    [
      1,
      16,
      22,
      11,
      3,
      7
    ],
    [
      3,
      22,
      17,
      8,
      6,
      2
    ]
  ],
  "2": [
    [
      3,
      10,
      18,
      18,
      5,
      5
    ],
    [
      3,
      19,
      22,
      14,
      7,
      4
    ],
    [
      0,
      25,
      22,
      14,
      6,
      8
    ],
    [
      0,
      18,
      17,
      15,
      12,
      9
    ],
    [
      2,
      15,
      20,
      11,
      8,
      3
    ],
    [
      1,
      10,
      13,
      7,
      14,
      4
    ]
  ],
  "3": [
    [
      3,
      16,
      15,
      8,
      13,
      8
    ],
    [
      5,
      22,
      15,
      12,
      7,
      13
    ],
    [
      5,
      18,
      12,
      8,
      7,
      12
    ],
    [
      2,
      12,
      17,
      9,
      5,
      4
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      6,
      22,
      24,
      18,
      10,
      9
    ]
  ],
  "4": [
    [
      1,
      13,
      11,
      8,
      4,
      6
    ],
    [
      0,
      19,
      15,
      8,
      7,
      3
    ],
    [
      2,
      10,
      18,
      18,
      5,
      6
    ],
    [
      1,
      28,
      15,
      5,
      4,
      10
    ],
    [
      0,
      10,
      12,
      10,
      10,
      3
    ],
    [
      2,
      26,
      14,
      18,
      7,
      3
    ]
  ]
}
};

export const gateInThroughputData: GateInThroughputData = {
  "byDay": {
    "thisWeek": [
      {
        "day": "Mon",
        "checkIns": 42
      },
      {
        "day": "Tue",
        "checkIns": 64
      },
      {
        "day": "Wed",
        "checkIns": 45
      },
      {
        "day": "Thu",
        "checkIns": 68
      },
      {
        "day": "Fri",
        "checkIns": 62
      },
      {
        "day": "Sat",
        "checkIns": 63
      },
      {
        "day": "Sun",
        "checkIns": 24
      }
    ],
    "lastWeek": [
      {
        "day": "Mon",
        "checkIns": 44
      },
      {
        "day": "Tue",
        "checkIns": 70
      },
      {
        "day": "Wed",
        "checkIns": 78
      },
      {
        "day": "Thu",
        "checkIns": 74
      },
      {
        "day": "Fri",
        "checkIns": 67
      },
      {
        "day": "Sat",
        "checkIns": 49
      },
      {
        "day": "Sun",
        "checkIns": 53
      }
    ]
  },
  "byHour": {
    "thisWeek": [
      {
        "hour": 8,
        "checkIns": 13
      },
      {
        "hour": 9,
        "checkIns": 64
      },
      {
        "hour": 10,
        "checkIns": 62
      },
      {
        "hour": 11,
        "checkIns": 89
      },
      {
        "hour": 12,
        "checkIns": 31
      },
      {
        "hour": 13,
        "checkIns": 31
      },
      {
        "hour": 14,
        "checkIns": 25
      },
      {
        "hour": 15,
        "checkIns": 15
      },
      {
        "hour": 16,
        "checkIns": 10
      },
      {
        "hour": 17,
        "checkIns": 16
      },
      {
        "hour": 18,
        "checkIns": 10
      },
      {
        "hour": 19,
        "checkIns": 2
      }
    ],
    "lastWeek": [
      {
        "hour": 8,
        "checkIns": 9
      },
      {
        "hour": 9,
        "checkIns": 77
      },
      {
        "hour": 10,
        "checkIns": 81
      },
      {
        "hour": 11,
        "checkIns": 87
      },
      {
        "hour": 12,
        "checkIns": 44
      },
      {
        "hour": 13,
        "checkIns": 42
      },
      {
        "hour": 14,
        "checkIns": 24
      },
      {
        "hour": 15,
        "checkIns": 32
      },
      {
        "hour": 16,
        "checkIns": 20
      },
      {
        "hour": 17,
        "checkIns": 17
      },
      {
        "hour": 18,
        "checkIns": 13
      },
      {
        "hour": 19,
        "checkIns": 8
      }
    ]
  }
};
