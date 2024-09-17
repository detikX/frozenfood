// const colors = Highcharts.getOptions().colors.map((c, i) =>
//     // Start out with a darkened base color (negative brighten), and end
//     // up with a much brighter color
//     Highcharts.color(Highcharts.getOptions().colors[0])
//         .brighten((i - 3) / 7)
//         .get()
// );
Highcharts.chart('container', {
    chart: {
        type: 'pie',
        backgroundColor: 'transparent'
    },
    title: {
        text: 'Memandang Produk Beku Higienis',
        style: {
            // color: "#fafafa",
            // font: ' sans-serif'
            font: 'bold 24px "Mulish", sans-serif',
        }
    },
    credits: {
        enabled: false
    },
    tooltip: {
        valueSuffix: '%',
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Mulish',
            fontSize: '13px'
        }
    },
    subtitle: {
        text:
            'Sumber: Jurnal Tata Boga, Faktor Penentu Pemilihan Produk Pangan Beku Gen Y dan Z Masa Pandemi COVID-19',
        style: {
            color: "#232323",
            // font: ' sans-serif'
            font: 'normal 11px "Mulish", sans-serif',
        }
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                // format: '{point.y}',

                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                },
                style: {
                    color: "#fff",
                    borderColor: '#222',
                    font: '1.3rem "Mulish", sans-serif',
                    fontWeight: 'bold',
                    textOutline: 'none'
                    // lineHeight: '2rem'
                },
            }]
        },
        pie: {
            borderColor: 'transparent',
            // colors,
            dataLabels: {
                style: {
                    color: "black",//color nama
                    borderColor: '#252525',
                    font: 'normal 1rem "Mulish", sans-serif',
                    fontWeight: 'normal',
                    textOutline: false
                    // lineHeight: '2rem'
                },
            }
        }
    },
    series: [
        {
            name: 'Peresentase',
            // colorByPoint: true,

            data: [{
                name: 'Kebutuhan kemasan',
                y: 31.7
            }, {
                name: 'Kebersihan penyimpanan',
                y: 23.9
            }, {
                name: 'Kebersihan staff penjamah produk',
                y: 23.4
            }, {
                name: 'Kebersihan tempat pengolahan produk marketing',
                y: 21
            }]

        }
    ]
});
