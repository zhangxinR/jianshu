import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1535971086571'); /* IE9*/
    src: url('./iconfont.eot?t=1535971086571#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAW8AAsAAAAACCAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8eUhkY21hcAAAAYAAAABdAAABnLPpHBxnbHlmAAAB4AAAAcwAAAHct/AMvGhlYWQAAAOsAAAAMQAAADYSgqQeaGhlYQAAA+AAAAAgAAAAJAfbA4VobXR4AAAEAAAAABAAAAAQEAD//WxvY2EAAAQQAAAACgAAAAoBOACwbWF4cAAABBwAAAAfAAAAIAETAEluYW1lAAAEPAAAAUUAAAJtPlT+fXBvc3QAAAWEAAAANgAAAEe0QAx0eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMT/LY27438AQw9zC0AAUZgTJAQDlugxYeJztkEEOgDAIBIdSTWN8ikfTB3ny1GfzjUqpBx/hkiGw2XAAWAB1DieD3AhDl7sSvrKFn6m+F68Eplat9f6dQhKJEldlJGXl1x79fDcdX5vEXCfj39YmpAcJRBPGAAAAeJw1kM9r1FAQx2feS95zd5t0zWYTt+6uTbKbWKTZsD+SUm2iEEEQRCloRWpBULCiF0UEKyquJ70UFSr2Yk969R9wFbxW6EHqpeBR0H9A2LdmBS/fYYbPd/jOgAQwGtEBBeAwCQ1oAViOZ3EHOyXqeg7jVA477Ro6PYc5ttvrJth1bG6qWNaNTjtcQDK4dkrsnryKk1fSGzIjMl/F3SC+PYfWCT9avXx8vrVyuDY91Qx2diiIGUyKrlMSn+TqnS+tMJg5r06cbi7J1Uq52m7WAUAeDUeP6R/aBwUqWaYAjgE0Y/QJ44yYhhSZrOG5WhRKpkG4G+MhNFS0PWwbOuOWj92wY+rMdr39cTYrU2Uxjt7sfV9co/ce4pn+7Ia4/+I5X9/Ap1l5r+QbylYOS1M5sadqmiq2FE1TvmoHNcRMrp/79uNtMnf2kfjw5MG+u/4ztv4a+//8Ym1TdXLKu3yllCdH/hu2x0tweaww/u+AfqYpTEARypDdhz56LuPII4xRNtHjCZpZ60UxmnWkH2n9gLtkDV8d/U1u6pr4mYqL6QWjkBbIcpwuKLaqS2S7FhQrhenhy1/z5JbeS8fM5qV8xqwkGSPllNm/7GhoInicY2BkYGAA4lyVIu94fpuvDNwsDCBwfbMBH4z+//d/IwsDcwuQy8HABBIFABhHCqAAAAB4nGNgZGBgbvjfwBDDwvD/LwMDCwMDUAQFsAAAda0EaQQAAAAEAAAABAD//QQAAAAAAAAAAEoAsADuAAB4nGNgZGBgYGGwZWBlAAEmIOYCQgaG/2A+AwAPHgFdAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgIWRiZGZkYWRlYHJMZErLTEvPSUxKzMvnTszOT8vLT+vJD4pk4EBAIubCW8AAA==') format('woff'),
    url('./iconfont.ttf?t=1535971086571') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1535971086571#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

