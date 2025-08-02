export interface MonthlyComparisonData {
  month: string;
  mechRo: { '2024': number; '2025': number; target: number };
  bpRo: { '2024': number; '2025': number; target: number };
  accessoriesRo: { '2024': number; '2025': number; target: number };
  partsRevenue: { '2024': number; '2025': number; target: number };
  labourRevenue: { '2024': number; '2025': number; target: number };
}

const raw2025Data: Array<any> = [
{
      "month": "Apr",
      "mechRo": {
        "total": 1123
      },
      "bpRo": {
        "total": 175
      },
      "mechParts": 7995321.0600000005,
      "bpParts": 6219482.74,
      "mechLaborRevenue": 2877102.25,
      "bpLaborRevenue": 2687707.73,
      "mechAccessories": 584114.96,
      "bpAccessories": 45918.770000000004
    },
    {
      "month": "Aug",
      "mechRo": {
        "total": 39
      },
      "bpRo": {
        "total": 3
      },
      "mechParts": 179668.30000000002,
      "bpParts": 87289.96,
      "mechLaborRevenue": 108997.5,
      "bpLaborRevenue": 29000.0,
      "mechAccessories": 8867.61,
      "bpAccessories": 0.0
    },
    {
      "month": "Feb",
      "mechRo": {
        "total": 1124
      },
      "bpRo": {
        "total": 160
      },
      "mechParts": 6841547.65,
      "bpParts": 6430476.1000000015,
      "mechLaborRevenue": 3054913.0,
      "bpLaborRevenue": 2733546.91,
      "mechAccessories": 631010.05,
      "bpAccessories": 13392.529999999999
    },
    {
      "month": "Jan",
      "mechRo": {
        "total": 1134
      },
      "bpRo": {
        "total": 146
      },
      "mechParts": 8074123.49,
      "bpParts": 4082508.61,
      "mechLaborRevenue": 3088027.8099999996,
      "bpLaborRevenue": 2961587.96,
      "mechAccessories": 790789.34,
      "bpAccessories": 16603.51
    },
    {
      "month": "Jul",
      "mechRo": {
        "total": 1141
      },
      "bpRo": {
        "total": 175
      },
      "mechParts": 7289609.430000002,
      "bpParts": 7587293.6899999995,
      "mechLaborRevenue": 3007312.82,
      "bpLaborRevenue": 2890936.3600000003,
      "mechAccessories": 1016640.1400000001,
      "bpAccessories": 27316.92
    },
    {
      "month": "Jun",
      "mechRo": {
        "total": 1235
      },
      "bpRo": {
        "total": 151
      },
      "mechParts": 8525314.02,
      "bpParts": 5710172.31,
      "mechLaborRevenue": 3042200.79,
      "bpLaborRevenue": 2460505.37,
      "mechAccessories": 651640.5700000001,
      "bpAccessories": 15618.000000000002
    },
    {
      "month": "Mar",
      "mechRo": {
        "total": 1020
      },
      "bpRo": {
        "total": 154
      },
      "mechParts": 7850318.7700000005,
      "bpParts": 5390384.0600000005,
      "mechLaborRevenue": 3172735.37,
      "bpLaborRevenue": 2644326.4899999998,
      "mechAccessories": 483190.8299999999,
      "bpAccessories": 25379.86
    },
    {
      "month": "May",
      "mechRo": {
        "total": 1197
      },
      "bpRo": {
        "total": 169
      },
      "mechParts": 8153780.380000001,
      "bpParts": 7906447.55,
      "mechLaborRevenue": 3009007.2699999996,
      "bpLaborRevenue": 2599919.36,
      "mechAccessories": 708446.09,
      "bpAccessories": 6220.710000000001
    }
];

const raw2024Data: Array<any> = [
    {
      "month": "Apr",
      "mechRo": {
        "total": 1529
      },
      "bpRo": {
        "total": 235
      },
      "mechParts": 9128074.96,
      "bpParts": 6319660.290000001,
      "mechLaborRevenue": 3042362.7199999997,
      "bpLaborRevenue": 3164060.6399999997,
      "mechAccessories": 353948.45999999996,
      "bpAccessories": 39095.21000000001
    },
    {
      "month": "Aug",
      "mechRo": {
        "total": 1431
      },
      "bpRo": {
        "total": 221
      },
      "mechParts": 9022093.149999999,
      "bpParts": 8243318.430000001,
      "mechLaborRevenue": 2767793.54,
      "bpLaborRevenue": 3258581.2,
      "mechAccessories": 370856.33999999997,
      "bpAccessories": 13453.970000000001
    },
    {
      "month": "Dec",
      "mechRo": {
        "total": 1301
      },
      "bpRo": {
        "total": 184
      },
      "mechParts": 9057009.92,
      "bpParts": 7719658.779999999,
      "mechLaborRevenue": 3934073.8899999997,
      "bpLaborRevenue": 3159950.6999999997,
      "mechAccessories": 304058.82999999996,
      "bpAccessories": 38911.13
    },
    {
      "month": "Feb",
      "mechRo": {
        "total": 1313
      },
      "bpRo": {
        "total": 184
      },
      "mechParts": 10536099.270000003,
      "bpParts": 5636478.31,
      "mechLaborRevenue": 3517083.09,
      "bpLaborRevenue": 3008850.54,
      "mechAccessories": 452058.91000000003,
      "bpAccessories": 50496.07
    },
    {
      "month": "Jan",
      "mechRo": {
        "total": 1332
      },
      "bpRo": {
        "total": 188
      },
      "mechParts": 9199120.52,
      "bpParts": 7446075.890000001,
      "mechLaborRevenue": 3257269.01,
      "bpLaborRevenue": 3113276.3899999997,
      "mechAccessories": 327749.93000000005,
      "bpAccessories": 32888.89
    },
    {
      "month": "Jul",
      "mechRo": {
        "total": 1654
      },
      "bpRo": {
        "total": 231
      },
      "mechParts": 9268729.05,
      "bpParts": 6471173.71,
      "mechLaborRevenue": 3343117.2800000003,
      "bpLaborRevenue": 3474281.85,
      "mechAccessories": 484346.58999999997,
      "bpAccessories": 47747.41
    },
    {
      "month": "Jun",
      "mechRo": {
        "total": 1432
      },
      "bpRo": {
        "total": 231
      },
      "mechParts": 8208122.95,
      "bpParts": 5084647.890000001,
      "mechLaborRevenue": 2347254.9699999997,
      "bpLaborRevenue": 3055002.26,
      "mechAccessories": 429103.14999999997,
      "bpAccessories": 37365.84
    },
    {
      "month": "Mar",
      "mechRo": {
        "total": 1365
      },
      "bpRo": {
        "total": 223
      },
      "mechParts": 10362380.179999996,
      "bpParts": 5715215.76,
      "mechLaborRevenue": 3506224.06,
      "bpLaborRevenue": 3626249.17,
      "mechAccessories": 514682.1700000001,
      "bpAccessories": 34827.13
    },
    {
      "month": "May",
      "mechRo": {
        "total": 1463
      },
      "bpRo": {
        "total": 232
      },
      "mechParts": 9073501.269999998,
      "bpParts": 5927629.2,
      "mechLaborRevenue": 2812102.37,
      "bpLaborRevenue": 3219729.58,
      "mechAccessories": 364667.32000000007,
      "bpAccessories": 37704.87
    },
    {
      "month": "Nov",
      "mechRo": {
        "total": 1252
      },
      "bpRo": {
        "total": 172
      },
      "mechParts": 8500568.239999998,
      "bpParts": 11472235.439999998,
      "mechLaborRevenue": 3538918.42,
      "bpLaborRevenue": 4379346.68,
      "mechAccessories": 310310.43,
      "bpAccessories": 19382.260000000002
    },
    {
      "month": "Oct",
      "mechRo": {
        "total": 1179
      },
      "bpRo": {
        "total": 179
      },
      "mechParts": 9284678.290000003,
      "bpParts": 10368978.370000003,
      "mechLaborRevenue": 2706922.04,
      "bpLaborRevenue": 3034276.0999999996,
      "mechAccessories": 315417.68000000005,
      "bpAccessories": 21995.449999999997
    },
    {
      "month": "Sep",
      "mechRo": {
        "total": 1370
      },
      "bpRo": {
        "total": 225
      },
      "mechParts": 8893134.139999999,
      "bpParts": 8929754.929999998,
      "mechLaborRevenue": 2833545.4,
      "bpLaborRevenue": 3026740.75,
      "mechAccessories": 440819.31999999995,
      "bpAccessories": 36894.490000000005
    }
];

const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const yearOnYearComparisonData: MonthlyComparisonData[] = monthOrder.map(monthName => {
  const data2024 = raw2024Data.find(d => d.month === monthName) || {};
  const data2025 = raw2025Data.find(d => d.month === monthName) || {};

  return {
    month: monthName,
    mechRo: {
      '2024': data2024.mechRo?.total || 0,
      '2025': data2025.mechRo?.total || 0,
      target: 0
    },
    bpRo: {
      '2024': data2024.bpRo?.total || 0,
      '2025': data2025.bpRo?.total || 0,
      target: 0
    },
    accessoriesRo: {
      '2024': (data2024.mechAccessories || 0) + (data2024.bpAccessories || 0),
      '2025': (data2025.mechAccessories || 0) + (data2025.bpAccessories || 0),
      target: 0
    },
    partsRevenue: {
      '2024': (data2024.mechParts || 0) + (data2024.bpParts || 0),
      '2025': (data2025.mechParts || 0) + (data2025.bpParts || 0),
      target: 0
    },
    labourRevenue: {
      '2024': (data2024.mechLaborRevenue || 0) + (data2024.bpLaborRevenue || 0),
      '2025': (data2025.mechLaborRevenue || 0) + (data2025.bpLaborRevenue || 0),
      target: 0
    }
  };
});
