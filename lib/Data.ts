const Data = {
    align: [
        {
            in: `ali-c:|ali-c +:`,
            out: `align-content:`
        },
        {
            in: `ali-i:|ali-i +:`,
            out: `align-items:`
        },
        {
            in: `ali-s:|ali-s +:`,
            out: `align-self:`
        },
    ],
    animation: [
        {
            in: `ani:|ani +:`,
            out: `animation:`
        },
        {
            in: `ani-dl:|ani-dl +:`,
            out: `animation-delay:`
        },
        {
            in: `ani-del:|ani-del +:`,
            out: `animation-delay:`
        },
        {
            in: `ani-dir:|ani-dir +:`,
            out: `animation-direction:`
        },
        {
            in: `ani-dur:|ani-dur +:`,
            out: `animation-duration:`
        },
        {
            in: `ani-fm:|ani-fm +:`,
            out: `animation-fill-mode:`
        },
        {
            in: `ani-ic:|ani-ic +:`,
            out: `animation-iteration-count:`
        },
        {
            in: `ani-nm:|ani-nm +:`,
            out: `animation-name:`
        },
        {
            in: `ani-ps:|ani-ps +:`,
            out: `animation-play-state:`
        },
        {
            in: `ani-tf:|ani-tf +:`,
            out: `animation-timing-function:`
        }
    ],
    // background
    background: [
        {
            in: `bg:|bg +:`,
            out: `background:`,
        },
    ],
    // border
    border: [
        {
            in: `bd:|bd +:`,
            out: `border:`,
        },
    ],
    // colors
    color: [
        {
            in: `cl:|cl +:`,
            out: `color:`,
        },
    ],
    // size
    size: [
        {
            in: `wd:|wd +:`,
            out: `width:`,
        },
        {
            in: `ht:|ht +:`,
            out: `height:`,
        },
    ],
    pseudo: [
        {
            in: `:hov|: +hov`,
            out: `:hover`,
        },
    ]
};

module.exports = Data;
