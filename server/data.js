const data = {
    revenue: [
      {
        siteId: 'S1001',
        siteName: 'WH',
        description: 'WH Site',
        amount: 200000,
      },
      {
        siteId: 'S1002',
        siteName: 'NYC',
        description: 'NYC Site',
        amount: 1000000,
      },
      {
        siteId: 'S1003',
        siteName: 'MC',
        description: 'MC Site',
        amount: 500000,
      },
    ],
    expense: [
      {
        siteId: 'S1001',
        siteName: 'WH',
        description: 'WH Site',
        amount: 200000,
      },
      {
        siteId: 'S1002',
        siteName: 'NYC',
        description: 'NYC Site',
        amount: 1000000,
      },
      {
        siteId: 'S1003',
        siteName: 'MC',
        description: 'MC Site',
        amount: 500000,
      },
    ],
    overalls: [
      {
        siteId: 'S1003',
        totalExpenses: 300000,
        totalRevenue: 2000000,
        monthlyData: [
          {
            month: 'March',
            totalExpenses: 30000,
            totalRevenue: 200000,
          },
          {
            month: 'April',
            totalExpenses: 30000,
            totalRevenue: 200000,
          },
          {
            month: 'May',
            totalExpenses: 30000,
            totalRevenue: 200000,
          },
        ],
        dailyData: [
          {
            date: 'Monday',
            totalExpenses: 3000,
            totalRevenue: 2000,
          },
          {
            date: 'Tuesday',
            totalExpenses: 4000,
            totalRevenue: 5000,
          },
          {
            date: 'Wednesday',
            totalExpenses: 6000,
            totalRevenue: 9000,
          },
        ],
      },
    ],
  };
  
  export default data;