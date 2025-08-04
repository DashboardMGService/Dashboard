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
        "current": 9245,
        "previous": 13264,
        "target": 0,
        "percentChange": -30.3
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
          "currentCumulative": 9101,
          "previousCumulative": 11612
        },
        {
          "month": "Aug",
          "currentCumulative": 9245,
          "previousCumulative": 13264
        },
        {
          "month": "Sep",
          "currentCumulative": 9245,
          "previousCumulative": 14859
        },
        {
          "month": "Oct",
          "currentCumulative": 9245,
          "previousCumulative": 16217
        },
        {
          "month": "Nov",
          "currentCumulative": 9245,
          "previousCumulative": 17641
        },
        {
          "month": "Dec",
          "currentCumulative": 9245,
          "previousCumulative": 19126
        }
      ]
    },
    "partsRevenue": {
      "summary": {
        "current": 98966416.64,
        "previous": 125642320.83000001,
        "target": 0,
        "percentChange": -21.23
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
          "currentCumulative": 98013436.77,
          "previousCumulative": 108376909.25000001
        },
        {
          "month": "Aug",
          "currentCumulative": 98966416.64,
          "previousCumulative": 125642320.83000001
        },
        {
          "month": "Sep",
          "currentCumulative": 98966416.64,
          "previousCumulative": 143465209.9
        },
        {
          "month": "Oct",
          "currentCumulative": 98966416.64,
          "previousCumulative": 163118866.56
        },
        {
          "month": "Nov",
          "currentCumulative": 98966416.64,
          "previousCumulative": 183091670.24
        },
        {
          "month": "Dec",
          "currentCumulative": 98966416.64,
          "previousCumulative": 199868338.94
        }
      ]
    },
    "labourRevenue": {
      "summary": {
        "current": 40652817.49,
        "previous": 50513238.67,
        "target": 0,
        "percentChange": -19.52
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
          "currentCumulative": 40178374.49,
          "previousCumulative": 44486863.93
        },
        {
          "month": "Aug",
          "currentCumulative": 40652817.49,
          "previousCumulative": 50513238.67
        },
        {
          "month": "Sep",
          "currentCumulative": 40652817.49,
          "previousCumulative": 56373524.82
        },
        {
          "month": "Oct",
          "currentCumulative": 40652817.49,
          "previousCumulative": 62114722.96
        },
        {
          "month": "Nov",
          "currentCumulative": 40652817.49,
          "previousCumulative": 70032988.06
        },
        {
          "month": "Dec",
          "currentCumulative": 40652817.49,
          "previousCumulative": 77127012.65
        }
      ]
    },
    "accessoriesRevenue": {
      "summary": {
        "current": 5070631.92,
        "previous": 3590992.2600000002,
        "target": 0,
        "percentChange": 41.2
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
          "currentCumulative": 5070631.92,
          "previousCumulative": 3590992.2600000002
        },
        {
          "month": "Sep",
          "currentCumulative": 5070631.92,
          "previousCumulative": 4068706.0700000003
        },
        {
          "month": "Oct",
          "currentCumulative": 5070631.92,
          "previousCumulative": 4406119.2
        },
        {
          "month": "Nov",
          "currentCumulative": 5070631.92,
          "previousCumulative": 4735811.890000001
        },
        {
          "month": "Dec",
          "currentCumulative": 5070631.92,
          "previousCumulative": 5078781.850000001
        }
      ]
    },
    "totalRevenue": {
      "summary": {
        "current": 144689866.05,
        "previous": 179746551.76,
        "target": 0,
        "percentChange": -19.5
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
          "currentCumulative": 143208093.54000002,
          "previousCumulative": 156070455.13
        },
        {
          "month": "Aug",
          "currentCumulative": 144689866.05,
          "previousCumulative": 179746551.76
        },
        {
          "month": "Sep",
          "currentCumulative": 144689866.05,
          "previousCumulative": 203907440.79
        },
        {
          "month": "Oct",
          "currentCumulative": 144689866.05,
          "previousCumulative": 229639708.72
        },
        {
          "month": "Nov",
          "currentCumulative": 144689866.05,
          "previousCumulative": 257860470.19
        },
        {
          "month": "Dec",
          "currentCumulative": 144689866.05,
          "previousCumulative": 282074133.44
        }
      ]
    }
  },
  "mtd": {
    "Jan": {
      "throughput": {
        "current": 44,
        "previous": 74,
        "target": 0,
        "percentChange": -40.54
      },
      "partsRevenue": {
        "current": 163136.25,
        "previous": 575591.44,
        "target": 0,
        "percentChange": -71.66
      },
      "labourRevenue": {
        "current": 57160.0,
        "previous": 211634.0,
        "target": 0,
        "percentChange": -72.99
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 220296.25,
        "previous": 787225.44,
        "target": 0,
        "percentChange": -72.02
      }
    },
    "Feb": {
      "throughput": {
        "current": 28,
        "previous": 96,
        "target": 0,
        "percentChange": -70.83
      },
      "partsRevenue": {
        "current": 454120.4900000001,
        "previous": 403829.15,
        "target": 0,
        "percentChange": 12.45
      },
      "labourRevenue": {
        "current": 171820.5,
        "previous": 196902.0,
        "target": 0,
        "percentChange": -12.74
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 625940.9900000001,
        "previous": 600731.15,
        "target": 0,
        "percentChange": 4.2
      }
    },
    "Mar": {
      "throughput": {
        "current": 44,
        "previous": 84,
        "target": 0,
        "percentChange": -47.62
      },
      "partsRevenue": {
        "current": 354989.5199999999,
        "previous": 571195.13,
        "target": 0,
        "percentChange": -37.85
      },
      "labourRevenue": {
        "current": 163392.0,
        "previous": 335491.48,
        "target": 0,
        "percentChange": -51.3
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 518381.5199999999,
        "previous": 906686.61,
        "target": 0,
        "percentChange": -42.83
      }
    },
    "Apr": {
      "throughput": {
        "current": 31,
        "previous": 89,
        "target": 0,
        "percentChange": -65.17
      },
      "partsRevenue": {
        "current": 136546.91,
        "previous": 744701.2100000001,
        "target": 0,
        "percentChange": -81.66
      },
      "labourRevenue": {
        "current": 65755.0,
        "previous": 432312.01,
        "target": 0,
        "percentChange": -84.79
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 202301.91,
        "previous": 1177013.2200000002,
        "target": 0,
        "percentChange": -82.81
      }
    },
    "May": {
      "throughput": {
        "current": 25,
        "previous": 91,
        "target": 0,
        "percentChange": -72.53
      },
      "partsRevenue": {
        "current": 356366.72,
        "previous": 514061.11,
        "target": 0,
        "percentChange": -30.68
      },
      "labourRevenue": {
        "current": 87480.75,
        "previous": 408060.5,
        "target": 0,
        "percentChange": -78.56
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 443847.47,
        "previous": 922121.61,
        "target": 0,
        "percentChange": -51.87
      }
    },
    "Jun": {
      "throughput": {
        "current": 44,
        "previous": 59,
        "target": 0,
        "percentChange": -25.42
      },
      "partsRevenue": {
        "current": 237193.12,
        "previous": 410032.64,
        "target": 0,
        "percentChange": -42.15
      },
      "labourRevenue": {
        "current": 88645.0,
        "previous": 200423.5,
        "target": 0,
        "percentChange": -55.77
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 325838.12,
        "previous": 610456.14,
        "target": 0,
        "percentChange": -46.62
      }
    },
    "Jul": {
      "throughput": {
        "current": 27,
        "previous": 77,
        "target": 0,
        "percentChange": -64.94
      },
      "partsRevenue": {
        "current": 183392.26,
        "previous": 407894.70999999996,
        "target": 0,
        "percentChange": -55.04
      },
      "labourRevenue": {
        "current": 77382.5,
        "previous": 198503.5,
        "target": 0,
        "percentChange": -61.02
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 260774.76,
        "previous": 606398.21,
        "target": 0,
        "percentChange": -57.0
      }
    },
    "Aug": {
      "throughput": {
        "current": 52,
        "previous": 67,
        "target": 0,
        "percentChange": -22.39
      },
      "partsRevenue": {
        "current": 274949.85,
        "previous": 203844.31000000003,
        "target": 0,
        "percentChange": 34.88
      },
      "labourRevenue": {
        "current": 199161,
        "previous": 149426.5,
        "target": 0,
        "percentChange": 33.28
      },
      "accessoriesRevenue": {
        "current": 0,
        "previous": 0,
        "target": 0,
        "percentChange": 0.0
      },
      "totalRevenue": {
        "current": 474110.85,
        "previous": 353270.81000000006,
        "target": 0,
        "percentChange": 34.21
      }
    },
    "Sep": {
      "throughput": {
        "current": 0,
        "previous": 60,
        "target": 0,
        "percentChange": -100.0
      },
      "partsRevenue": {
        "current": 0,
        "previous": 254272.24,
        "target": 0,
        "percentChange": -100.0
      },
      "labourRevenue": {
        "current": 0,
        "previous": 157127.5,
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
        "previous": 411399.74,
        "target": 0,
        "percentChange": -100.0
      }
    },
    "Oct": {
      "throughput": {
        "current": 0,
        "previous": 50,
        "target": 0,
        "percentChange": -100.0
      },
      "partsRevenue": {
        "current": 0,
        "previous": 367366.21,
        "target": 0,
        "percentChange": -100.0
      },
      "labourRevenue": {
        "current": 0,
        "previous": 119929.0,
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
        "previous": 487295.21,
        "target": 0,
        "percentChange": -100.0
      }
    },
    "Nov": {
      "throughput": {
        "current": 0,
        "previous": 3,
        "target": 0,
        "percentChange": -100.0
      },
      "partsRevenue": {
        "current": 0,
        "previous": 284.75,
        "target": 0,
        "percentChange": -100.0
      },
      "labourRevenue": {
        "current": 0,
        "previous": 1600.0,
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
        "previous": 1884.75,
        "target": 0,
        "percentChange": -100.0
      }
    },
    "Dec": {
      "throughput": {
        "current": 0,
        "previous": 40,
        "target": 0,
        "percentChange": -100.0
      },
      "partsRevenue": {
        "current": 0,
        "previous": 125465.67,
        "target": 0,
        "percentChange": -100.0
      },
      "labourRevenue": {
        "current": 0,
        "previous": 134505.5,
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
        "previous": 259971.16999999998,
        "target": 0,
        "percentChange": -100.0
      }
    }
  }
}
;
