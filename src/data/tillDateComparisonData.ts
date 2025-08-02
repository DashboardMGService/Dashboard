// File: src/data/tillDateComparisonData.ts

// --- Common Interfaces ---

/**
 * Represents the core values for comparing a single metric
 * between a current period (2025) and a previous period (2024).
 */
export interface ComparisonMetricValues {
  current: number;        // Value for 2025 (YTD or MTD)
  previous: number;       // Value for 2024 (corresponding YTD or MTD)
  target: number;         // Target for 2025
  percentChange?: number; // Pre-calculated: ((current - previous) / previous) * 100, rounded.
}

/**
 * Represents the cumulative values for a single metric for a specific month
 * within a Year-To-Date (YTD) context.
 */
export interface MonthlyCumulativeValue {
  month: string;                // "Jan", "Feb", ...
  currentCumulative: number;    // Cumulative value for 2025 up to this month
  previousCumulative: number;   // Cumulative value for 2024 up to this month
  // targetCumulative?: number; // Optional: Cumulative target for 2025 up to this month
  // percentChangeCumulative?: number; // Optional
}

// --- YTD (Year-To-Date vs Last-Year-To-Date) Data Structures ---

/**
 * Holds the summary and monthly breakdown for a single KPI in the YTD comparison (2025 vs 2024).
 */
export interface YtdKpiSet {
  summary: ComparisonMetricValues;
  monthlyBreakdown: MonthlyCumulativeValue[];
}

/**
 * Defines the structure for all YTD comparison data (2025 vs 2024), covering all tracked KPIs.
 */
export interface YtdComparisonDataType {
  throughput: YtdKpiSet;
  partsRevenue: YtdKpiSet;
  labourRevenue: YtdKpiSet;
  accessoriesRevenue: YtdKpiSet;
  totalRevenue: YtdKpiSet;
}

// --- MTD (Month-To-Date vs Last-Month-To-Date) Data Structures ---

/**
 * Holds the set of all tracked KPIs for a single month in the MTD comparison (2025 vs 2024).
 * Each KPI will have its 'current', 'previous', 'target', and 'percentChange'.
 */
export interface MtdKpiMetricSet {
  throughput: ComparisonMetricValues;
  partsRevenue: ComparisonMetricValues;
  labourRevenue: ComparisonMetricValues;
  accessoriesRevenue: ComparisonMetricValues;
  totalRevenue: ComparisonMetricValues;
}

/**
 * Defines the structure for all MTD comparison data (2025 vs 2024).
 * It's an object where each key is a three-letter month abbreviation (e.g., "Jan"),
 * and the value is the MtdKpiMetricSet for that month.
 */
export interface MtdComparisonDataType {
  [monthAbbreviation: string]: MtdKpiMetricSet; // e.g., Jan: MtdKpiMetricSet, Feb: MtdKpiMetricSet, ...
}

// --- Main Data Structure for the Entire File ---

/**
 * The main data structure for till-date comparisons,
 * focusing on 2025 (current) vs 2024 (previous).
 */
export interface TillDateComparisonMainData {
  ytd: YtdComparisonDataType;
  mtd: MtdComparisonDataType;
}

// --- Actual Data (2025 vs 2024) ---

export const tillDateComparisonData: TillDateComparisonMainData = {
  "ytd": {
    "throughput": {
      "summary": {
        "current": 9146,
        "previous": 13264,
        "target": 0,
        "percentChange": -31.05
      },
      "monthlyBreakdown": [
        {
          "month": "Jan",
          "currentCumulative": 1280,
          "previousCumulative": 1520
        },
        {
          "month": "Feb",
          "currentCumulative": 2564,
          "previousCumulative": 3017
        },
        {
          "month": "Mar",
          "currentCumulative": 3738,
          "previousCumulative": 4605
        },
        {
          "month": "Apr",
          "currentCumulative": 5036,
          "previousCumulative": 6369
        },
        {
          "month": "May",
          "currentCumulative": 6402,
          "previousCumulative": 8064
        },
        {
          "month": "Jun",
          "currentCumulative": 7788,
          "previousCumulative": 9727
        },
        {
          "month": "Jul",
          "currentCumulative": 9104,
          "previousCumulative": 11612
        },
        {
          "month": "Aug",
          "currentCumulative": 9146,
          "previousCumulative": 13264
        },
        {
          "month": "Sep",
          "currentCumulative": 9146,
          "previousCumulative": 14859
        },
        {
          "month": "Oct",
          "currentCumulative": 9146,
          "previousCumulative": 16217
        },
        {
          "month": "Nov",
          "currentCumulative": 9146,
          "previousCumulative": 17641
        },
        {
          "month": "Dec",
          "currentCumulative": 9146,
          "previousCumulative": 19126
        }
      ]
    },
    "partsRevenue": {
      "summary": {
        "current": 98323738.12,
        "previous": 125642320.83000001,
        "target": 0,
        "percentChange": -21.74
      },
      "monthlyBreakdown": [
        {
          "month": "Jan",
          "currentCumulative": 12156632.1,
          "previousCumulative": 16645196.41
        },
        {
          "month": "Feb",
          "currentCumulative": 25428655.85,
          "previousCumulative": 32817773.990000002
        },
        {
          "month": "Mar",
          "currentCumulative": 38669358.68000001,
          "previousCumulative": 48895369.93
        },
        {
          "month": "Apr",
          "currentCumulative": 52884162.480000004,
          "previousCumulative": 64343105.18
        },
        {
          "month": "May",
          "currentCumulative": 68944390.41,
          "previousCumulative": 79344235.65
        },
        {
          "month": "Jun",
          "currentCumulative": 83179876.74,
          "previousCumulative": 92637006.49000001
        },
        {
          "month": "Jul",
          "currentCumulative": 98056779.86,
          "previousCumulative": 108376909.25000001
        },
        {
          "month": "Aug",
          "currentCumulative": 98323738.12,
          "previousCumulative": 125642320.83000001
        },
        {
          "month": "Sep",
          "currentCumulative": 98323738.12,
          "previousCumulative": 143465209.9
        },
        {
          "month": "Oct",
          "currentCumulative": 98323738.12,
          "previousCumulative": 163118866.56
        },
        {
          "month": "Nov",
          "currentCumulative": 98323738.12,
          "previousCumulative": 183091670.24
        },
        {
          "month": "Dec",
          "currentCumulative": 98323738.12,
          "previousCumulative": 199868338.94
        }
      ]
    },
    "labourRevenue": {
      "summary": {
        "current": 40367826.99,
        "previous": 50513238.67,
        "target": 0,
        "percentChange": -20.08
      },
      "monthlyBreakdown": [
        {
          "month": "Jan",
          "currentCumulative": 6049615.77,
          "previousCumulative": 6370545.399999999
        },
        {
          "month": "Feb",
          "currentCumulative": 11838075.68,
          "previousCumulative": 12896479.03
        },
        {
          "month": "Mar",
          "currentCumulative": 17655137.54,
          "previousCumulative": 20028952.259999998
        },
        {
          "month": "Apr",
          "currentCumulative": 23219947.52,
          "previousCumulative": 26235375.619999997
        },
        {
          "month": "May",
          "currentCumulative": 28828874.15,
          "previousCumulative": 32267207.569999997
        },
        {
          "month": "Jun",
          "currentCumulative": 34331580.31,
          "previousCumulative": 37669464.8
        },
        {
          "month": "Jul",
          "currentCumulative": 40229829.49,
          "previousCumulative": 44486863.93
        },
        {
          "month": "Aug",
          "currentCumulative": 40367826.99,
          "previousCumulative": 50513238.67
        },
        {
          "month": "Sep",
          "currentCumulative": 40367826.99,
          "previousCumulative": 56373524.82
        },
        {
          "month": "Oct",
          "currentCumulative": 40367826.99,
          "previousCumulative": 62114722.96
        },
        {
          "month": "Nov",
          "currentCumulative": 40367826.99,
          "previousCumulative": 70032988.06
        },
        {
          "month": "Dec",
          "currentCumulative": 40367826.99,
          "previousCumulative": 77127012.65
        }
      ]
    },
    "accessoriesRevenue": {
      "summary": {
        "current": 5025149.890000001,
        "previous": 3590992.2600000002,
        "target": 0,
        "percentChange": 39.94
      },
      "monthlyBreakdown": [
        {
          "month": "Jan",
          "currentCumulative": 807392.85,
          "previousCumulative": 360638.82000000007
        },
        {
          "month": "Feb",
          "currentCumulative": 1451795.4300000002,
          "previousCumulative": 863193.8
        },
        {
          "month": "Mar",
          "currentCumulative": 1960366.12,
          "previousCumulative": 1412703.1
        },
        {
          "month": "Apr",
          "currentCumulative": 2590399.85,
          "previousCumulative": 1805746.77
        },
        {
          "month": "May",
          "currentCumulative": 3305066.65,
          "previousCumulative": 2208118.96
        },
        {
          "month": "Jun",
          "currentCumulative": 3972325.2199999997,
          "previousCumulative": 2674587.95
        },
        {
          "month": "Jul",
          "currentCumulative": 5016282.28,
          "previousCumulative": 3206681.95
        },
        {
          "month": "Aug",
          "currentCumulative": 5025149.890000001,
          "previousCumulative": 3590992.2600000002
        },
        {
          "month": "Sep",
          "currentCumulative": 5025149.890000001,
          "previousCumulative": 4068706.0700000003
        },
        {
          "month": "Oct",
          "currentCumulative": 5025149.890000001,
          "previousCumulative": 4406119.2
        },
        {
          "month": "Nov",
          "currentCumulative": 5025149.890000001,
          "previousCumulative": 4735811.890000001
        },
        {
          "month": "Dec",
          "currentCumulative": 5025149.890000001,
          "previousCumulative": 5078781.850000001
        }
      ]
    },
    "totalRevenue": {
      "summary": {
        "current": 143716715.0,
        "previous": 179746551.76,
        "target": 0,
        "percentChange": -20.04
      },
      "monthlyBreakdown": [
        {
          "month": "Jan",
          "currentCumulative": 19013640.72,
          "previousCumulative": 23376380.63
        },
        {
          "month": "Feb",
          "currentCumulative": 38718526.96,
          "previousCumulative": 46577446.82
        },
        {
          "month": "Mar",
          "currentCumulative": 58284862.34,
          "previousCumulative": 70337025.28999999
        },
        {
          "month": "Apr",
          "currentCumulative": 78694509.85000001,
          "previousCumulative": 92384227.57
        },
        {
          "month": "May",
          "currentCumulative": 101078331.21000001,
          "previousCumulative": 113819562.17999999
        },
        {
          "month": "Jun",
          "currentCumulative": 121483782.27000001,
          "previousCumulative": 132981059.24
        },
        {
          "month": "Jul",
          "currentCumulative": 143302891.63,
          "previousCumulative": 156070455.13
        },
        {
          "month": "Aug",
          "currentCumulative": 143716715.0,
          "previousCumulative": 179746551.76
        },
        {
          "month": "Sep",
          "currentCumulative": 143716715.0,
          "previousCumulative": 203907440.79
        },
        {
          "month": "Oct",
          "currentCumulative": 143716715.0,
          "previousCumulative": 229639708.72
        },
        {
          "month": "Nov",
          "currentCumulative": 143716715.0,
          "previousCumulative": 257860470.19
        },
        {
          "month": "Dec",
          "currentCumulative": 143716715.0,
          "previousCumulative": 282074133.44
        }
      ]
    }
  },
  "mtd": {
    "Jan": {
      "throughput": {
        "current": 13,
        "previous": 26,
        "target": 0,
        "percentChange": -50.0
      },
      "partsRevenue": {
        "current": 87263.98,
        "previous": 16039.659999999998,
        "target": 0,
        "percentChange": 444.05
      },
      "labourRevenue": {
        "current": 24845.0,
        "previous": 23039.0,
        "target": 0,
        "percentChange": 7.84
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 112108.98,
        "previous": 39078.659999999996,
        "target": 0,
        "percentChange": 186.88
      }
    },
    "Feb": {
      "throughput": {
        "current": 9,
        "previous": 38,
        "target": 0,
        "percentChange": -76.32
      },
      "partsRevenue": {
        "current": 47147.68,
        "previous": 147754.53999999998,
        "target": 0,
        "percentChange": -68.09
      },
      "labourRevenue": {
        "current": 13210.0,
        "previous": 92670.5,
        "target": 0,
        "percentChange": -85.75
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 60357.68,
        "previous": 240425.03999999998,
        "target": 0,
        "percentChange": -74.9
      }
    },
    "Mar": {
      "throughput": {
        "current": 13,
        "previous": 23,
        "target": 0,
        "percentChange": -43.48
      },
      "partsRevenue": {
        "current": 261409.51999999996,
        "previous": 192863.74000000002,
        "target": 0,
        "percentChange": 35.54
      },
      "labourRevenue": {
        "current": 73832.0,
        "previous": 115148.0,
        "target": 0,
        "percentChange": -35.88
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 335241.51999999996,
        "previous": 308011.74,
        "target": 0,
        "percentChange": 8.84
      }
    },
    "Apr": {
      "throughput": {
        "current": 11,
        "previous": 19,
        "target": 0,
        "percentChange": -42.11
      },
      "partsRevenue": {
        "current": 39137.729999999996,
        "previous": 296719.02,
        "target": 0,
        "percentChange": -86.81
      },
      "labourRevenue": {
        "current": 17965.0,
        "previous": 167861.0,
        "target": 0,
        "percentChange": -89.3
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 57102.729999999996,
        "previous": 464580.02,
        "target": 0,
        "percentChange": -87.71
      }
    },
    "May": {
      "throughput": {
        "current": 6,
        "previous": 36,
        "target": 0,
        "percentChange": -83.33
      },
      "partsRevenue": {
        "current": 3996.63,
        "previous": 239130.09999999998,
        "target": 0,
        "percentChange": -98.33
      },
      "labourRevenue": {
        "current": 10075.0,
        "previous": 166659.0,
        "target": 0,
        "percentChange": -93.95
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 14071.630000000001,
        "previous": 405789.1,
        "target": 0,
        "percentChange": -96.53
      }
    },
    "Jun": {
      "throughput": {
        "current": 23,
        "previous": 15,
        "target": 0,
        "percentChange": 53.33
      },
      "partsRevenue": {
        "current": 57978.200000000004,
        "previous": 75456.96,
        "target": 0,
        "percentChange": -23.16
      },
      "labourRevenue": {
        "current": 25370.0,
        "previous": 39446.5,
        "target": 0,
        "percentChange": -35.69
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 83348.20000000001,
        "previous": 114903.46,
        "target": 0,
        "percentChange": -27.46
      }
    },
    "Jul": {
      "throughput": {
        "current": 4,
        "previous": 23,
        "target": 0,
        "percentChange": -82.61
      },
      "partsRevenue": {
        "current": 20393.86,
        "previous": 152888.72999999998,
        "target": 0,
        "percentChange": -86.66
      },
      "labourRevenue": {
        "current": 4500.0,
        "previous": 57710.0,
        "target": 0,
        "percentChange": -92.2
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 24893.86,
        "previous": 210598.72999999998,
        "target": 0,
        "percentChange": -88.18
      }
    },
    "Aug": {
      "throughput": {
        "current": 14,
        "previous": 14,
        "target": 0,
        "percentChange": 0.0
      },
      "partsRevenue": {
        "current": 96130.21,
        "previous": 31887.71,
        "target": 0,
        "percentChange": 201.46
      },
      "labourRevenue": {
        "current": 43455,
        "previous": 20972.5,
        "target": 0,
        "percentChange": 107.2
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 139585.21000000002,
        "previous": 52860.21,
        "target": 0,
        "percentChange": 164.06
      }
    },
    "Sep": {
      "throughput": {
        "current": 0,
        "previous": 19,
        "target": 0,
        "percentChange": -100.0
      },
      "partsRevenue": {
        "current": 0,
        "previous": 24920.87,
        "target": 0,
        "percentChange": -100.0
      },
      "labourRevenue": {
        "current": 0,
        "previous": 34125.0,
        "target": 0,
        "percentChange": -100.0
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 0,
        "previous": 59045.869999999995,
        "target": 0,
        "percentChange": -100.0
      }
    },
    "Oct": {
      "throughput": {
        "current": 0,
        "previous": 19,
        "target": 0,
        "percentChange": -100.0
      },
      "partsRevenue": {
        "current": 0,
        "previous": 32581.1,
        "target": 0,
        "percentChange": -100.0
      },
      "labourRevenue": {
        "current": 0,
        "previous": 18827.5,
        "target": 0,
        "percentChange": -100.0
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 0,
        "previous": 51408.6,
        "target": 0,
        "percentChange": -100.0
      }
    },
    "Nov": {
      "throughput": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "partsRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "labourRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      }
    },
    "Dec": {
      "throughput": {
        "current": 0,
        "previous": 14,
        "target": 0,
        "percentChange": -100.0
      },
      "partsRevenue": {
        "current": 0,
        "previous": 33589.42,
        "target": 0,
        "percentChange": -100.0
      },
      "labourRevenue": {
        "current": 0,
        "previous": 55079.5,
        "target": 0,
        "percentChange": -100.0
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 0,
        "previous": 88668.92,
        "target": 0,
        "percentChange": -100.0
      }
    }
  }
}
;
