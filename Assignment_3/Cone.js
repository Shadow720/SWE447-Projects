var gl = null;

function init() {
    var canvas = document.getElementById( "Cone-vertex-shader" );
    cone = new Cone( n ); 

    Cone = WebGLUtils.setupWebGL( Cone );

    if ( !Cone ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1.0, 1.0, 0.0, 1.0 );

    render();
}

function render() {
    cone.render();
}

window.onload = init;
