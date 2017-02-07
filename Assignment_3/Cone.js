
function init() {
    var canvas = document.getElementById( "webgl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );

    if ( !Cone ) {
        alert("Unable to setup WebGL");
        return;
    }

    cone.clearColor( 1.0, 0.0, 0.0, 1.0 );

    render();
}

function render() {
    cone.render();
}

window.onload = init;
