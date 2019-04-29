const Data = {
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
