var cone = null;

cone = new Cone( n );

function init() {
    var canvas = document.getElementById( "webgl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1.0, 0.0, 0.0, 1.0 );

    cone.render();
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
}

window.onload = init;
