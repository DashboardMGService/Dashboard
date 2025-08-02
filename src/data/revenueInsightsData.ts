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
          "target": 1535
        },
        "labour": {
          "actual": 6370545.399999999,
          "target": 5853000
        },
        "accessories": {
          "actual": 360638.82000000007,
          "target": 370500
        },
        "lubricant": {
          "actual": 1108463.51,
          "target": 1172500
        },
        "parts": {
          "actual": 16645196.41,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1280,
          "target": 1316.574537
        },
        "labour": {
          "actual": 6049615.77,
          "target": 8777270.509
        },
        "accessories": {
          "actual": 807392.85,
          "target": 1296074.537
        },
        "lubricant": {
          "actual": 981165.62,
          "target": 1051667.083
        },
        "parts": {
          "actual": 12156632.1,
          "target": 15353730.3
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
          "target": 1535
        },
        "labour": {
          "actual": 6525933.63,
          "target": 5853000
        },
        "accessories": {
          "actual": 502554.98000000004,
          "target": 370500
        },
        "lubricant": {
          "actual": 1216253.3100000003,
          "target": 1172500
        },
        "parts": {
          "actual": 16172577.580000002,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1284,
          "target": 1384.748427
        },
        "labour": {
          "actual": 5788459.91,
          "target": 8948818.234000001
        },
        "accessories": {
          "actual": 644402.5800000001,
          "target": 1365048.427
        },
        "lubricant": {
          "actual": 870287.0800000001,
          "target": 1118223.584
        },
        "parts": {
          "actual": 13272023.750000002,
          "target": 15645225.778
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
          "target": 1535
        },
        "labour": {
          "actual": 7132473.23,
          "target": 5853000
        },
        "accessories": {
          "actual": 549509.3,
          "target": 370500
        },
        "lubricant": {
          "actual": 1282127.7100000002,
          "target": 1172500
        },
        "parts": {
          "actual": 16077595.939999996,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1174,
          "target": 1399.186417
        },
        "labour": {
          "actual": 5817061.859999999,
          "target": 9070701.594999999
        },
        "accessories": {
          "actual": 508570.6899999999,
          "target": 1277436.417
        },
        "lubricant": {
          "actual": 950848.0700000002,
          "target": 1148117.776
        },
        "parts": {
          "actual": 13240702.830000002,
          "target": 15049488.809
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
          "target": 1535
        },
        "labour": {
          "actual": 6206423.359999999,
          "target": 5853000
        },
        "accessories": {
          "actual": 393043.67,
          "target": 370500
        },
        "lubricant": {
          "actual": 1276314.39,
          "target": 1172500
        },
        "parts": {
          "actual": 15447735.250000002,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1298,
          "target": 1468.518132
        },
        "labour": {
          "actual": 5564809.98,
          "target": 9567427.968
        },
        "accessories": {
          "actual": 630033.73,
          "target": 1447118.132
        },
        "lubricant": {
          "actual": 945727.57,
          "target": 1182566.319
        },
        "parts": {
          "actual": 14214803.8,
          "target": 16729160.085
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
          "target": 1535
        },
        "labour": {
          "actual": 6031831.95,
          "target": 5853000
        },
        "accessories": {
          "actual": 402372.19000000006,
          "target": 370500
        },
        "lubricant": {
          "actual": 1194934.92,
          "target": 1172500
        },
        "parts": {
          "actual": 15001130.469999999,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1366,
          "target": 1448.650183
        },
        "labour": {
          "actual": 5608926.629999999,
          "target": 9451595.786
        },
        "accessories": {
          "actual": 714666.7999999999,
          "target": 1427450.183
        },
        "lubricant": {
          "actual": 980452.0700000001,
          "target": 1165985.165
        },
        "parts": {
          "actual": 16060227.93,
          "target": 16527043.862
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
          "target": 1535
        },
        "labour": {
          "actual": 5402257.2299999995,
          "target": 5853000
        },
        "accessories": {
          "actual": 466468.99,
          "target": 370500
        },
        "lubricant": {
          "actual": 1072869.98,
          "target": 1172500
        },
        "parts": {
          "actual": 13292770.84,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1386,
          "target": 1538.611521
        },
        "labour": {
          "actual": 5502706.16,
          "target": 10476829.539
        },
        "accessories": {
          "actual": 667258.5700000001,
          "target": 1513211.521
        },
        "lubricant": {
          "actual": 905517.2999999999,
          "target": 1219650.369
        },
        "parts": {
          "actual": 14235486.329999998,
          "target": 18333355.829
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
          "target": 1535
        },
        "labour": {
          "actual": 6817399.130000001,
          "target": 5853000
        },
        "accessories": {
          "actual": 532094.0,
          "target": 370500
        },
        "lubricant": {
          "actual": 1368309.3499999999,
          "target": 1172500
        },
        "parts": {
          "actual": 15739902.760000002,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 1316,
          "target": 1708.780555
        },
        "labour": {
          "actual": 5898249.18,
          "target": 11436556.387
        },
        "accessories": {
          "actual": 1043957.0600000002,
          "target": 1681880.555
        },
        "lubricant": {
          "actual": 863300.08,
          "target": 1363052.5
        },
        "parts": {
          "actual": 14876903.120000001,
          "target": 20006865.14
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
          "target": 1535
        },
        "labour": {
          "actual": 6026374.74,
          "target": 5853000
        },
        "accessories": {
          "actual": 384310.30999999994,
          "target": 370500
        },
        "lubricant": {
          "actual": 999999.87,
          "target": 1172500
        },
        "parts": {
          "actual": 17265411.58,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 42,
          "target": 1647.355452
        },
        "labour": {
          "actual": 137997.5,
          "target": 11096428.442
        },
        "accessories": {
          "actual": 8867.61,
          "target": 1620955.452
        },
        "lubricant": {
          "actual": 28619.61,
          "target": 1311019.906
        },
        "parts": {
          "actual": 266958.26,
          "target": 19413998.11
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
          "target": 1535
        },
        "labour": {
          "actual": 5860286.15,
          "target": 5853000
        },
        "accessories": {
          "actual": 477713.80999999994,
          "target": 370500
        },
        "lubricant": {
          "actual": 1219999.6800000002,
          "target": 1172500
        },
        "parts": {
          "actual": 17822889.069999997,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 1622.1429
        },
        "labour": {
          "actual": 0,
          "target": 11033614.469999999
        },
        "accessories": {
          "actual": 0,
          "target": 1595442.9
        },
        "lubricant": {
          "actual": 0,
          "target": 1286378.61
        },
        "parts": {
          "actual": 0,
          "target": 19307314.6
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
          "target": 1535
        },
        "labour": {
          "actual": 5741198.14,
          "target": 5853000
        },
        "accessories": {
          "actual": 337413.13000000006,
          "target": 370500
        },
        "lubricant": {
          "actual": 1030428.52,
          "target": 1172500
        },
        "parts": {
          "actual": 19653656.660000004,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 1830.677456
        },
        "labour": {
          "actual": 0,
          "target": 11869513.061
        },
        "accessories": {
          "actual": 0,
          "target": 1804377.456
        },
        "lubricant": {
          "actual": 0,
          "target": 1476659.71
        },
        "parts": {
          "actual": 0,
          "target": 20752697.05
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
          "target": 1535
        },
        "labour": {
          "actual": 7918265.1,
          "target": 5853000
        },
        "accessories": {
          "actual": 329692.69,
          "target": 370500
        },
        "lubricant": {
          "actual": 1115833.28,
          "target": 1172500
        },
        "parts": {
          "actual": 19972803.679999996,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 1599.679134
        },
        "labour": {
          "actual": 0,
          "target": 10724220.277999999
        },
        "accessories": {
          "actual": 0,
          "target": 1574379.134
        },
        "lubricant": {
          "actual": 0,
          "target": 1275261.221
        },
        "parts": {
          "actual": 0,
          "target": 18761259.55
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
          "target": 1535
        },
        "labour": {
          "actual": 7094024.59,
          "target": 5853000
        },
        "accessories": {
          "actual": 342969.95999999996,
          "target": 370500
        },
        "lubricant": {
          "actual": 1152066.2099999997,
          "target": 1172500
        },
        "parts": {
          "actual": 16776668.7,
          "target": 13530000
        }
      },
      "2025": {
        "throughput": {
          "actual": 0,
          "target": 1549.075286
        },
        "labour": {
          "actual": 0,
          "target": 10552223.73
        },
        "accessories": {
          "actual": 0,
          "target": 1523475.286
        },
        "lubricant": {
          "actual": 0,
          "target": 1227767.758
        },
        "parts": {
          "actual": 0,
          "target": 18465410.882
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
