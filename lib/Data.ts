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
