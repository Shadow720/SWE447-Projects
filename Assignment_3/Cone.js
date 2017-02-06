var gl = null;

function init(Cone-vertex-shader) {
    var canvas = document.getElementById( "webgl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1.0, 1.0, 0.0, 1.0 );

    render(Cone-vertex-shader);
}

function render(Cone-vertex-shader) {
    gl.clear( gl.COLOR_BUFFER_BIT );
}

window.onload = init;
