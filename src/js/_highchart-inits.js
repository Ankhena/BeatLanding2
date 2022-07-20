///////////////////
// highchart-inits


if (document.querySelector('#try-why-graph-1')) {
  Highcharts.chart('try-why-graph-1', {
    chart: {
      type: 'spline',
      style: { "fontFamily": "" },
    },
    title: {
      text: ''
    },
    // xAxis: {
    //   categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    //   labels: {
    //     style: {
    //       fontSize: "16px",
    //       color: "#373943"
    //     }
    //   }
    // },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return (this.value / 1000) + 'к';
        },
        style: {
          fontSize: "16px",
          color: "#373943"
        }
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      useHTML: true
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: 'transparent',
          lineWidth: 1
        }
      }
    },
    series: [

      {
        name: 'Портфель СЕО',
        marker: {
          symbol: 'circle'
        },
        data: [1500, 2100, 3500, 5500, 4200, 6500, 7200],
        color: "#3E54D8"
      },
      {
        name: 'S&P 500',
        marker: {
          symbol: 'circle'
        },
        data: [2200, 2300, 5200, 3700, 4000, 7800, 3800],
        color: "#DE4355"
      },

    ]
  });

}

/////////////////////////////

if (document.querySelector('#try-why-graph-2')) {
  Highcharts.chart('try-why-graph-2', {
    chart: {
      type: 'spline',
      style: { "fontFamily": "" },
    },
    title: {
      text: ''
    },
    // xAxis: {
    //   categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    //   labels: {
    //     style: {
    //       fontSize: "16px",
    //       color: "#373943"
    //     }
    //   }
    // },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return (this.value / 1000) + 'к';
        },
        style: {
          fontSize: "16px",
          color: "#373943"
        }
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      useHTML: true
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: 'transparent',
          lineWidth: 1
        }
      }
    },
    series: [

      {
        name: 'С подпиской',
        marker: {
          symbol: 'circle'
        },
        data: [1500, 2100, 3500, 5500, 4200, 6500, 7200],
        color: "#3E54D8"
      },
      {
        name: 'Без подписки',
        marker: {
          symbol: 'circle'
        },
        data: [2200, 2300, 5200, 3700, 4000, 7800, 3800],
        color: "#DE4355"
      },

    ]
  });

}

/////////////////////////

if (document.querySelector('#try-why-graph-3')) {
  Highcharts.chart('try-why-graph-3', {
    chart: {
      type: 'spline',
      style: { "fontFamily": "" },
    },
    title: {
      text: ''
    },
    // xAxis: {
    //   categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    //   labels: {
    //     style: {
    //       fontSize: "16px",
    //       color: "#373943"
    //     }
    //   }
    // },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return (this.value / 1000) + 'к';
        },
        style: {
          fontSize: "16px",
          color: "#373943"
        }
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      useHTML: true
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: 'transparent',
          lineWidth: 1
        }
      }
    },
    series: [

      {
        name: 'BM scoring 90+',
        marker: {
          symbol: 'circle'
        },
        data: [1500, 2100, 3500, 5500, 4200, 6500, 7200],
        color: "#3E54D8"
      },
      {
        name: 'BM scoring 30-',
        marker: {
          symbol: 'circle'
        },
        data: [2200, 2300, 5200, 3700, 4000, 7800, 3800],
        color: "#DE4355"
      },

    ]
  });

}

//////////////////////////

if (document.querySelector('#try-why-graph-4')) {
  Highcharts.chart('try-why-graph-4', {
    chart: {
      type: 'spline',
      style: { "fontFamily": "" },
    },
    title: {
      text: ''
    },
    // xAxis: {
    //   categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    //   labels: {
    //     style: {
    //       fontSize: "16px",
    //       color: "#373943"
    //     }
    //   }
    // },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return (this.value / 1000) + 'к';
        },
        style: {
          fontSize: "16px",
          color: "#373943"
        }
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      useHTML: true
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: 'transparent',
          lineWidth: 1
        }
      }
    },
    series: [

      {
        name: 'BM Advisor ',
        marker: {
          symbol: 'circle'
        },
        data: [1500, 2100, 3500, 5500, 4200, 6500, 7200],
        color: "#3E54D8"
      },
      {
        name: 'Пользователь без подписки',
        marker: {
          symbol: 'circle'
        },
        data: [2200, 2300, 5200, 3700, 4000, 7800, 3800],
        color: "#DE4355"
      },

    ]
  });

}





// end highchart-inits
////////////////////
