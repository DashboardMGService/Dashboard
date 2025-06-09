export interface RevenueCategoryDetail {
  actual: number;
  target?: number; // Target is optional
}

export interface MonthlyBreakdownYearDetail {
  throughput: RevenueCategoryDetail;
  labour: RevenueCategoryDetail;
  accessories: RevenueCategoryDetail;
  lubricant: RevenueCategoryDetail;
  parts: RevenueCategoryDetail;
}

export interface YearlyRevenueData {
  '2024': MonthlyBreakdownYearDetail;
  '2025': MonthlyBreakdownYearDetail;
}

export interface MonthlyRevenueBreakdownEntry {
  month: string; // "Jan", "Feb", ..., "Dec"
  data: YearlyRevenueData;
}

export const detailedRevenueBreakdownData: MonthlyRevenueBreakdownEntry[] = [
  {
    "month": "Jan",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1520
        },
        "labour": {
          "actual": 6370545.4
        },
        "accessories": {
          "actual": 338455.76
        },
        "lubricant": {
          "actual": 1108463.51
        },
        "parts": {
          "actual": 16667379.469999999
        }
      },
      "2025": {
        "throughput": {
          "actual": 1280,
          "target": 0
        },
        "labour": {
          "actual": 6049615.77,
          "target": 0
        },
        "accessories": {
          "actual": 778562.61,
          "target": 0
        },
        "lubricant": {
          "actual": 981165.62,
          "target": 0
        },
        "parts": {
          "actual": 12185462.34,
          "target": 0
        }
      }
    }
  },
  {
    "month": "Feb",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1497
        },
        "labour": {
          "actual": 6525933.63
        },
        "accessories": {
          "actual": 422319.08
        },
        "lubricant": {
          "actual": 1216253.31
        },
        "parts": {
          "actual": 16252813.48
        }
      },
      "2025": {
        "throughput": {
          "actual": 1284,
          "target": 0
        },
        "labour": {
          "actual": 5788459.91,
          "target": 0
        },
        "accessories": {
          "actual": 644402.5800000001,
          "target": 0
        },
        "lubricant": {
          "actual": 870287.0800000001,
          "target": 0
        },
        "parts": {
          "actual": 13272023.75,
          "target": 0
        }
      }
    }
  },
  {
    "month": "Mar",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1588
        },
        "labour": {
          "actual": 7132473.23
        },
        "accessories": {
          "actual": 483838.34
        },
        "lubricant": {
          "actual": 1282127.71
        },
        "parts": {
          "actual": 16143266.899999999
        }
      },
      "2025": {
        "throughput": {
          "actual": 1174,
          "target": 0
        },
        "labour": {
          "actual": 5817061.859999999,
          "target": 0
        },
        "accessories": {
          "actual": 489350.52999999997,
          "target": 0
        },
        "lubricant": {
          "actual": 950848.07,
          "target": 0
        },
        "parts": {
          "actual": 13259922.99,
          "target": 0
        }
      }
    }
  },
  {
    "month": "Apr",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1764
        },
        "labour": {
          "actual": 6206423.359999999
        },
        "accessories": {
          "actual": 344989.6
        },
        "lubricant": {
          "actual": 1276314.3900000001
        },
        "parts": {
          "actual": 15495789.32
        }
      },
      "2025": {
        "throughput": {
          "actual": 1298,
          "target": 0
        },
        "labour": {
          "actual": 5565809.98,
          "target": 0
        },
        "accessories": {
          "actual": 615618.6100000001,
          "target": 0
        },
        "lubricant": {
          "actual": 945727.5700000001,
          "target": 0
        },
        "parts": {
          "actual": 14229218.92,
          "target": 0
        }
      }
    }
  },
  {
    "month": "May",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1695
        },
        "labour": {
          "actual": 6031831.95
        },
        "accessories": {
          "actual": 361602.81
        },
        "lubricant": {
          "actual": 1194934.92
        },
        "parts": {
          "actual": 15041899.850000001
        }
      },
      "2025": {
        "throughput": {
          "actual": 1373,
          "target": 0
        },
        "labour": {
          "actual": 5682885.129999999,
          "target": 0
        },
        "accessories": {
          "actual": 708579.85,
          "target": 0
        },
        "lubricant": {
          "actual": 998963.9899999999,
          "target": 0
        },
        "parts": {
          "actual": 16446006.86,
          "target": 0
        }
      }
    }
  },
  {
    "month": "Jun",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1663
        },
        "labour": {
          "actual": 5402257.23
        },
        "accessories": {
          "actual": 405273.26000000007
        },
        "lubricant": {
          "actual": 1072869.9799999997
        },
        "parts": {
          "actual": 13353966.569999997
        }
      },
      "2025": {
        "throughput": {
          "actual": 303,
          "target": 0
        },
        "labour": {
          "actual": 888228.03,
          "target": 0
        },
        "accessories": {
          "actual": 181292.16999999995,
          "target": 0
        },
        "lubricant": {
          "actual": 219706.52,
          "target": 0
        },
        "parts": {
          "actual": 2503827.13,
          "target": 0
        }
      }
    }
  },
  {
    "month": "Jul",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1885
        },
        "labour": {
          "actual": 6817399.130000001
        },
        "accessories": {
          "actual": 439602.92999999993
        },
        "lubricant": {
          "actual": 1368309.3499999999
        },
        "parts": {
          "actual": 15832393.830000002
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 0
        },
        "labour": {
          "actual": 0,
          "target": 0
        },
        "accessories": {
          "actual": 0,
          "target": 0
        },
        "lubricant": {
          "actual": 0,
          "target": 0
        },
        "parts": {
          "actual": 0,
          "target": 0
        }
      }
    }
  },
  {
    "month": "Aug",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1652
        },
        "labour": {
          "actual": 6026374.74
        },
        "accessories": {
          "actual": 321849.04
        },
        "lubricant": {
          "actual": 999999.8699999999
        },
        "parts": {
          "actual": 17327872.849999998
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 0
        },
        "labour": {
          "actual": 0,
          "target": 0
        },
        "accessories": {
          "actual": 0,
          "target": 0
        },
        "lubricant": {
          "actual": 0,
          "target": 0
        },
        "parts": {
          "actual": 0,
          "target": 0
        }
      }
    }
  },
  {
    "month": "Sep",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1595
        },
        "labour": {
          "actual": 5860286.15
        },
        "accessories": {
          "actual": 411469.73000000004
        },
        "lubricant": {
          "actual": 1219999.6800000002
        },
        "parts": {
          "actual": 17889133.15
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 0
        },
        "labour": {
          "actual": 0,
          "target": 0
        },
        "accessories": {
          "actual": 0,
          "target": 0
        },
        "lubricant": {
          "actual": 0,
          "target": 0
        },
        "parts": {
          "actual": 0,
          "target": 0
        }
      }
    }
  },
  {
    "month": "Oct",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1358
        },
        "labour": {
          "actual": 5741198.140000001
        },
        "accessories": {
          "actual": 267003.38999999996
        },
        "lubricant": {
          "actual": 1030428.5199999999
        },
        "parts": {
          "actual": 19724066.400000002
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 0
        },
        "labour": {
          "actual": 0,
          "target": 0
        },
        "accessories": {
          "actual": 0,
          "target": 0
        },
        "lubricant": {
          "actual": 0,
          "target": 0
        },
        "parts": {
          "actual": 0,
          "target": 0
        }
      }
    }
  },
  {
    "month": "Nov",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1424
        },
        "labour": {
          "actual": 7918265.1
        },
        "accessories": {
          "actual": 296888.1
        },
        "lubricant": {
          "actual": 1115833.28
        },
        "parts": {
          "actual": 20005608.27
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 0
        },
        "labour": {
          "actual": 0,
          "target": 0
        },
        "accessories": {
          "actual": 0,
          "target": 0
        },
        "lubricant": {
          "actual": 0,
          "target": 0
        },
        "parts": {
          "actual": 0,
          "target": 0
        }
      }
    }
  },
  {
    "month": "Dec",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1485
        },
        "labour": {
          "actual": 7094024.59
        },
        "accessories": {
          "actual": 293038.20999999996
        },
        "lubricant": {
          "actual": 1152066.21
        },
        "parts": {
          "actual": 16826600.449999996
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 0
        },
        "labour": {
          "actual": 0,
          "target": 0
        },
        "accessories": {
          "actual": 0,
          "target": 0
        },
        "lubricant": {
          "actual": 0,
          "target": 0
        },
        "parts": {
          "actual": 0,
          "target": 0
        }
      }
    }
  }
];

// Colors for the pie chart and potentially for the radial bars
export const REVENUE_PIE_CHART_COLORS = {
  THROUGHPUT: '#fb8500',    // Orange
  LABOUR: '#4361ee',       // Blue
  PARTS: '#f72585',        // Pink
  ACCESSORIES: '#4cc9f0',  // Light Blue
  LUBRICANT: '#2ec4b6',     // Teal
};
