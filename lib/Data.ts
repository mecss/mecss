const Data = [
    // background
    {
        in: `bg:|bg +:`,
        out: `background:`,
    },
    // border
    {
        in: `bd:|bd +:`,
        out: `border:`,
    },
    // colors
    {
        in: `cl:|cl +:`,
        out: `color:`,
    },
    // size
    {
        in: `wd:|wd +:`,
        out: `width:`,
    },
    {
        in: `ht:|ht +:`,
        out: `height:`,
    },
    // pseudo-classes
    {
        in: `:hov|: +hov`,
        out: `:hover`,
    },
];

export default Data;
