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
          "actual": 1520,
          "target": 1350
        },
        "labour": {
          "actual": 6370545.4,
          "target": 2970000
        },
        "accessories": {
          "actual": 338455.76,
          "target": 337500
        },
        "lubricant": {
          "actual": 1108463.51,
          "target": 1080000
        },
        "parts": {
          "actual": 16667379.469999999,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1280,
          "target": 1111.575
        },
        "labour": {
          "actual": 6049615.77,
          "target": 4779770
        },
        "accessories": {
          "actual": 778562.61,
          "target": 1111575
        },
        "lubricant": {
          "actual": 981165.62,
          "target": 1000417
        },
        "parts": {
          "actual": 12185462.34,
          "target": 8281230
        }
      }
    }
  },
  {
    "month": "Feb",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1497,
          "target": 1350
        },
        "labour": {
          "actual": 6525933.63,
          "target": 2970000
        },
        "accessories": {
          "actual": 422319.08,
          "target": 337500
        },
        "lubricant": {
          "actual": 1216253.31,
          "target": 1080000
        },
        "parts": {
          "actual": 16252813.48,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1284,
          "target": 1111.575
        },
        "labour": {
          "actual": 5788459.91,
          "target": 4779770
        },
        "accessories": {
          "actual": 644402.5800000001,
          "target": 1111575
        },
        "lubricant": {
          "actual": 870287.0800000001,
          "target": 1000417
        },
        "parts": {
          "actual": 13272023.75,
          "target": 8281230
        }
      }
    }
  },
  {
    "month": "Mar",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1588,
          "target": 1350
        },
        "labour": {
          "actual": 7132473.23,
          "target": 2970000
        },
        "accessories": {
          "actual": 483838.34,
          "target": 337500
        },
        "lubricant": {
          "actual": 1282127.71,
          "target": 1080000
        },
        "parts": {
          "actual": 16143266.899999999,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1174,
          "target": 1187.748
        },
        "labour": {
          "actual": 5817061.859999999,
          "target": 5107318
        },
        "accessories": {
          "actual": 489350.52999999997,
          "target": 1187748
        },
        "lubricant": {
          "actual": 950848.07,
          "target": 1068974
        },
        "parts": {
          "actual": 13259922.99,
          "target": 8848726
        }
      }
    }
  },
  {
    "month": "Apr",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1764,
          "target": 1350
        },
        "labour": {
          "actual": 6206423.359999999,
          "target": 2970000
        },
        "accessories": {
          "actual": 344989.6,
          "target": 337500
        },
        "lubricant": {
          "actual": 1276314.3900000001,
          "target": 1080000
        },
        "parts": {
          "actual": 15495789.32,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1298,
          "target": 1254.518
        },
        "labour": {
          "actual": 5565809.98,
          "target": 5394428
        },
        "accessories": {
          "actual": 615618.6100000001,
          "target": 1254518
        },
        "lubricant": {
          "actual": 945727.5700000001,
          "target": 1129066
        },
        "parts": {
          "actual": 14229218.92,
          "target": 9346160
        }
      }
    }
  },
  {
    "month": "May",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1695,
          "target": 1350
        },
        "labour": {
          "actual": 6031831.95,
          "target": 2970000
        },
        "accessories": {
          "actual": 361602.81,
          "target": 337500
        },
        "lubricant": {
          "actual": 1194934.92,
          "target": 1080000
        },
        "parts": {
          "actual": 15041899.850000001,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1373,
          "target": 1236.65
        },
        "labour": {
          "actual": 5682885.129999999,
          "target": 5317595
        },
        "accessories": {
          "actual": 708579.85,
          "target": 1236650
        },
        "lubricant": {
          "actual": 998963.9899999999,
          "target": 1112895
        },
        "parts": {
          "actual": 16446006.86,
          "target": 9213044
        }
      }
    }
  },
  {
    "month": "Jun",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1663,
          "target": 1350
        },
        "labour": {
          "actual": 5402257.23,
          "target": 2970000
        },
        "accessories": {
          "actual": 405273.26000000007,
          "target": 337500
        },
        "lubricant": {
          "actual": 1072869.9799999997,
          "target": 1080000
        },
        "parts": {
          "actual": 13353966.569999997,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 346,
          "target": 1284.612
        },
        "labour": {
          "actual": 1096784.4100000001,
          "target": 5523829
        },
        "accessories": {
          "actual": 191397.63999999998,
          "target": 1284612
        },
        "lubricant": {
          "actual": 255463.05,
          "target": 1156150
        },
        "parts": {
          "actual": 2914688.66,
          "target": 9570356
        }
      }
    }
  },
  {
    "month": "Jul",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1885,
          "target": 1350
        },
        "labour": {
          "actual": 6817399.130000001,
          "target": 2970000
        },
        "accessories": {
          "actual": 439602.92999999993,
          "target": 337500
        },
        "lubricant": {
          "actual": 1368309.3499999999,
          "target": 1080000
        },
        "parts": {
          "actual": 15832393.830000002,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 1439.781
        },
        "labour": {
          "actual": 0,
          "target": 6191056
        },
        "accessories": {
          "actual": 0,
          "target": 1439781
        },
        "lubricant": {
          "actual": 0,
          "target": 1295802
        },
        "parts": {
          "actual": 0,
          "target": 10726365
        }
      }
    }
  },
  {
    "month": "Aug",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1652,
          "target": 1350
        },
        "labour": {
          "actual": 6026374.74,
          "target": 2970000
        },
        "accessories": {
          "actual": 321849.04,
          "target": 337500
        },
        "lubricant": {
          "actual": 999999.8699999999,
          "target": 1080000
        },
        "parts": {
          "actual": 17327872.849999998,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 1383.355
        },
        "labour": {
          "actual": 0,
          "target": 5948489
        },
        "accessories": {
          "actual": 0,
          "target": 1383355
        },
        "lubricant": {
          "actual": 0,
          "target": 1245020
        },
        "parts": {
          "actual": 0,
          "target": 10305998
        }
      }
    }
  },
  {
    "month": "Sep",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1595,
          "target": 1350
        },
        "labour": {
          "actual": 5860286.15,
          "target": 2970000
        },
        "accessories": {
          "actual": 411469.73000000004,
          "target": 337500
        },
        "lubricant": {
          "actual": 1219999.6800000002,
          "target": 1080000
        },
        "parts": {
          "actual": 17889133.15,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 1355.143
        },
        "labour": {
          "actual": 0,
          "target": 5827115
        },
        "accessories": {
          "actual": 0,
          "target": 1355143
        },
        "lubricant": {
          "actual": 0,
          "target": 1219629
        },
        "parts": {
          "actual": 0,
          "target": 10095815
        }
      }
    }
  },
  {
    "month": "Oct",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1358,
          "target": 1350
        },
        "labour": {
          "actual": 5741198.140000001,
          "target": 2970000
        },
        "accessories": {
          "actual": 267003.39,
          "target": 337500
        },
        "lubricant": {
          "actual": 1030428.5199999999,
          "target": 1080000
        },
        "parts": {
          "actual": 19724066.400000002,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 1567.677
        },
        "labour": {
          "actual": 0,
          "target": 6739213
        },
        "accessories": {
          "actual": 0,
          "target": 1567677
        },
        "lubricant": {
          "actual": 0,
          "target": 1410910
        },
        "parts": {
          "actual": 0,
          "target": 11671997
        }
      }
    }
  },
  {
    "month": "Nov",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1424,
          "target": 1350
        },
        "labour": {
          "actual": 7918265.1,
          "target": 2970000
        },
        "accessories": {
          "actual": 296888.1,
          "target": 337500
        },
        "lubricant": {
          "actual": 1115833.28,
          "target": 1080000
        },
        "parts": {
          "actual": 20005608.270000003,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 1346.679
        },
        "labour": {
          "actual": 0,
          "target": 5790720
        },
        "accessories": {
          "actual": 0,
          "target": 1346679
        },
        "lubricant": {
          "actual": 0,
          "target": 1212011
        },
        "parts": {
          "actual": 0,
          "target": 10032760
        }
      }
    }
  },
  {
    "month": "Dec",
    "data": {
      "2024": {
        "throughput": {
          "actual": 1485,
          "target": 1350
        },
        "labour": {
          "actual": 7094024.59,
          "target": 2970000
        },
        "accessories": {
          "actual": 293038.20999999996,
          "target": 337500
        },
        "lubricant": {
          "actual": 1152066.21,
          "target": 1080000
        },
        "parts": {
          "actual": 16826600.449999996,
          "target": 7425000
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 1293.075
        },
        "labour": {
          "actual": 0,
          "target": 5560224
        },
        "accessories": {
          "actual": 0,
          "target": 1293075
        },
        "lubricant": {
          "actual": 0,
          "target": 1163678
        },
        "parts": {
          "actual": 0,
          "target": 9633411
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
