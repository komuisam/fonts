
    let board = JXG.JSXGraph.initBoard("board", {
    label: false,
    axis: false,
    boundingbox: [-4, 4, 4, -4],
    maxboundingbox: [-4, 4, 4, -4],
    grid: false,
    showNavigation: false,
    showCopyright: false,
    keyboard: {
        enabled: false,
        dy: 30,
        panShift: true,
        panCtrl: false,
    },
});
const p = [ 
    [0, -3], 
    [-3, 0],
    [-3, 3],
    [-2,3.5],
    


    [0.2, 2.2],
    [0, 2],
    [-0.2, 2.2],



    [2,3.5],
    [3, 3],
    [3, 0],
    [0, -3]
];

const curve = board.create('cardinalspline', [p, 1.3, 'centripetal'], {fixed:true, createPoints: false ,strokeWidth:3, strokeColor:"red"});

txt = board.create('text',[0,1, 
    "<p class='love2'>I Love you</p>"
    ], {fontSize:45,anchorX:'middle'});

txt2 = board.create('text',[0,-0.5, 
    "<p class='love3'>Andrea</p>"
    ], {fontSize:30,anchorX:'middle'});

txt3 = board.create('text',[0,-2, 
    "<p class='love3'>V</p>"
    ], {fontSize:30,anchorX:'middle'});

