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
  ytd: {
    throughput: {
      summary: {
        current: 6642,
        previous: 9727,
        target: 0,
        percentChange: -65.27,
      },
      monthlyBreakdown: [
        {
          month: "Jan",
          currentCumulative: 1280,
          previousCumulative: 1520,
        },
        {
          month: "Feb",
          currentCumulative: 2564,
          previousCumulative: 3017,
        },
        {
          month: "Mar",
          currentCumulative: 3738,
          previousCumulative: 4605,
        },
        {
          month: "Apr",
          currentCumulative: 5036,
          previousCumulative: 6369,
        },
        {
          month: "May",
          currentCumulative: 6409,
          previousCumulative: 8064,
        },
        {
          month: "Jun",
          currentCumulative: 6642,
          previousCumulative: 9727,
        },
        {
          month: "Jul",
          currentCumulative: 6642,
          previousCumulative: 11612,
        },
        {
          month: "Aug",
          currentCumulative: 6642,
          previousCumulative: 13264,
        },
        {
          month: "Sep",
          currentCumulative: 6642,
          previousCumulative: 14859,
        },
        {
          month: "Oct",
          currentCumulative: 6642,
          previousCumulative: 16217,
        },
        {
          month: "Nov",
          currentCumulative: 6642,
          previousCumulative: 17641,
        },
        {
          month: "Dec",
          currentCumulative: 6642,
          previousCumulative: 19126,
        },
      ],
    },
    partsRevenue: {
      summary: {
        current: 71548212.61,
        previous: 200560790.54,
        target: 0,
        percentChange: -64.33,
      },
      monthlyBreakdown: [
        {
          month: "Jan",
          currentCumulative: 12185462.34,
          previousCumulative: 16667379.469999999,
        },
        {
          month: "Feb",
          currentCumulative: 25457486.09,
          previousCumulative: 32920192.95,
        },
        {
          month: "Mar",
          currentCumulative: 38717409.08,
          previousCumulative: 49063459.849999994,
        },
        {
          month: "Apr",
          currentCumulative: 52946628.0,
          previousCumulative: 64559249.169999994,
        },
        {
          month: "May",
          currentCumulative: 69392634.86,
          previousCumulative: 79601149.02,
        },
        {
          month: "Jun",
          currentCumulative: 71548212.61,
          previousCumulative: 92955115.58999999,
        },
        {
          month: "Jul",
          currentCumulative: 71548212.61,
          previousCumulative: 108787509.41999999,
        },
        {
          month: "Aug",
          currentCumulative: 71548212.61,
          previousCumulative: 126115382.26999998,
        },
        {
          month: "Sep",
          currentCumulative: 71548212.61,
          previousCumulative: 144004515.42,
        },
        {
          month: "Oct",
          currentCumulative: 71548212.61,
          previousCumulative: 163728581.82,
        },
        {
          month: "Nov",
          currentCumulative: 71548212.61,
          previousCumulative: 183734190.09,
        },
        {
          month: "Dec",
          currentCumulative: 71548212.61,
          previousCumulative: 200560790.54,
        },
      ],
    },
    labourRevenue: {
      summary: {
        current: 29577074.18,
        previous: 77127012.65,
        target: 0,
        percentChange: -61.65,
      },
      monthlyBreakdown: [
        {
          month: "Jan",
          currentCumulative: 6049615.77,
          previousCumulative: 6370545.4,
        },
        {
          month: "Feb",
          currentCumulative: 11838075.68,
          previousCumulative: 12896479.030000001,
        },
        {
          month: "Mar",
          currentCumulative: 17655137.54,
          previousCumulative: 20028952.26,
        },
        {
          month: "Apr",
          currentCumulative: 23220947.52,
          previousCumulative: 26235375.62,
        },
        {
          month: "May",
          currentCumulative: 28903832.65,
          previousCumulative: 32267207.57,
        },
        {
          month: "Jun",
          currentCumulative: 29577074.18,
          previousCumulative: 37669464.8,
        },
        {
          month: "Jul",
          currentCumulative: 29577074.18,
          previousCumulative: 44486863.93,
        },
        {
          month: "Aug",
          currentCumulative: 29577074.18,
          previousCumulative: 50513238.67,
        },
        {
          month: "Sep",
          currentCumulative: 29577074.18,
          previousCumulative: 56373524.82,
        },
        {
          month: "Oct",
          currentCumulative: 29577074.18,
          previousCumulative: 62114722.96,
        },
        {
          month: "Nov",
          currentCumulative: 29577074.18,
          previousCumulative: 70032988.06,
        },
        {
          month: "Dec",
          currentCumulative: 29577074.18,
          previousCumulative: 77127012.65,
        },
      ],
    },
    accessoriesRevenue: {
      summary: {
        current: 3393587.99,
        previous: 4386330.25,
        target: 0,
        percentChange: -22.63,
      },
      monthlyBreakdown: [
        {
          month: "Jan",
          currentCumulative: 778562.61,
          previousCumulative: 338455.76,
        },
        {
          month: "Feb",
          currentCumulative: 1422965.19,
          previousCumulative: 760774.8400000001,
        },
        {
          month: "Mar",
          currentCumulative: 1912315.72,
          previousCumulative: 1244613.1800000002,
        },
        {
          month: "Apr",
          currentCumulative: 2527934.33,
          previousCumulative: 1589602.7800000003,
        },
        {
          month: "May",
          currentCumulative: 3236514.18,
          previousCumulative: 1951205.5900000003,
        },
        {
          month: "Jun",
          currentCumulative: 3393587.99,
          previousCumulative: 2356478.8500000006,
        },
        {
          month: "Jul",
          currentCumulative: 3393587.99,
          previousCumulative: 2796081.7800000003,
        },
        {
          month: "Aug",
          currentCumulative: 3393587.99,
          previousCumulative: 3117930.8200000003,
        },
        {
          month: "Sep",
          currentCumulative: 3393587.99,
          previousCumulative: 3529400.5500000003,
        },
        {
          month: "Oct",
          currentCumulative: 3393587.99,
          previousCumulative: 3796403.9400000004,
        },
        {
          month: "Nov",
          currentCumulative: 3393587.99,
          previousCumulative: 4093292.0400000005,
        },
        {
          month: "Dec",
          currentCumulative: 3393587.99,
          previousCumulative: 4386330.25,
        },
      ],
    },
    totalRevenue: {
      summary: {
        current: 104518874.78,
        previous: 282074133.44,
        target: 0,
        percentChange: -62.95,
      },
      monthlyBreakdown: [
        {
          month: "Jan",
          currentCumulative: 19013640.72,
          previousCumulative: 23376380.63,
        },
        {
          month: "Feb",
          currentCumulative: 38718526.96,
          previousCumulative: 46577446.81999999,
        },
        {
          month: "Mar",
          currentCumulative: 58284862.34,
          previousCumulative: 70337025.28999999,
        },
        {
          month: "Apr",
          currentCumulative: 78695509.85,
          previousCumulative: 92384227.57,
        },
        {
          month: "May",
          currentCumulative: 101532981.69,
          previousCumulative: 113819562.17999999,
        },
        {
          month: "Jun",
          currentCumulative: 104518874.78,
          previousCumulative: 132981059.24,
        },
        {
          month: "Jul",
          currentCumulative: 104518874.78,
          previousCumulative: 156070455.13,
        },
        {
          month: "Aug",
          currentCumulative: 104518874.78,
          previousCumulative: 179746551.76,
        },
        {
          month: "Sep",
          currentCumulative: 104518874.78,
          previousCumulative: 203907440.79,
        },
        {
          month: "Oct",
          currentCumulative: 104518874.78,
          previousCumulative: 229639708.72,
        },
        {
          month: "Nov",
          currentCumulative: 104518874.78,
          previousCumulative: 257860470.19,
        },
        {
          month: "Dec",
          currentCumulative: 104518874.78,
          previousCumulative: 282074133.44,
        },
      ],
    },
  },
  mtd: {
    "Jan": {
      "throughput": {
        "current": 1280,
        "previous": 1520,
        "target": 0,
        "percentChange": -15.79
      },
      "partsRevenue": {
        "current": 12185462.34,
        "previous": 16667379.469999999,
        "target": 0,
        "percentChange": -26.89
      },
      "labourRevenue": {
        "current": 6049615.77,
        "previous": 6370545.4,
        "target": 0,
        "percentChange": -5.04
      },
      "accessoriesRevenue": {
        "current": 778562.61,
        "previous": 338455.76,
        "target": 0,
        "percentChange": 130.03
      },
      "totalRevenue": {
        "current": 19013640.72,
        "previous": 23376380.63,
        "target": 0,
        "percentChange": -18.66
      }
    },
    "Feb": {
      "throughput": {
        "current": 1284,
        "previous": 1497,
        "target": 0,
        "percentChange": -14.23
      },
      "partsRevenue": {
        "current": 13272023.75,
        "previous": 16252813.48,
        "target": 0,
        "percentChange": -18.34
      },
      "labourRevenue": {
        "current": 5788459.91,
        "previous": 6525933.63,
        "target": 0,
        "percentChange": -11.3
      },
      "accessoriesRevenue": {
        "current": 644402.5800000001,
        "previous": 422319.08,
        "target": 0,
        "percentChange": 52.59
      },
      "totalRevenue": {
        "current": 19704886.240000002,
        "previous": 23201066.189999998,
        "target": 0,
        "percentChange": -15.07
      }
    },
    "Mar": {
      "throughput": {
        "current": 1174,
        "previous": 1588,
        "target": 0,
        "percentChange": -26.07
      },
      "partsRevenue": {
        "current": 13259922.99,
        "previous": 16143266.899999999,
        "target": 0,
        "percentChange": -17.86
      },
      "labourRevenue": {
        "current": 5817061.859999999,
        "previous": 7132473.23,
        "target": 0,
        "percentChange": -18.44
      },
      "accessoriesRevenue": {
        "current": 489350.52999999997,
        "previous": 483838.34,
        "target": 0,
        "percentChange": 1.14
      },
      "totalRevenue": {
        "current": 19566335.380000003,
        "previous": 23759578.47,
        "target": 0,
        "percentChange": -17.65
      }
    },
    "Apr": {
      "throughput": {
        "current": 1298,
        "previous": 1764,
        "target": 0,
        "percentChange": -26.42
      },
      "partsRevenue": {
        "current": 14229218.92,
        "previous": 15495789.32,
        "target": 0,
        "percentChange": -8.17
      },
      "labourRevenue": {
        "current": 5565809.98,
        "previous": 6206423.359999999,
        "target": 0,
        "percentChange": -10.32
      },
      "accessoriesRevenue": {
        "current": 615618.6100000001,
        "previous": 344989.6,
        "target": 0,
        "percentChange": 78.45
      },
      "totalRevenue": {
        "current": 20410647.509999998,
        "previous": 22047202.28,
        "target": 0,
        "percentChange": -7.42
      }
    },
    "May": {
      "throughput": {
        "current": 1373,
        "previous": 1695,
        "target": 0,
        "percentChange": -19.0
      },
      "partsRevenue": {
        "current": 16446006.86,
        "previous": 15041899.850000001,
        "target": 0,
        "percentChange": 9.33
      },
      "labourRevenue": {
        "current": 5682885.129999999,
        "previous": 6031831.95,
        "target": 0,
        "percentChange": -5.79
      },
      "accessoriesRevenue": {
        "current": 708579.85,
        "previous": 361602.81,
        "target": 0,
        "percentChange": 95.96
      },
      "totalRevenue": {
        "current": 22837471.84,
        "previous": 21435334.61,
        "target": 0,
        "percentChange": 6.54
      }
    },
    "Jun": {
      "throughput": {
        "current": 233,
        "previous": 1663,
        "target": 0,
        "percentChange": -85.99
      },
      "partsRevenue": {
        "current": 2155577.75,
        "previous": 13353966.569999997,
        "target": 0,
        "percentChange": -83.86
      },
      "labourRevenue": {
        "current": 673241.53,
        "previous": 5402257.23,
        "target": 0,
        "percentChange": -87.54
      },
      "accessoriesRevenue": {
        "current": 157073.81,
        "previous": 405273.26000000007,
        "target": 0,
        "percentChange": -61.24
      },
      "totalRevenue": {
        "current": 2985893.0900000003,
        "previous": 19161497.06,
        "target": 0,
        "percentChange": -84.42
      }
    }
  }
};
