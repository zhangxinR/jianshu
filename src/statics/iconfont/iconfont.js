import { injectGlobal } from 'styled-components'

injectGlobal`
    @font-face {font-family: "iconfont";
      src: url('./iconfont.eot?t=1536132013474'); /* IE9*/
      src: url('./iconfont.eot?t=1536132013474#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
      url('./iconfont.ttf?t=1536132013474') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('./iconfont.svg?t=1536132013474#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .icon-Aa:before { content: "\e636"; }

    .icon-xuanzhuan-:before { content: "\e604"; }

    .icon-fangdajing:before { content: "\e66e"; }

    .icon-iconfont_bi:before { content: "\e603"; }
`
