var cone = null;

function init() {
    var cone = document.getElementById( "Cone-vertex-shader" );
    cone = new Cone( n ); 
    var cone = null;

    Cone = WebGLUtils.setupWebGL( cone );

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
