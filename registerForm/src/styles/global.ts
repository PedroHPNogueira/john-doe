import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");


    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video ,input , button{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: 400;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        border: none;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    :root {
        --color-primary: #5357B1;
        --black: #000;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #8C98A9;
        --grey-0: #F0F2F6;
        --white: #fff;
        --secess: #3fe864;
        --fail: #e83f5b;
    }
`
